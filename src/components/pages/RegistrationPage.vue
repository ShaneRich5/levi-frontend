<template>
  <div class="form">

    <ul class="tab-group">
      <li class="tab active">
        <router-link :to="{ path: 'register' }">Sign Up</router-link>
      </li>
      <li class="tab">
        <router-link :to="{ path: 'login' }">Log in</router-link>
      </li>
    </ul>

    <div class="tab-content">
      <div id="signup">
        <h1>Sign Up for Free</h1>
        <form action="/" method="post">
          <div class="top-row">
            <div class="field-wrap">
              <label>
                First Name<span class="req">*</span>
              </label>
              <input v-model="user.firstName" type="text" required autocomplete="off" />
            </div>
            <div class="field-wrap">
              <label>
                Last Name<span class="req">*</span>
              </label>
              <input v-model="user.lastName" type="text"required autocomplete="off"/>
            </div>
          </div>
          <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input v-model="user.email" type="email"required autocomplete="off"/>
          </div>
          <div class="field-wrap">
            <label>
              Set A Password<span class="req">*</span>
            </label>
            <input v-model="user.password" type="password" required autocomplete="off"/>
          </div>
          <button type="submit" class="button button-block">Get Started</button>
        </form>
      </div>


</div> <!-- /form -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
    },
  },
};
</script>

<style scoped>
</style>
