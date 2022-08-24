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
        .then(() => context.dispatch('getUsers'));
    },

    // update user
    updateuser: async (context, user) => {
            // fecth from body
            const { fullName, email, gender, dateOfBirth, phoneNO, password } = payload;
            // fetch method from api
      fetch("https://e-commerce-shop-api.herokuapp.com/users/" + user.id, {
          method: "PUT",
          body: JSON.stringify(product),
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
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getUsers");
        });
    },
    // _____________
    // get products
getproducts: async (context) => {
  let res = await fetch('https://e-commerce-shop-api.herokuapp.com/products');
  let data = await res.json();
  let result = data.results;
  if(result){
    context.commit('setProducts', result)
  }else{
    console.log('loading...')
  }
},

// get single product  
getproduct: async (context, Prod_id) => {
  // Product_id = 1
  fetch(RoastedBeansUrl+'products/' + Prod_id)
  .then((res) => res.json())
  .then((data) =>{
  console.log(data)
    context.commit("setProduct", data.results);
  })
},

 // add product
 addProduct: async(context, payload) => {
  const { Prod_name, category, price, description, img1, img2, dateAdded } = payload;
  
  try{
    await fetch(RoastedBeansUrl+"products", {
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
    router.push({name: "admin"});
    
  }catch(e) {
  console.log(e);
}
},

// delete product
deleteProduct: async (context, Prod_id) => {
  fetch("https://e-commerce-shop-api.herokuapp.com/products/" + Prod_id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => context.dispatch('getProducts'));
},


// updates list
    updateProduct: async (context, product) => {
      // fetch("http://localhost:3000/products/" + product.id, {
      fetch("https://mangastore-end-of-module.herokuapp.com/products/" + product.Prod_id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },


  },
  modules: {
  }
})
