<template>
<div id="app">

<header>
  <nav>
    <div class="logo left">
       <img src="./assets/images/logo.png" style="width: 21px;">
    </div>

    <div class="logo-inner Left">
       <a v-on:click="show=!show">
      <img src="./assets/images/hamburger.png" class="hamburger-logo">
      </a>
      <!-- start -->
      <div class="fullMenu" transition name="fade">
        <div v-if="!show">
          <div class="overlay">
            <a class="closeHamburger" v-on:click="show=!show">
              X
            </a>

           <ul id="nav-mobile-full" class="right">
             <li><a href="/" v-on:click="show=!show">Home</a></li>
             <li><a href="/About">About</a></li>
             <!--<li><a href="/foo">Foo</a></li>-->
             <li><a href="/#UX" v-on:click="show=!show">U/X</a></li>
             <li><a href="/#Friendly" v-on:click="show=!show">Simplicity</a></li>
             <li><a href="/Articles">Articles</a></li>
           </ul>
         </div>
        </div>
    </div>
      <!-- end -->
    </div>

    <div class="logo-menu">
      <ul id="nav" class="right">
         <li><a href="/">Home</a></li>
         <li><a href="/About">About</a></li>
         <li><a href="/#UX">U/X</a></li>
         <li><a href="/#Friendly">Simplicity</a></li>
             <li><a href="/Articles">Articles</a></li>
       </ul>
    </div>

    <div class="logo-mobile-menu">

      <a class="navHamburger" v-on:click="show=!show;greet">Menu
      </a>

      <div class="fullMenu" transition name="fade">
        <div v-if="!show">
          <div class="overlay">
            <a class="closeHamburger" v-on:click="show=!show">
              X
            </a>

          <ul id="nav-mobile-full" class="right">
             <li><a href="/" v-on:click="show=!show">Home</a></li>
             <li><a href="/about">About</a></li>
             <li><a href="/#UX" v-on:click="show=!show">U/X</a></li>
             <li><a href="/#Friendly" v-on:click="show=!show">Simplicity</a></li>
             <li><a href="/Articles">Articles</a></li>
           </ul>
         </div>
        </div>
      </div>
    </div>


  </nav>
</header>

  <div class="container-full">
    <router-view></router-view>
  </div>


  <footer>

    <div class="footer">
      <div class="gxs-row">
      <div class="footer-1 col-4">
               <h5 class="footerTitle">Footer I</h5>
               <br />
               <!-- <p class="footerDesc">
                 FOOTER I CONTENT
               </p> -->
      </div>
      <div class="footer-2 col-4">
               <h5 class="footerTitle">Footer II</h5>
               <br />
               <!-- <p class="footerDesc">
                   FOOTER II CONTENT
                </p> -->
      </div>
      <div class="footer-3 col-4">
               <h5 class="footerTitle">Sitemaps</h5>
               <br />
               <!-- <ul class="footerDesc">
                 <li><a href="/">Home</a></li>
                 <li><a href="/about">About</a></li>
                 <li><a href="/clients">Clients</a></li>
                 <li><a href="/hire">Hire Us</a></li>
               </ul> -->
      </div>
    </div>
    </div>
         <div class="footer-copyright">
               <hr />
           <div class="copyright-block">
             © 2007-2016 Copyright Vimedev
           </div>

         </div>

    </footer>

</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true
    }
}
}
</script>

<style lang="scss">
@import "assets/scss/_base";
</style>
