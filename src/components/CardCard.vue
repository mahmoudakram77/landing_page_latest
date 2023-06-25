<template>
  <div class="con" data-aos="fade-up" data-aos-duration="3000">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12 mm text-center carrd mt-3">
        <div class="feat">
          <div class="icon position-relative">
            <img
              class="position-absolute number bottom-0"
              src="@/assets/pic/icon/features_icon01.png"
              alt=""
            />
          </div>
        </div>
        <h2>Increased Energy</h2>
        <p class="text-black-50 pt-3">
          Lorem ipsufm dolor site amet mortl regione,dolor sit amet mollis mortl ipsufm
          site amet.
        </p>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 mm text-center carrd mt-3">
        <div class="feat">
          <div class="icon position-relative">
            <img
              class="position absolute bottom-0 number"
              src="@/assets/pic/icon/features_icon02.png"
              alt=""
            />
          </div>
        </div>

        <h2>Calorie Build Up</h2>
        <p class="text-black-50 pt-3">
          Lorem ipsufm dolor site amet mortl regione,dolor sit amet mollis mortl ipsufm
          site amet.
        </p>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 mm text-center carrd mt-3">
        <div class="feat">
          <div class="icon position-relative">
            <img
              class="position-absolute bottom-0 number"
              src="@/assets/pic/icon/features_icon03.png"
              alt=""
            />
          </div>
        </div>

        <h2>Calorie Build Up</h2>
        <p class="text-black-50 pt-3">
          Lorem ipsufm dolor site amet mortl regione,dolor sit amet mollis mortl ipsufm
          site amet.
        </p>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 mm text-center carrd mt-3">
        <div class="feat">
          <div class="icon position-relative">
            <img
              class="position-absolute number bottom-0"
              src="@/assets/pic/icon/features_icon04.png"
              alt=""
            />
          </div>
        </div>

        <h2>Regular Routine</h2>
        <p class="text-black-50">
          Lorem ipsufm dolor site amet mortl regione,dolor sit amet mollis mortl ipsufm
          site amet.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.number {
  margin-left: 20px;
  font-size: 20px;
}
.carrd {
  background: orange;
  width: 90%;
  max-width: 280px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px rgb(0, 0, 0);
  margin: 0 10px;
  transition: 1s ease;
  margin-top: ;
}
@media (max-width: 992px) {
  .con {
  }
}

@media (max-width: 768px) {
  .carrd {
    max-width: 100%;
    /* margin: 0 auto; */
  }
}

img {
  transition: 1s ease;
}
.carrd:hover {
  transform: scale(1.1);
  transition: 1s ease;
}
.con {
  display: flex;
  justify-content: center;
  justify-items: center;
  margin-top: 100px;
}
/* @media (max-width: 768px) {
  .con {
    justify-content: flex-start;
    align-items: flex-start;
  }
} */
@media screen and (max-width: 1175px) {
  .carrd {
    margin: 0 auto;
  }
}
.con {
  margin-top: 660px;
}
</style>
