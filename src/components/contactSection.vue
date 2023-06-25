<template>
  <div class="parent" v-if="false">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 hi text-center">
          <h1 class="one text-center">Newsletter Sign Up</h1>
          <h2 class="one text-center">Notifications our best deals...</h2>
          <form class="ff" action="">
            <input class="input" placeholder="Your Email" type="email" name="" value="" />
            <button class="btn mt-1">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer-page></footer-page>
</template>

<script>
import footerPage from "./footerPage.vue";
export default {
  components: { footerPage },
};
</script>

<style scoped>
.container {
  border: 4px solid orange;
  padding: 5px;
  display: inline-block;
  position: relative;
  top: 120px;
  z-index: 1999;
  background: white;
}
.btn {
  background: orange;
}
.row {
  margin: 0 auto;
  width: 500px;
}
h1 {
  font-size: 20px;
}
@media screen and (max-width: 500px) {
  input {
    width: 100px;
  }
  .btn {
    margin: 0 5px;
    margin-top: -10px;
  }
  .container {
    width: 300px;
  }
}
.hi {
  display: flex;
  flex-direction: column;
}
.parent {
  text-align: center;
}
.btn:hover {
  background: white;
  color: orange;
  border: 1px solid orange;
}
</style>
