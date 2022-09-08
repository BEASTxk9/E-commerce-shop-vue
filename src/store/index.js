import { createStore } from 'vuex';
import router from '@/router';
import axios from 'axios';
import swal from 'sweetalert';
import e from 'cors';

const RoastedBeansUrl = 'https://e-commerce-shop-api.herokuapp.com/';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    cart: null,
    message: null
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user,
    getProducts: state => state.products,
    getProduct: state => state.product,
    getToken: state => state.token,
    getCart: state => state.cart
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setMessage(state, message) {
      state.message = message
    },
    setToken(state, token) {
      state.token = token
    },
    setCart(state, cart) {
      state.cart = cart
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
        .then((json) => {
          if (json.msg === "Register Failed.") {
            swal({
              icon: 'error',
              title: `${json.msg}`,
              buttons: false,
              timer: 2000,
            })
          }
          if (json.msg === 'Register Successfull ') {
            context.commit("setUser", json.user);
            swal({
              icon: "success",
              title: `Welcome`,
              buttons: false,
              timer: 2000,
            });
            router.push({ name: "login" });
          }
        }
        )
    },

    // login
    login(context, payload) {
      // console.log(payload);
      fetch(RoastedBeansUrl + "login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Email/Password is incorrect. Please try again.") {
            swal({
              icon: 'error',
              title: `${data.msg}`,
              buttons: false,
              timer: 4000,
            })
          } else {
            context.commit("setUser", data.user[0]);
            swal({
              icon: "success",
              title: `Welcome`,
              buttons: false,
              timer: 2000,
            });
            context.dispatch('getcart', data.user[0].id);
            router.push({ name: "landing" })
          }
        })

    },

    // get users
    getusers: async (context) => {
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
        .then(() => context.dispatch('getusers',
          swal({
            icon: "success",
            buttons: false,
            timer: 1000,
          })
        ));
    },

    // edit user
    edituser(context, user) {
      fetch("https://e-commerce-shop-api.herokuapp.com/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((edituser) => edituser.json())
        .then((data) => {

          if (data.msg === "Edit Failed.") {
            swal({
              icon: 'error',
              title: `${data.msg}`,
              buttons: false,
              timer: 2000,
            })
          }
          if (data.msg === "Edit Successfull.") {
            console.log(data)
            context.dispatch("getusers",
              swal({
                icon: "success",
                title: `${data.msg}`,
                buttons: false,
                timer: 1000,
              })
            )
          }




        });
    },

    // _____________
    // get products
    getproducts: async (context) => {
      let res = await fetch('https://e-commerce-shop-api.herokuapp.com/products');
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit('setProducts', result)
      } else {
        console.log('Get products failed')
      }
    },

    // get single product  
    getproduct: async (context, Prod_id) => {
      let res = await fetch('https://e-commerce-shop-api.herokuapp.com/products/' + Prod_id);
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit('setProduct', result)
      } else {
        console.log('Get product failed')
      }
    },

    // add product
    addProduct: async (context, payload) => {
      const { Prod_name, category, price, description, img1, img2, dateAdded } = payload;

      try {
        await fetch(RoastedBeansUrl + "products", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            Prod_name: Prod_name,
            category: category,
            price: price,
            description: description,
            img1: img1,
            img2: img2,
            dateAdded: dateAdded
          }),
        })
          .then((response) => response.json)
          .then((json) => context.commit("setProducts", json.data));
      } catch (e) {
        console.log(e);
      }
    },

    // delete product
    deleteProduct: async (context, Prod_id) => {
      fetch("https://e-commerce-shop-api.herokuapp.com/products/" + Prod_id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => context.dispatch('getproducts',
          swal({
            icon: "success",
            buttons: false,
            timer: 500,
          })));
    },

    // edit product
    async editproduct(context, Prod_id) {
      try {
        fetch("https://e-commerce-shop-api.herokuapp.com/products/" + Prod_id.Prod_id, {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(Prod_id),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            context.dispatch("getproducts",
              swal({
                icon: "success",
                buttons: false,
                timer: 1000,
              })
            )
          })
          .catch(console.log('error'));
      } catch (e) {
        console.log(e);
      }
    },

    // _______
    // get cart
    getcart: async (context) => {
      // fetch
      let res = await fetch('https://e-commerce-shop-api.herokuapp.com/users/' + context.state.user.id + '/cart');
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit('setCart', result)
      } else {
        console.log('Get cart Failed.')
      }
    },

    // add cart
    addcart: async (context, payload) => {
      const { Prod_id } = payload;

      try {
        await fetch(RoastedBeansUrl + "users/" + context.state.user.id + "/cart", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            Prod_id: Prod_id,
          }),
        })
        context.dispatch("getcart", context.state.user.id, swal({
          icon: "success",
          buttons: false,
          timer: 1000,
        }))
      } catch (e) {
        console.log(e);
        context.dispatch(
          swal({
            icon: "error",
            buttons: false,
            timer: 1000,
          }))
      }
    },

    // delete cart
    deletecart: async (context) => {
      fetch("https://e-commerce-shop-api.herokuapp.com/users/" + context.state.user.id + "/cart", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          context.dispatch('getcart', context.state.user.id);
          swal({
            icon: "success",
            buttons: false,
            timer: 1000,
          })
        router.push({name: "login"})
        })
    },
    // delete cart item
    deletecartitem: async (context, id) => {
      fetch("https://e-commerce-shop-api.herokuapp.com/users/" + context.state.user.id + "/cart/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          context.dispatch('getcart', context.state.user.id,
            swal({
              icon: "success",
              buttons: false,
              timer: 1000,
            }))
        });
    },
  },
  modules: {
  }
})
