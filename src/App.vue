<template>
  <header>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <navBar />
    <nav class="bar d-flex justify-content-around pt-4">
      <div class="logo">
        <h1 class="display-6">LOGO</h1>
      </div>
      <ul class="d-flex">
        <li v-show="!mobile" v-for="menu in menus" :key="menu.name">
          <a class="link" :href="menu.url">{{ menu.name }}</a>
        </li>
      </ul>
      <div
        class="iconn"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
        @click="toggleMobileNav"
      >
        <a class="btn" @click="open">
          <span v-if="!isOpen">
            <i class="fa-solid fa-bars" icon="fa-bars"></i>
          </span>
          <span v-else>
            <i class="fa-solid fa-xmark" icon="fa-xmark"></i>
          </span>
        </a>
      </div>
      <transition name="motion">
        <ul @click="open" v-show="mobileNav" class="mobile-nav pt-5">
          <div class="display-6 text-center">Logo</div>
          <li @click="!open" v-for="menu in menus" :key="menu.name">
            <a class="link" @click="toggleMobileNav" :href="menu.url">
              {{ menu.name }}
            </a>
          </li>
        </ul>
      </transition>
    </nav>
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      class="container d-flex justify-content-center mt-5"
    >
      <div class="row justify-content-center mt-5">
        <div class="col-lg-7 col-md-5 col-sm-6 coll">
          <h1 class="display-5">Super <span>Convenient</span> Quality Protein</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur seddo eiumod tempor incididunt labore
            adipiscing seddo eiumod
          </p>
          <div class="buttons">
            <button>PURCHASE</button>
            <button>CONTACT US</button>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-6">
          <img
            class="img-fluid image"
            src="@/assets/pic/gallery/gallery_thumb01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </header>

  <div class="dark">
    <CardCard />
    <HelloWorld />
    <supplement-section />
    <product-gallery />
    <scroll-top></scroll-top>
    <pricing-sction></pricing-sction>

    <OrderSection />
    <blog-section></blog-section>
    <ContactSection />
  </div>
  <!-- <div id="app" v-if="false">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div> -->
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SupplementSection from "./components/SupplementSection.vue";
import ProductGallery from "./components/ProductGallery.vue";
import ScrollTop from "@/components/tools/ScrollTop.vue";
import PricingSction from "@/components/PricingSction.vue";
import OrderSection from "@/components/OrderSection.vue";
import CardCard from "./components/CardCard.vue";
import blogSection from "@/components/blogSection.vue";
import ContactSection from "./components/contactSection.vue";
import navBar from "./components/navBar.vue";

import headerPage from "@/components/headerPage.vue";
export default {
  components: {
    HelloWorld,
    SupplementSection,
    ProductGallery,
    ScrollTop,
    PricingSction,
    OrderSection,
    CardCard,
    blogSection,
    ContactSection,
    headerPage,
    navBar,
  },
  data() {
    return {
      menus: [
        { name: "Home", url: "#home" },
        { name: "About", url: "#about" },
        { name: "Service", url: "#service" },
        { name: "Portfolio", url: "#portfolio" },
        { name: "Team", url: "#team" },
        { name: "Testimonial", url: "#testimonial" },
        { name: "Blog", url: "#blog" },
        { name: "Contact", url: "#contact" },
      ],
      mobile: null,
      mobileNav: null,
      windoWidth: null,
      scrollNav: null,
      isOpen: false,
      mobile: null,
      mobileNav: null,
      windoWidth: null,
      scrollNav: null,
      isOpen: false,
    };
  },
  mounted() {
    AOS.init();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    open() {
      this.isOpen = !this.isOpen;
    },
    checkScreen() {
      this.windoWidth = innerWidth;
      if (this.windoWidth <= 1200) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style lang="scss" scoped>
span {
  margin: 0 8px;
  padding: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.nav {
  display: flex;
  justify-content: space-between;
  margin: 20px 100px;
}
ul {
  list-style: none;
}
li a {
  margin: 0 10px;
  text-decoration: none;
}
button {
  background: orange;
  border: none;
  padding: 10px;
  border-radius: 20px;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  overflow-x: hidden;
}

.bg {
  animation: slide 30s ease-in-out infinite alternate;
  background-image: linear-gradient(-20deg, orange 50%, #000 50%);
  bottom: 0;
  left: -100%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: -1;
  overflow-x: hidden;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 10s;
  overflow-x: hidden;
}

@keyframes slide {
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(20%);
  }
}
li a {
  color: white;
}

.row {
  justify-content: center;
  align-items: center;
}
.buttons button {
  margin: 0 5px;
  transition: 1s ease all;
}
.buttons button:hover {
  background: #000;
  color: white;
  transition: 1s ease all;
}
.image {
  width: 380px;
}
span {
  color: white;
}
@media screen and (max-width: 575px) {
  .image {
    width: 200px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .buttons button {
    display: block;
    margin: 0 auto;
  }
  .buttons {
    margin: 0 30px;
    margin-top: 10px;
  }
  .coll h1,
  p {
    font-size: 20px;
    text-align: center;
  }
}
.coll h1,
p {
  color: wheat;
}
.btn {
  font-size: 30px;
  margin-top: -12px;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  background-color: orange;
  position: absolute;
  left: 0;
  height: 100vh;
  top: 0;
  width: 280px;
  z-index: 9000;
}
.mobile-nav li {
  margin: 10px 0;
  margin: 10px auto;
  font-size: 20px;
}
.motion-enter-active {
  transition: all 0.5s ease-out;
}

.motion-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.motion-enter-from,
.motion-leave-to {
  transform: translateX(-250px);
  opacity: 0;
}
.logo {
  z-index: 1000;
}
li a:hover {
  background: rgb(0, 0, 0);
  padding: 5px;
  border-radius: 20px;
  transition: 1s ease all;
}
ul li:hover {
  border-radius: 20px;
}
li a {
  transition: 1s ease all;
  font-size: 20px;
}
.row {
}

.buttons:nth-child(2) {
  margin-top: 10px;
}
</style>
