<template lang = "html">

    <div>
  <h1 class = ""> {{ Tex }}</h1>


    <div class = "container ">


                <div class = "row">

                  <div class = "col-sm-6">
                        <img src = "ConnectDocuments.png" alt = "Documents" class = "pull-left img-responsive imG" width = "250" height = "250">
                  </div>

                  <div class = "col-sm-4">
                    <h3><b>Connect Soft documents</b></h3>
                    <p class = "lead">Allow documents that feed into each other to provide a consistent, untainted view of the
                  financial, operational and social behaviour of the institution.</p>


                  </div>

                </div>


        <hr>
                <div class = "row">
        <!-- position image to the right when on desktop,, but allow image to occupy the whole  webpage  when the device is less the 768px-->
                  <div class = "col-sm-5">
          <h3><b>Improve decision models</b></h3>
          <p class = "lead">Use statistical modelling to identify patterns and anomalies in the data that can help in
          making better decisions.</p>
                  </div>
                  <div class = "col-sm-6">
                   <img src = "../../assets/Statistics.png" alt = "Statistics" width = "350px" height = "270px"  class = "pull-right img-responsive imG">
                  </div>

                </div>
        <hr>
                <div class = "row">

                  <div class = "col-sm-6">
                  <img src = "../../assets/SearchDOC.png" alt = "Search" width = "300" height = "250" class = "pull-left img-responsive imG">
                  </div>
                  <div class = "col-sm-6">

                      <h3><b>Search. Get what is important to You!</b></h3>
                      <p class = "lead">All notifications and documents are indexed and
                      archived so that you can find what is needed at all times.</p>
                  </div>

                </div>
        <hr>

                <div class = "row">

                  <div class = "col-sm-5">
                    <h3><b>Collaborate with other apps!</b></h3>
                      <p class = "lead" >Connect to the tools you need to prevent wasting time using so many apps </p>
                    </div>

                  <div class = "col-sm-7">

                    <img src = "../../assets/Integrate.jpg" alt = "" width = "300" height = "270" class = "pull-right  img-responsive imG">

                  </div>

                </div>


        </div>

    </div>
</template>

<script>

export default {

  name: 'Product',

  data() {
    return {
      Tex: 'Connect to be more.',
    };
  },
};

</script>

<style lang = "css" scoped>


/*Tablets */
@media screen and (max-width: 768px) {

  .imG {

      float: none !important;
      margin: auto;
      text-align: center;

  }

}

/* Mobile */
@media screen and (max-width: 480px ) {

}


</style>
