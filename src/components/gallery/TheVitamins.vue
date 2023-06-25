<template>
  <div class="con px-5">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-10">
        <img
          class="img-fluid"
          src="@/assets/pic/gallery/gallery_thumb01.jpg"
          alt=""
        />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-10">
        <img src="@/assets/pic/gallery/gallery_thumb02.jpg" alt="" />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-10">
        <img src="@/assets/pic/gallery/gallery_thumb03.jpg" alt="" />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-10">
        <img src="@/assets/pic/gallery/gallery_thumb03.jpg" alt="" />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-10">
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
  margin: 20px;
}
/* @media screen and(max-width:767px) {
  img {
    max-width: 200px;
  }
} */
.con {
  margin-right: 20px;
}
</style>
