<template>
  <div class = "bImage">
   
   
      <div class = "md-title">{{ Title }} </div>
       
       
        <div class = "md-subhead">
            {{ subTitle }} </div>

    
    
    <div class = "identity">
       
    <md-layout id = "container" >
     <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="23" md-flex-large="23" md-flex-xlarge="20">
      2
    </md-layout>
    
    
       <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-flex-xlarge="60">
       
<md-card>
           <md-card-header>
       
        <div class = "md-title">levi</div>
        
      </md-card-header>
          
          
           <md-card-content>
               <md-input-container>

          
          <label>First Name </label>
          
          <md-input firstName required v-model = "user.firstName" autocomplete = "off"/>
          
        </md-input-container>
        
        <md-input-container>

          
          <label>Last Name </label>
          
          <md-input lastName required v-model = "user.lastName" />
          
        </md-input-container>

       <md-input-container>

          <label>Email</label>
          
          <md-input email required v-model = "user.email" />
          
        </md-input-container>
        
        
        <md-input-container >
          
          <label>Password</label>
          
          <md-input type = "password" required v-model = "user.password" />
          
        </md-input-container>
        
    
           </md-card-content>
           
           
           
         <md-button class="md-raised md-primary" style = "color: white; ">Create Account</md-button>

       </md-card>
       
    </md-layout>
    
    
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="23" md-flex-large="23" md-flex-xlarge="20">
      3
    </md-layout>
    
    </md-layout>
       
        
    </div>
</div>
    
    
</template>

<script>
export default {
  name: 'levi',
  data() {
    return {
      Title: ' levi makes data useful to you',
      subTitle: 'levi refines how you collect, arrange, analyse and represent data when making critical decisions',
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
    
    .identity {
        
    text-align: center;
    margin-top: 30px;

       
    }
.md-title {
        
        font-size: 85px;
        font-family: Heiti SC;
        line-height: 1.1em;
        outline-width: thin;
        margin-top: 90px;
        text-align: center;
    }
    
    .md-subhead {
        
        font-family: Heiti SC;
        font-size: 25px;
        padding-top:20px;
        text-align: center;
        line-height: 1.3em;
        margin: auto;
        width: 500px;
        
    }
        #container > .md-layout {
/*  background-color: lightgrey;*/

  border-color: black;
  align-items: center;
  justify-content: center;
/*  border-style: dotted;*/
  border-width: 1px;
  padding: 8px;
}

    .md-button {
         min-height: 53px !important;
      min-width: 46px !important;
      font-size: 26px !important;
      line-height: 0px; 
        
     

    }
    
        .md-raised {
        text-transform: none;
        font-family: Heiti SC;
        font-weight: bolder;
    }
    
    .md-card {
        width: 670px;
    }
    
/*
       .bImage {
        
        background: url(../assets/whiteCoffeedarken.jpg) no-repeat center ;
        background-size: cover;
        width: 100%;
        height: 100%;
}
*/

</style>
