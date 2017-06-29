<template>
  <div class = "form">
    <ul class="tab-group">
      <li class="tab">
        <router-link :to="{ path: 'register' }">Sign Up</router-link>
      </li>
      <li class="tab active">
        <!-- How is this element affect the login page  -->
        <router-link :to = "{ path: 'login' }">Log in</router-link>
      </li>
    </ul>
    <div class = "container ">

      <div id = "login" class = "row col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-8">
        <h2>levi</h2>
        <form v-on:submit.prevent = "attemptLogin">
          <div class = "">
            <label>
              <!-- Email Address<span class="req">*</span> -->
            </label>
            <input
              placeholder="Email"
              v-model="user.email"
              type="email"
              autocomplete="off"
              class = "form-control input-lg"
            />
          </div>

          <div class = "">
            <label>
              <!-- Password<span class="req">*</span> -->
            </label>
            <input
              v-model = "user.password"
              placeholder = "Enter password"
              type = "password"
              autocomplete = "off"
                class = "form-control input-lg"
            />
          </div>


              <p><a href = "#" id = " ">Forgot Password?</a></p>

      <input type = "Submit" class="btn btn-info btn-lg"  value = "Sign In" />
        </form>
      </div>
    </div><!-- tab-content -->
  </div> <!-- /form -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignInpage',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters([
      'token',
    ]),
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    attemptLogin() {
      /* eslint-disable no-console */
      // const { email, password } = {this.user};
      this.login({ email: 'admin@admin.com', password: 'password' });
    },
  },
};
</script>

<style scoped>

h2 {
  font-family: Heiti SC;
  font-size: 75px;
  font-weight: bolder;
  text-align: center;
}

.form {
  margin-top: 60px;
  position: relative;
  height: 100px;
}

.container {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50%;
      transform: translateX(-50%);
}



</style>
