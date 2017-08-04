<template>
<<<<<<< HEAD:src/components/Contact.vue


 <div id = "Contact">
 
 
  <div class = "md-title">{{ Title }}</div>
  <div class = "md-subhead">{{ subTitle }}</div>
  
  
  <div>
  <md-layout id = "layout">
     
     <md-layout id = "technicalSupport" md-flex-xmall = "100" md-flex-small = "100" md-flex-medium = "23" md-flex-large="23" md-flex-xlarge="20">
       
              <p> 
          <span class = "md-headline">Technical or Account Support.</span>  <br><br>
            We're here to help! If you have questions about your account or have technical issues, contact <a href = "mailto:levi@support.com">levi@support.com</a> to send a quick message.</p>

     </md-layout>
       
            <md-layout  id = "contactForm" md-flex-xmall = "100" md-flex-small = "100" md-flex-medium = "23" md-flex-large="23" md-flex-xlarge="20">
            
         <md-card id = "card">

    <md-card-content>
        <md-input-container>
           
                 <label>Tell me your name</label>
            <md-input required>
          
            </md-input>
        </md-input-container>
    </md-card-content>
    </md-card>
    
    <md-card id = "card">

    <md-card-content>
        <md-input-container>
           
                 <label>Email Address </label>
            <md-input required>
          
            </md-input>
        </md-input-container>
    </md-card-content>
    </md-card>
    
    
    <md-card id = "card">

    <md-card-content>

           
                 <md-input-container md-gutter md-clearable>
    <label>What's on your mind?</label>
    <md-textarea required></md-textarea>
  </md-input-container>

    </md-card-content>
    </md-card>
    
    
     <md-button class = "md-raised md-primary">
            Submit
        </md-button>
    
     </md-layout>
       
    
     
  </md-layout>
  
  
  </div>

    </div>
  
  
  
=======
  <h1>Contact Us</h1>
>>>>>>> 27e104af9bb91c94513441c530fa290b76f0a531:src/components/pages/ContactForm.vue
</template>

<script>
export default {
<<<<<<< HEAD:src/components/Contact.vue
  name: 'contact',
  data() {
    return {
      Title: 'levi loves to interact.',
      subTitle: ' Have a question, comment, or suggestion? Let us know, we\'re always here to help.',
    };
  },
=======
  name: 'contact-form',
>>>>>>> 27e104af9bb91c94513441c530fa290b76f0a531:src/components/pages/ContactForm.vue
};
</script>

<style scoped>
<<<<<<< HEAD:src/components/Contact.vue
    # {


        
    }
    #layout > #contactForm {
/*  background-color: lightgrey;*/
  border-color: black;
  align-items: center;
  justify-content: center;
/*  border-style: dotted;*/
  border-width: 1px;
  padding: 8px;
margin-top: 50px;
}
    
        #layout > #technicalSupport {
/*  background-color: lightgrey;*/
  border-color: black;
/*  border-style: dotted;*/
  border-width: 1px;
  padding: 15px;
font-family: Heiti SC;
   font-size: 16px;         
}
       .md-card {
        width: 500px;
    }
    
     .md-button {
         min-height: 53px !important;
      min-width: 500px !important;
      font-size: 26px !important;
      line-height: 0px; 
         margin-top: 20px;
    }

          .md-raised {
        text-transform: none;
        font-family: Heiti SC;
        font-weight: bolder;
              
    }
    
    .md-title {
        font-family: Heiti SC;
        text-align: center;
        font-size: 70px;
        margin-top: 40px;
        line-height: 1.1em;
    }
    
    #card {
                 margin-top: 20px;
    }
    
    .md-subhead {
        font-family: Heiti SC;
        text-align: center;
        font-size: 20px;
    }
=======

>>>>>>> 27e104af9bb91c94513441c530fa290b76f0a531:src/components/pages/ContactForm.vue
</style>
