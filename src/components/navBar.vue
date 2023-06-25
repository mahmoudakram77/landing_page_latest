<template>
  <header class="header" v-if="false">
    <nav class="bar d-flex justify-content-around pt-4">
      <div class="logo">logo</div>
      <ul class="d-flex">
        <li v-show="!mobile" v-for="menu in menus" :key="menu.name">
          <a class="link" :href="menu.url">{{ menu.name }}</a>
        </li>
      </ul>
      <div
        class="icon"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
        @click="toggleMobileNav"
      >
        <button @click="open">
          <span v-if="!isOpen">
            <i class="fa-solid fa-bars" icon="fa-bars"></i>
          </span>
          <span v-else>
            <i class="fa-solid fa-xmark" icon="fa-xmark"></i>
          </span>
        </button>
      </div>
      <transition name="motion">
        <ul @click="open" v-show="mobileNav" class="mobile-nav pt-5">
          <li @click="!open" v-for="menu in menus" :key="menu.name">
            <a class="link" @click="toggleMobileNav" :href="menu.url">
              {{ menu.name }}
            </a>
          </li>
          <button @click="toggleMobileNav">
            <span><i class="fa-solid fa-backward"></i></span>
          </button>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
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
    };
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
  mounted() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap");
.logo {
  width: 40px;
}
ul li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 600;
}
ul {
  list-style: none;
}
li {
  margin: 0 10px;
}
/* .bar {
  justify-content: space-around;
} */

/* .btn {
  position: relative;
  top: -6px;
} */
.header {
  background: url("");
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;

  z-index: 1;
}
* {
  font-family: "Yeon Sung", cursive;
}
.bar {
  background-color: rgba(0, 0, 0, 0.397);
  opacity: ;
  height: 100vh;
  padding: 10px;
}
.btn {
  height: 40px;
  width: ;
}
button {
  background: none;
  border: none;
}
.fa-xmark,
.fa-bars {
  font-size: 30px;
  color: white;
  transition: 1s ease;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 0, 0, 0.6);
  position: absolute;
  left: 0;
  height: 1000vh;
  top: 0;
  width: 220px;
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
.fa-backward {
  color: white;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: 1s ease;
}

.fa-backward:hover {
  color: red;
}
.link:hover {
  color: red;
}
.link:hover {
  transition: 0.6s ease;
}
.fa-xmark:hover,
.fa-bars:hover,
.fa-backward:hover {
  color: red;
  transform: scale(1.1);
  transition: 1s ease;
}
.link-exact-active {
  color: #42b983;
}
.link {
  transition: 0.6s ease;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 350px;
}
.btn {
  /* margin-left: 10px; */
}

.btn1 {
  background: red;
  border: red;
  border-radius: 20px;
  padding: 7px;
  width: 120px;
}
.btn2 {
  background: none;
  border: 1px solid white;
  padding: 7px;
  border-radius: 20px;
  width: 120px;
}
.btn1:hover {
  background: rgba(255, 0, 0, 0.614);
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.btn2:hover {
  background: white;
  color: black;
}
h1 {
  font-size: 60px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 50px;
  }
  .container {
    position: relative;
    bottom: 400px;
  }
}
.icon {
  height: 20px;
}
.link {
  display: inline-block;
  color: rgb(239, 235, 235);
  text-decoration: none;
}
.link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: red;
  transition: width 0.3s;
}

.link:hover::after {
  width: 100%;
  transition: width 0.3s;
}
@media screen and (max-width: 600px) {
  .container h1 {
    margin-top: -100px;
  }
}
button {
  cursor: pointer;
}
</style>
