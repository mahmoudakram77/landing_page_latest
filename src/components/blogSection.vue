<template>
  <div class="container text-center display-6">
    <h1 class="h11">Blog & Tips Suppke</h1>
    <div class="line mt-5">
      <div class="circle"></div>
    </div>
    <p class="text-black-50 mt-5">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, consectetur Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Laborum, consectetur.
    </p>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <img src="@/assets/pic/blog/blog_img01.jpg" alt="" />
          <div class="card-body mt-3">
            <p style="color: orange">19. AUGUST. 2019</p>
            <h1 class="mt-3">Dietay Supplement Report Market Expected</h1>
            <p class="text-black-50 mt-3">
              Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum
              is simpl text the printing and types industry.
            </p>
          </div>
          <div class="cord">
            <a href="">Read More</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="@/assets/pic/blog/blog_img01.jpg" alt="" />
          <div class="card-body mt-3">
            <p style="color: orange">19. AUGUST. 2019</p>
            <h1 class="mt-3">Dietay Supplement Report Market Expected</h1>
            <p class="text-black-50 mt-3">
              Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum
              is simpl text the printing and types industry.
            </p>
          </div>
          <div class="cord">
            <a href="">Read More</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="@/assets/pic/blog/blog_img01.jpg" alt="" />
          <div class="card-body mt-3">
            <p style="color: orange">19. AUGUST. 2019</p>
            <h1 class="mt-3">Dietay Supplement Report Market Expected</h1>
            <p class="text-black-50 mt-3">
              Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum
              is simpl text the printing and types industry.
            </p>
          </div>
          <div class="cord">
            <a href="">Read More</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <image-move></image-move>
</template>

<script>
import ImageMove from "./imageMove.vue";
export default {
  components: {
    ImageMove,
  },
};
</script>

<style scoped ImageMove>
h1 {
  font-size: 14px;
}
.container {
  margin-top: 100px;
}
.h11 {
  color: rgb(23, 56, 87);
  font-size: 22px;
}
p {
  font-size: 12px;
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
.cord {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
}
.cord svg {
  width: 30px;
  margin-left: 5px;
  fill: orange;
  cursor: pointer;
  box-shadow: 0 0 10px wheat;
}
.cord a {
  font-size: 12px;
  color: black;
}
.card-body:hover h1 {
  color: orange;
  transition: 1s ease all;
}
.card-body h1 {
  transition: 1s ease all;
  color: rgb(23, 56, 87);
}
.card {
  margin: 10px 0;
}
.row {
  padding: 0 20px;
}
</style>
