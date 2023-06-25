<template>
  <div class="container" v-if="false">
    <div class="large-image">
      <img class="imgg" :src="largeImage" alt="Large Image" />
    </div>
    <div class="small-images">
      <div class="small-images-wrapper">
        <div
          v-for="(image, index) in smallImages"
          :key="index"
          @click="changeLargeImage(index)"
        >
          <img
            :src="image"
            alt="Small Image"
            :class="{ active: currentIndex === index }"
          />
        </div>
      </div>
      <div class="scroll-buttons">
        <div class="one">
          <button :disabled="currentIndex === 0" @click="scrollLeft">&lt;</button>
        </div>
        <div class="two">
          <button
            :disabled="currentIndex === smallImages.length - 1"
            @click="scrollRight"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      largeImage: "https://via.placeholder.com/600x400?text=Large+Image",
      smallImages: [
        "https://via.placeholder.com/150x100?text=Small+Image+1",
        "https://via.placeholder.com/150x100?text=Small+Image+2",
        "https://via.placeholder.com/150x100?text=Small+Image+3",
        "https://via.placeholder.com/150x100?text=Small+Image+4",
        "https://via.placeholder.com/150x100?text=Small+Image+5",
      ],
      currentIndex: 0,
    };
  },
  methods: {
    changeLargeImage(index) {
      this.currentIndex = index;
      this.largeImage = this.smallImages[index];
    },
    scrollLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.largeImage = this.smallImages[this.currentIndex];
      }
    },
    scrollRight() {
      if (this.currentIndex < this.smallImages.length - 1) {
        this.currentIndex++;
        this.largeImage = this.smallImages[this.currentIndex];
      }
    },
  },
};
</script>

<style scoped>
.large-image {
  /* margin-bottom: 20px; */
  display: flex;
  z-index: -1;
}

.small-images {
  position: relative;
  overflow: hidden;
}

.small-images-wrapper {
  display: flex;
  /* transition: transform 0.3s ease-in-out; */
}

.small-images div {
  /* margin: 0 10px; */
  cursor: pointer;
  /* flex: 0 0 33.33%; */
}

.small-images img {
  /* width: calc(100% / 3); */
  height: auto;
  margin: 1px;
}

button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background: rgb(255, 170, 0);
  margin: 0 1px;
  /* width: 30px; */
  color: white;
  /* border-radius: 20px; */
  border-radius: 0;
  /* max-height: 120px; */
}

.one button:first-child {
  left: 0;
}

.two button:last-child {
  right: 0;
}
.small-images .active {
  border: 1px solid rgba(255, 166, 0, 0.236);
}
.small-images {
  display: flex;
  margin: 0 00px;
}
.active {
  /* width: 200px; */
}
.imgg {
  width: 598px;
}
.large-image {
  max-width: 600px;
}
.small-images {
  max-width: 599px;
}
</style>
