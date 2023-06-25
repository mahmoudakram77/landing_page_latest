<template>
  <div class="con px-5 mt-5 d-flex">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-4 col-sm-6 hello">
        <img
          class="image"
          src="@/assets/pic/gallery/gallery_thumb01.jpg"
          alt=""
        />
        <div class="overlay">
          <div class="text">Lorem, ipsum.</div>
          <div class="text2"><p>Lorem, ipsum.</p></div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="@/assets/pic/gallery/gallery_thumb02.jpg" alt="" />
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="@/assets/pic/gallery/gallery_thumb03.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row img {
  width: 600px;
  height: 300px;
  margin: 5px 0;
}
/* @media screen and(max-width:767px) {
  img {
    max-width: 200px;
  }
} */
.con {
  margin-right: 20px;
}
.hello {
  /* position: relative; */
}
.con {
  position: relative;
  margin: 0 auto;
  justify-content: center;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.overlay {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 20px;
  left: 20px;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
  text-align: center;
}

.con:hover .image {
  opacity: 0.3;
}

.con:hover .overlay {
  opacity: 1;
}
.text {
  color: rgb(0, 0, 0);
  font-size: 16px;
  padding: 16px 32px;
}
@media screen and(max-width:767px) {
  .row img {
    margin-left: 70px;
  }
}
</style>
