<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-8 col-sm-12 main">
        <img class="big" :src="mainImage" alt="Product Image" />
        <div class="row">
          <div class="col-md-3 one" v-for="image in images" :key="image.id">
            <img
              class="small"
              :src="image.url"
              alt="Product Image"
              @click="changeMainImage(image.url)"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-8 col-sm-12 product-det">
        <h2>Product Details</h2>

        <h1 class="display-6 title">{{ productDetails }}</h1>
        <h3 style="color: orange">€120.00</h3>
        <p class="text-black-50">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which even slightly believable.
        </p>
        <div class="cart-controls">
          <div class="cart-count">
            <button class="btn" @click="removeFromCart">
              <i class="fas fa-minus"></i>
            </button>
            <span class="cart-number">{{ cartCount }}</span>
            <button class="btn" @click="addToCart">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <button class="btn add-to-cart">Add to Cart</button>
        </div>
        <div class="product-info mt-3">
          <h1>Product Info</h1>
          <p class="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quos.
          </p>
        </div>
        <div class="buttons">
          <button
            :class="{ active: showButton1 }"
            class="two"
            @click="showContent('button1')"
          >
            Description
          </button>
          <button
            :class="{ active: showButton2 }"
            class="two"
            @click="showContent('button2')"
          >
            Additional Information
          </button>
          <div class="content" v-if="showButton1">
            <transition name="fade" appear>
              <p class="text-black-50">
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which even slightly believable. There are many variations
              </p>
            </transition>
          </div>
          <div class="content" v-if="showButton2">
            <transition name="fade" appear>
              <p class="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam libero
                blanditiis quia aliquam natus quisquam possimus aspernatur ducimus non?
              </p>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImage: require("@/assets/pic/images/one.jpg"),
      images: [
        { id: 1, url: require("@/assets/pic/images/one.jpg") },
        { id: 2, url: require("@/assets/pic/images/two.png") },
        { id: 3, url: require("@/assets/pic/images/three.jpg") },
        { id: 4, url: require("@/assets/pic/images/one.jpg") },
      ],
      productDetails: "Vidmate Capsule",
      cartCount: 0,
      showButton1: false,
      showButton2: false,
      currentImageIndex: 0,
      selectedImageIndex: 0,
    };
  },
  methods: {
    changeMainImage(imageUrl) {
      this.mainImage = imageUrl;
    },
    addToCart() {
      this.cartCount++;
    },
    removeFromCart() {
      if (this.cartCount > 0) {
        this.cartCount--;
      }
    },
    showContent(button) {
      if (button === "button1") {
        this.showButton1 = true;
        this.showButton2 = false;
      } else if (button === "button2") {
        this.showButton2 = true;
        this.showButton1 = false;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.mainImage = this.images[this.currentImageIndex].url;
    }, 2000);
  },
};
</script>

<style scoped>
.cart-controls {
  display: flex;
  align-items: center;
}

.cart-count {
  display: flex;
  align-items: center;
  margin: 0 2px;
  justify-content: center;
}

.cart-count button {
  padding: 0;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background: orange;
}

.cart-count span {
  margin: 0 10px;
  font-weight: bold;
  font-size: 20px;
}
.cart-count {
  border: 1.3px solid orange;
  border-radius: 30px;
  padding: 0 10px;
}
.cart-count span {
  margin: 0 10px;
  font-weight: bold;
  font-size: 20px;
  position: relative;
}

.cart-count span:before,
.cart-count span:after {
  content: "";
  position: absolute;
  top: 0;
  width: 1.3px;
  height: 33px;
  background-color: orange;
}

.cart-count span:before {
  left: -5px;
}

.cart-count span:after {
  right: -5px;
}
.big {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 400px;
  padding: 0 5px;
}

.small {
  width: 100%;
  height: 100px;
  max-width: 100%;
  cursor: pointer;
  object-fit: cover;
}
.one {
  width: 20%;
  height: auto;
  padding: 4px;
  display: flex;
  margin: 0 auto;
}
.title {
  color: rgb(23, 56, 87);
}
.main {
  width: 500px;
}
.row {
  justify-content: center;
}
.btn {
  background: orange;
  border-radius: 20px;
  color: white;
  border: 2px solid orange;
}
.btn:hover {
  background: white;
  color: orange;
}
.line {
  width: 380px;
  height: 1px;
  border: 1px solid #555;
  margin: 0 auto;
  margin-top: 20px;
}
h1 {
  color: rgb(23, 56, 87);
}
.buttons {
  background-color: none;
}
.two {
  background: none;
  color: rgb(23, 56, 87);
  font-weight: 600;
}
.buttons button.active {
  color: orange;
}
.cart-number {
  color: orange;
  font-weight: 100;
}
.fade-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.v-leave-to {
  opacity: 0;
}
@media screen and (max-width: 767px) {
  .product-det {
    padding: 0 35px;
  }
}
@media screen and(max-width: 575px) {
  .product-det {
    margin: 100px;
  }
}
.small {
}
.one {
}
.small {
  width: 100%;
  height: 100px;
  max-width: 100%;
  cursor: pointer;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.small:hover {
  transform: scale(1.1);
}
</style>
