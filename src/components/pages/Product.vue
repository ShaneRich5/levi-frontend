<template lang = "html">

    <div>
  
       <div class = "edit">
        <h1 class =  "md-display-3"> {{ Message }}</h1>
<h2 class = "md-subhead">{{ subHeading }} </h2>
   
   
   
   </div>
   
   
    <md-layout id = "container">
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="100" md-flex-xlarge="100">
      1
    </md-layout>
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
      <h1 id = "entitle" class = "md-display-1">Connect soft documents</h1>
      
      <p>Allow documents that feed into each other to provide a consistent, untainted view of what your institution is doing.</p>
    </md-layout>
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50">
      3
    </md-layout>
    
    
    <md-layout md-flex-xsmall = "100" md-flex-small = "100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
      4
    </md-layout>
    
    <md-layout md-flex-xsmall = "100" md-flex-small = "100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
      <h1 class = "md-display-1" > Create better decision models</h1>
            <p> identify patterns in the data that can help you make better desicions in the face of uncertainty.</p>
    </md-layout>

    
    <md-layout md-flex-xsmall = "100" md-flex-small = "100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
       <h1 class = "md-display-1" >  Search. Get what is important to You!</h1>
       
       <p>All notifications and documents are indexed and archived so that you can find what is needed at all times.</p>


    </md-layout>
    
    <md-layout md-flex-xsmall = "100" md-flex-small = "100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
    
    </md-layout>
    
    
    
    <md-layout md-flex-xsmall = "100" md-flex-small = "100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">



    </md-layout>
    
    <md-layout md-flex-xsmall = "100" md-flex-small = "100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
     <h1 class = "md-display-1" >Collaborate with other apps!</h1>

 <p>Connect to the tools you need to prevent wasting time using so many apps.</p>

    </md-layout>
    
  </md-layout>
        
        
    </div>
    
    
</template>

<script>

export default {

  name: 'Product',

  data() {
    return {
      Message: 'Connect to be more.',
      subHeading: 'Always be aware of the state of your business ',
    };
  },
};

</script>

<style lang = "css" scoped>

  .edit {
        
        text-align: center;
          font-family: Heiti SC;
    }
    
/*Tablets */
    
 @media screen and (max-width: 600px) {
        


  .md-layout, h1 {
      
      float: none !important;
      margin: auto;
      text-align: center;
      width: 95%;

  }

}

      
    #entitle {
    line-height: 1.2em;
    }
    
    
#container > .md-layout {
    
  /*background-color: white;*/
  min-height: 100px;
/*  border-color: black;*/
    
    
/*  specifies the default alignment for items  */
  align-items: center;
    
/*  aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally)  */
  justify-content: center;
    
  padding: 0px 15px 0px;
    
/*  border-style: dotted;*/
    
  border-width: 1px;
    
    font-family: Heiti SC
}
    
    #entitle {
    line-height: 1.2em;
    }
    
    
    
/* Mobile */
@media screen and (max-width: 480px ) {

}


</style>
