<template>
  <div class="image-group">
    <div
      class="image-group-container"
      :style="{ transform: 'translateX(' + position + 'px)' }"
      ref="container"
    >
      <div
        class="image-group-item"
        v-for="(image, index) in repeatedImages"
        :key="index"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
        require("@/assets/pic/brand/brnad_logo04.png"),
        require("@/assets/pic/brand/brnad_logo02.png"),
      ],
      position: 0,
      intervalId: null,
    };
  },
  computed: {
    repeatedImages() {
      return [...this.images, ...this.images];
    },
  },
  mounted() {
    const containerWidth = this.$refs.container.offsetWidth;
    const totalImagesWidth = this.images.length * 100 + (this.images.length - 1) * 40;
    const numIterations = Math.ceil(totalImagesWidth / containerWidth);
    const animationDuration = numIterations * 10;

    this.intervalId = setInterval(() => {
      this.position -= 1; // Adjust the speed of the animation by changing the value here
      if (this.position < -(totalImagesWidth - containerWidth)) {
        this.position = 0;
      }
    }, 10);

    setTimeout(() => {
      clearInterval(this.intervalId);
      this.position = 0;

      this.intervalId = setInterval(() => {
        this.position -= 1; // Adjust the speed of the animation by changing the value here
        if (this.position < -(totalImagesWidth - containerWidth)) {
          this.position = 0;
        }
      }, 10);
    }, animationDuration);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style>
.image-group {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}

.image-group-container {
  display: flex;
  /* width: 100%; */
  animation: slide 20s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.image-group-item {
  flex: 0 0 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 40px;
}
.image-group {
  margin-top: -100px;
}
</style>
