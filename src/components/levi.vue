<template>
  <div>
          <div class = "home">
            <h1>{{ message }}</h1>


            <div class = "container col-sm-4 col-sm-offset-6">
              <form class = ""  method = "post">

                <div class = "row">

                  <div class = "col-sm-6">
                                 <div class = "form-group">
                                   <input  v-model = "user.firstName" type = "text" name = "" value = "" class = "form-control  input-lg" placeholder = "First Name" equired autocomplete="off" />
                                 </div>

                         </div>

            <div class = "col-sm-6">
                      <div class = "form-group">
                          <input type = "text" name = "" value = "" class = "form-control input-lg" placeholder = "last Name" required autocomplete="off" />
                      </div>

           </div>

                </div>

                <div class = "row">
        <div class = "col-sm-12">
             <div class="form-group">

               <!-- Create a show/hide command above the password field -->
                 <input  v-model="user.email" type = "email" name = "" value = "" class = "form-control input-lg" placeholder = "Enter Email">
             </div>
        </div>
        </div>

        <div class = "row">
        <div class = "col-sm-12">
            <div class = "form-group">
                <input  v-model="user.password" type = "password" name = "" value = "" class="form-control  input-lg" placeholder = "Choose a password">
            </div>
        </div>
        </div>

              </form>

<!-- User terms will be above the sign up button without the check box -->
              <input class = "btn btn-info btn-lg" value = "Sign Up" type = "Submit"/>
            </div>

          </div>
  </div>
</template>

<script>
export default {
  name: 'levi',
  data() {
    return {
      message: 'Chaos. Simplify it all',
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

<style >

h1 {font-size: 90px; text-align: center; font-family: Heiti SC; font-weight: bolder;  line-height: 1em; }

h1 {
  margin-top: 100px;
}
</style>
