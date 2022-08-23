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
      const { fullName, email, gender, dateOfBirth, phoneNO, password} = payload;
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
          .then((json) => context.commit("setUser", json, e.message="Registration was successfull."))
          .catch(e => context.commit('setMessage', e.message="Email/Phone Number Already Exists."));
    },


  },
  modules: {
  }
})
