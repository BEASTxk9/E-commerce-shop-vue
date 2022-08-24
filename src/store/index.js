import { createStore } from 'vuex';
import router from '@/router';

const RoastedBeansUrl = 'https://e-commerce-shop-api.herokuapp.com/';

export default createStore({
  state: {
    users: null,
    products: null,
    product: null,
    message: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setMessage(state, message) {
      state.message = message
    }
  },
  actions: {

    // register
    register: async (context, payload) => {
      // fecth from body
      const { fullName, email, gender, dateOfBirth, phoneNO, password } = payload;
      // fetch method from api
      await fetch("https://e-commerce-shop-api.herokuapp.com/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // fetch data from form
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          gender: gender,
          dateOfBirth: dateOfBirth,
          phoneNO: phoneNO,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json, e.message = "Registration was successfull."))
        .catch(e => context.commit('setMessage', e.message = "Email/Phone Number Already Exists."));
    },

    // login
    login: async (context, payload) => {
      const { email, password } = payload;
      let result = await fetch(RoastedBeansUrl + "login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      if (result) {
        router.push({ name: "landing" })
      }
      if (!result) {
        alert('Password or Email is wrong. Please try again.')
        router.push({ name: "login" })
      }
    },

    // get users
    getusersAD: async (context) => {
      let res = await fetch(RoastedBeansUrl + 'users');
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit('setUsers', result)
      } else {
        console.log(`Loading...`);
      }
    },

    // get single user
    getuser: async (context, id) => {
      fetch(RoastedBeansUrl + 'users/' + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setUsers', data.results);
        })
    },

    // delete user
    deleteuser: async (context, id) => {
      fetch("https://e-commerce-shop-api.herokuapp.com/users/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => context.dispatch('getUsers'));
    },

  },
  modules: {
  }
})
