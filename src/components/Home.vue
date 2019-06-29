<template>
<div class="home">
  <div class="parallax" id="Mission"></div>

  <div class="parallaxTxtContainer">
    <div class="parallax-innerTitle">{{title}}</div>
    <hr>
      <div class="parallax-innerContent">{{description}}</div>
      <div class="parallax-innerContentRight">
        <!-- <div class="parallax-f-Image"></div> -->
        <img src="./../assets/images/lab-icon.png">
      </div>

  </div>

  <div class="parallax-2" id="UX"></div>

  <div class="parallaxTxtContainer-2">
    <div class="parallax-innerTitle-2">{{title1}}</div>
    <hr>
    <div class="parallax-innerContent-2">
      {{description1}}
    </div>
    <div class="parallax-innerContentRight">
      <!-- <div class="parallax-s-Image"></div> -->
       <img src="./../assets/images/lab-icon.png">
    </div>
  </div>

  <div class="parallax-3" id="Friendly"></div>

  <div class="parallaxTxtContainer-3">
    <div class="parallax-innerTitle-3">{{title2}}</div>
    <hr>
    <div class="parallax-innerContent-3">{{description2}}</div>
    <div class="parallax-innerContentLeft">
      <!-- <div class="parallax-t-Image"></div> -->
       <img src="./../assets/images/lab-icon.png">
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Our Mission',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. 
      Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ante in nibh mauris cursus mattis molestie. Venenatis lectus magna fringilla urna porttitor 
      rhoncus dolor purus non. Vel quam elementum pulvinar etiam. At varius vel pharetra vel turpis nunc eget lorem. Hendrerit gravida rutrum quisque non tellus orci ac auctor. 
      Dictumst quisque sagittis purus sit amet volutpat consequat. Justo donec enim diam vulputate ut pharetra sit. Ligula ullamcorper malesuada proin libero nunc consequat interdum.
      `,
      title1: 'User Experience Focused',
      description1: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. 
      Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ante in nibh mauris cursus mattis molestie. Venenatis lectus magna fringilla urna porttitor 
      rhoncus dolor purus non. Vel quam elementum pulvinar etiam. At varius vel pharetra vel turpis nunc eget lorem. Hendrerit gravida rutrum quisque non tellus orci ac auctor. 
      Dictumst quisque sagittis purus sit amet volutpat consequat. Justo donec enim diam vulputate ut pharetra sit. Ligula ullamcorper malesuada proin libero nunc consequat interdum.
      `,
      title2: 'Easy to work with',
      description2: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. 
      Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ante in nibh mauris cursus mattis molestie. Venenatis lectus magna fringilla urna porttitor 
      rhoncus dolor purus non. Vel quam elementum pulvinar etiam. At varius vel pharetra vel turpis nunc eget lorem. Hendrerit gravida rutrum quisque non tellus orci ac auctor. 
      Dictumst quisque sagittis purus sit amet volutpat consequat. Justo donec enim diam vulputate ut pharetra sit. Ligula ullamcorper malesuada proin libero nunc consequat interdum.
      `,
      quote: ' Our key to success is an affordable price to all our clients, without losing quality. '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
