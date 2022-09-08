<template>
  <!-- profile stuff -->
  <button
    class="bg-transparent"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling1"
    aria-controls="offcanvasScrolling1"
    data-bs-placement="bottom"
    title="Profile."
  >
    <i class="fa-solid fa-user"></i>
  </button>

  <div
    v-if="user"
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling1"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header text-center">
      <h1 class="offcanvas-title text-center" id="offcanvasScrollingLabel1">
        User Profile.
      </h1>
      <!-- close profile -->
      <button
        type="button"
        class="b1"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
    <hr />
    <div class="offcanvas-body">
      <div class="container justify-content-center text-center">
        <div class="row justify-content-center text-start">

          <div class="col-sm-11 justify-content-center text-center pb-3">
            <img
              src="https://i.postimg.cc/XJbk7hX2/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo.png"
              class="rounded-pill"
            />
          </div>

          <div class="col-sm-1 text-end">
            <!-- settings -->
            <p
              class="btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#editprofile"
            >
              <i id="settings" class="fa-solid fa-gear"></i>
            </p>

          </div>
          <hr>

          <div class="col-sm-12 justify-content-center text-center pt-2">
<!-- name -->
<div class="input-group">
  <input required="" type="text" name="fullName" class="input" :placeholder="user.fullName" readonly>
  <label class="user-label">Name</label>
</div>

<!-- email -->
<div class="input-group">
  <input required="" type="text" name="email" class="input" :placeholder="user.email" readonly>
  <label class="user-label">Email</label>
</div>

<!-- DOB -->
<div class="input-group">
  <input required="" type="text" name="dateOfBirth" class="input" :placeholder="user.dateOfBirth.slice(0, 10)" readonly>
  <label class="user-label">DOB</label>
</div>

<!-- Phone Number -->
<div class="input-group">
  <input required="" type="text" name="phoneNO" class="input" :placeholder="'27+ ' + user.phoneNO" readonly>
  <label class="user-label">Phone Number</label>
</div>

<!-- Join Date -->
<div class="input-group">
  <input required="" type="text" name="joinDate" class="input" :placeholder="user.joinDate.slice(0, 10)" readonly>
  <label class="user-label">Join Date</label>
</div>


<button class="noselect"><span class="text">Delete Profile</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
    
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling1"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <!-- headder -->
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="offcanvasScrollingLabel1">
        User Profile.
      </h2>
      <button
        type="button"
        class="b1"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
    <hr />
    <div class="offcanvas-body text-center">
      <p>Your Not Logged in?<br />Please Login To View Your Profile.</p>
    </div>
  </div>

  <EditProfileView :user="user" />
</template>

<script>
import EditProfileView from "./EditProfileView.vue";

export default {
  props: ["user"],
  mounted() {
    this.$store.dispatch("getuser");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  components: { EditProfileView },
};
</script>

<style scoped>
button {
  color: white;
  font-size: 1.3rem;
  padding: 0;
  transition: all 0.3s ease-in-out;
  border: 1px solid grey;
  border-radius: 360px;
  width: 33px;
}

button:hover {
  color: goldenrod;
  border: 1px solid goldenrod;
}

#settings {
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
}

#settings:hover {
  transform: rotate(150deg);
}

.offcanvas {
  background-color: rgb(29, 26, 26);
  color: grey;
  z-index: 1;
  flex: wrap;
  display: flex;
}

img {
  padding-top: 0;
  height: 22vh;
  width: 22vh;
}

.offcanvas-title {
  color: goldenrod;
  font-family: "Libre Baskerville", serif;
  font-weight: 500;
}

.b1 {
  background-color: transparent;
  color: grey;
  transition: all 0.3s ease-in-out;
}

.b1:hover {
  color: goldenrod;
}

.input-group {
 position: relative;
 justify-content: center;
 text-align: start;
}

.input {
  margin-bottom: 3vh;
  padding-top: 2vh;
  padding-bottom: 1vh;
  width: 100%;
 border: solid 1px goldenrod;
 color: grey;
 transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}

.user-label {
  font-size: 1.2rem;
 position: absolute;
 left: 10px;
 text-align: start;
 padding: 0;
 pointer-events: none;
 transform: translateY(1rem);
 transition: 150ms cubic-bezier(0.4,0,0.2,1);
}

.input ~ label, input:valid ~ label {
 transform: translateY(-50%) scale(0.8);
 background-color: #212121;
 color: goldenrod;
}

.noselect {
  outline: none;
 border: none;
  justify-content: center;
 width: 100%;
 height: 50px;
 cursor: pointer;
 display: flex;
 align-items: center;
 background: red;
 border: none;
 border-radius: 5px;
 box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
 background: #e62222;
}

.noselect, .noselect span {
 transition: 200ms;
}

.noselect .text {
 transform: translateX(35px);
 color: white;
 font-weight: bold;
}

.icon{
  text-align: end;
}

.noselect .icon {
 position: relative;
 left: -3vw;
 outline: none;
 border: none;
 transform: translateX(110px);
 height: 40px;
 width: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
}

.noselect svg {
 width: 15px;
 fill: #eee;
}

.noselect:hover {
 background: #ff3636;
 outline: none;
 border: none;
}

.noselect:hover .text {
 color: transparent;
}

.noselect:hover .icon {
 width: 150px;
 outline: none;
 border: none;
 transform: translateX(0);
}

.noselect:focus {
 outline: none;
}

.noselecton:active .icon svg {
 transform: scale(0.8);
}
</style>