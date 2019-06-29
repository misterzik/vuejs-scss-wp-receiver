<template>
  <div class="about">

    <div class="parallax-4" id="Mission"></div>

    <div class="parallaxTxtContainer-1">
      <div class="parallax-innerTitle-4">ABOUT</div>
      <hr>
<div class="gxs-row">
      <div class="col-12">

        <div class="col-4">
        <div class="parallax-iTbold">{{title}}</div>
        </div>

        <div class="col-4">
        <div class="parallax-iT"><img src="../assets/images/lab-icon.png"></div>
        </div>

        <div class="col-4">
        <div class="parallax-iTserif">{{description}}</div>
        </div>

      </div>
      </div>
  </div>

          <hr />

          <div class="parallax-5" id="Mission"></div>

          <div class="parallaxTxtContainer-2">
            <div class="parallax-innerTitle-5">ALL AROUND WEB-DEVELOPMENT SERVICES</div>
            <hr>


      <div class="gxs-row">
            <div class="col-12">

              <div class="col-4">
              <div class="parallax-iTserif-2">{{description2}}</div>
              </div>

              <div class="col-4">
              <div class="parallax-iT-2"><img src="../assets/images/world-map.png"></div>
              </div>


              <div class="col-4">
              <div class="parallax-iTbold-2">{{title2}} <small><p style="text-color: #red!important;">Creativity.</p></small></div>
              </div>

            </div>
            </div>
                </div>

    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'ViMeDev is ready to help you, Build & Grow your brand online!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ante in nibh mauris cursus mattis molestie. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Vel quam elementum pulvinar etiam. At varius vel pharetra vel turpis nunc eget lorem. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Dictumst quisque sagittis purus sit amet volutpat consequat. Justo donec enim diam vulputate ut pharetra sit. Ligula ullamcorper malesuada proin libero nunc consequat interdum.',
      title2: 'Tri-State Digital Agency focused on',
      description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ante in nibh mauris cursus mattis molestie. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
      }
  }
}
</script>

<style scoped lang="scss">

.parallax-iTbold {
    font-size: 40px;
    font: 37px/1.5 "Bungee Shade", cursive;
}
.parallax-iTserif{
  $content-font: 29px/1.5 'Libre Franklin', sans-serif;
  font-size: 27px;
    text-align: left;
    color: #1c4e63;
}
.parallax-iTbold-2 {
    padding-right: 0rem;
    font-size: 47px!important;
    font: 37px/1.5 "Bungee Shade", cursive;
    color: #174e1c;
    padding-top: 0rem;

    @media screen and (min-width: 1106px) {
      padding-right: 5rem;
    }
}

.parallax-iT {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 1106px) {
      width: 60%;
      margin-top: 3rem;
    }
}

.parallax-iT-2 {
  margin-top: 1rem;
  width: 197%;
  margin-left: -20rem;
  opacity: 0.1;

  @media screen and (min-width: 1106px) {
    width: 197%;
    margin-left: -11rem;
    opacity: 0.1;
  }
}
.parallax-iTserif-2 {
  $content-font: 29px/1.5 'Libre Franklin', sans-serif;
  font-size: 37px;
    text-align: left;
    color: #146e94;
}
.parallaxTxtContainer-1 {
    height: 483px;
    max-height: 100%;
    background-color: rgba(255, 255, 255, 0.99);

    @media screen and (min-width: 1106px) {
      height: 100%;
      max-height: 100%;
    }
}
.parallaxTxtContainer-2 {
    height: 583px;
    max-height: 100%;
    background-color: rgba(255, 255, 255, 0.99);

    @media screen and (min-width: 1106px) {
      //display: none;
      height: 100%;
    }
}

.parallaxTxtContainer-1 {
    height: 100%;
    max-height: 100%;
  }

  .parallaxTxtContainer-2 {
      height: 100%;
      max-height: 100%;
    }
</style>
