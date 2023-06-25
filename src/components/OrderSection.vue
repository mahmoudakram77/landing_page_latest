<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1 class="display-6">Perched Vidmate Suppke</h1>
      <div class="line mt-3">
        <div class="circle"></div>
      </div>
      <p class="text-black-50">
        There are many variations of passages of Lorem Ipsum that available, but the
        majority have fered alteration in some form, by injected humour.
      </p>
    </div>
  </div>

  <hooperCarousel />
</template>

<script>
import hooperCarousel from "@/components/hooperCarousel.vue";
export default {
  components: { hooperCarousel },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
h1 {
  color: rgb(23, 56, 87);
}
p {
  max-width: 600px;
  margin: 0 auto;
}
.line {
  width: 160px;
  height: 2px;
  background-color: #555;
  position: relative;
  margin: 0 auto;
  border-radius: 50%;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: orange;
  position: absolute;
  left: -5px;
  top: -4px;
  animation: move 4s alternate-reverse infinite;
}

@keyframes move {
  0% {
    left: -5px;
  }
  100% {
    left: calc(100% - 5px);
  }
}
</style>
