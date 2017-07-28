<template>
 
 <div >
  <h1 class = "md-display-3">{{ message }}</h1>
  
  <div id = "knowlevi">
<p>
  levi is data curation software. This means that levi refines how institutions collect, arrange, analyse and share data when seeking insights into how it can operate at the highest level possible.
</p>
  </div>
  
  
  <md-layout id = "gridAbout">
   
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
        <span class = "md-display-2">Mission</span>
        
        
       <span class = "md-body-2">To help people use data to be more productive, reduce waste, Think Deeper and execute well. </span>
            
    </md-layout>
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
          s
    </md-layout>
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "100" md-flex-large = "100" md-flex-xlarge = "100">
         
          <span class = "md-headline">Core values</span>


            
    </md-layout>
    
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
        
        
       <span class = "md-body-2">empathy as we create wellbeing. </span>
            
    </md-layout>
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
          <span class = "md-body-2">Be sober at all times </span>
    </md-layout>
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
          <span class = "md-body-2">embrace positive Conquest</span>
    </md-layout>
    
    
     
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "50" md-flex-large = "50" md-flex-xlarge = "50">
          <span class = "md-body-2"></span>
    </md-layout>
    
    
    
     <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium = "100" md-flex-large = "100" md-flex-xlarge = "100">
            
    </md-layout>
    
    

  </md-layout>
  
       <h1 class = "md-display-2">{{ clause }}</h1>
       
       <p id = "HOW">
           At levi we combine the principles of old, effective research techniques and proper software development to reform the process of how businesses use data is to achieve business objectives.
       </p>
  
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      message: '#Think Deeper',
      clause: 'Focus on doing well',
    };
  },
};
</script>

<style scoped>
    
    h1 {
        font-family: Heiti SC;
        text-align: center;
    }
    
    .md-body-2 {
        font-size: 124%;
        padding: 18px;
    }
    
    .md-headline {
        
        font-size: 40px;
    }
    
    #knowlevi {
        width: 50%;
        margin: 0 auto;
        font-family: Heiti SC;
        font-size: 124%;
        line-height: 1.5em;
        text-align: center;
    }

    
    #gridAbout > .md-layout {
  background-color: #F9FBFB;
  min-height: 100px;
  border-color: black;
  align-items: center;
  justify-content: center;
  border-style: dotted;
  border-width: 1px;
  padding: 8px;
font-family: Heiti SC;

}
    
    #gridAbout {
                margin-top: 90px;
    }
    
    
    #HOW {
        font-size: 20px;
        line-height: 1.4em;
        font-family: Heiti SC;
        text-align: center;
        width: 600px;
        margin: 0 auto;
    }
</style>
