<template>
  <div class="container-fluid text-white register">
    <div class="row">
      <div class="col-md-6 col-xm-12"></div>
      <div class="col-md-5 col-xl-5 col-xm-12">
        <form @submit.prevent="register">
          <div class="site-heading text-center my-5">
            <h2 class="text-dark">Create <span>Account</span></h2>
            <h4 class="text-dark">Register account to have access to admin panel</h4>
          </div>
          <label for="_firstname"> Your Firstname </label>
          <input
            type="text"
            name="_firstname"
            id="_firstname"
            v-model="firstname"
            placeholder="Enter your name"
            required
            
          />
          <label for="_surname"> Your Surname </label>
          <input
            type="text"
            name="_surname"
            id="_surname"
            v-model="lastname"
            placeholder="Enter your surname"
            required
          />
          <label for="_replyto"> Your Email </label>
          <input
            type="email"
            name="_replyto"
            id="_replyto"
            v-model="email"
            placeholder="@gmail.com"
            required
          />
          <label for="_password"> Your Password </label>
          <input
            type="password"
            name="_password"
            id="_password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
          <div v-if="!users" class="site-heading text-center my-5">
            <label
              >Already a user?
              <span>
                <router-link to="/login"
                  ><button class="button">login to account</button>
                  </router-link
                ></span
              ></label
            >
          </div>
          <div v-else class="site-heading text-center my-5">
            <h2>
              Welcome <span>{{ users.firstname }} {{ users.lastname }}</span>
            </h2>
            <router-link to="/admin">
              <button class="button">admin</button>
            </router-link>
          </div>

          <button type="submit" class="button">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
AOS.init();
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  methods: {
    register() {
      return this.$store.dispatch("register", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f8002f;
  background-image: linear-gradient(326deg, #f8002f 0%, #000c14 74%);
}
.social-icons {
  font-size: 3rem;
}
.text-primary2 {
  color: aqua;
}
.register {
  background: url(https://wallpapercave.com/wp/wp4689852.png);

  height: 100vh;
}

body {
  /* padding: 5%; */
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
}

form input,
form textarea {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 0.9rem;
  background-color: #edf6f9;
  border-radius: 10px;
}

form input:focus,
form textarea:focus {
  border-color: #93b8e99f;
}

form label {
  margin-top: 1rem;
  display: block;
  color: inherit;
  font-weight: 800;
}

form button {
  background-color: #000000;
  color: rgb(255, 255, 255);
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0rem;
  border-radius: 10px;
}

form button:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.inline {
  display: inline;
  width: initial;
  margin-bottom: 1rem;
}

.text {
  margin-left: 1rem;
}
</style>
