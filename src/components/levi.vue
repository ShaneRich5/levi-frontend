<template>
  <div>
          <div class = "home">
            <h1>{{ message }}</h1>


            <div class = "container col-sm-5 col-sm-offset-7">
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

<style scoped>

h1 {font-size: 70px; text-align: center; font-family: Heiti SC; font-weight: bolder;  line-height: 1em;}
</style>
