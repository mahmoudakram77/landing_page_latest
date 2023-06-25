<template>
  <div class="text-center mt-5">
    <h1>Choose Your Packages</h1>
    <div class="line mt-3">
      <div class="circle"></div>
    </div>
    <p class="text-black-50 choose">
      There are many variations of passages of Lorem Ipsum that available, but the
      majority have fered alteration in some form, by injected humour.
    </p>
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="card1">
            <div class="icon-icon mt-5">
              <div class="text">
                <h1 class="mt-3">Basic Limited</h1>
                <p>MONTHLY</p>
                <p class="text-black-50">Subscribe Best Plans</p>
                <div class="text1 mt-3">
                  <h2>1 Person User <span>- $59</span></h2>
                  <div class="text2">
                    <p>1 Person User vidmate</p>
                    <hr />
                    <p>40 MG Per Capsule</p>
                    <hr />
                    <p>50 Capsules Per Bottle</p>
                    <hr />
                    <p>20% Future Purchases</p>
                  </div>
                  <hr />
                  <button class="btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="card1">
            <div class="icon-icon mt-5">
              <div class="text">
                <h1 class="mt-3">Basic Limited</h1>
                <p>MONTHLY</p>
                <p class="text-black-50">Subscribe Best Plans</p>
                <div class="text1 mt-3">
                  <h2>1 Person User <span>- $59</span></h2>
                  <div class="text2">
                    <p>1 Person User vidmate</p>
                    <hr />
                    <p>40 MG Per Capsule</p>
                    <hr />
                    <p>50 Capsules Per Bottle</p>
                    <hr />
                    <p>20% Future Purchases</p>
                  </div>
                  <hr />
                  <button class="btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="card1">
            <div class="icon-icon mt-5">
              <div class="text">
                <h1 class="mt-3">Basic Limited</h1>
                <p>MONTHLY</p>
                <p class="text-black-50">Subscribe Best Plans</p>
                <div class="text1 mt-3">
                  <h2>1 Person User <span>- $59</span></h2>
                  <div class="text2">
                    <p>1 Person User vidmate</p>
                    <hr />
                    <p>40 MG Per Capsule</p>
                    <hr />
                    <p>50 Capsules Per Bottle</p>
                    <hr />
                    <p>20% Future Purchases</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <button class="btn">Buy Now</button>
          </div>
        </div>
        <!-- two -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container .row {
  display: flex;
  justify-content: center;
}
.card1 {
  box-shadow: 0 0 4px wheat;
  height: 430px;
  padding: 10px;
  border-radius: 20px;
}
.card1:hover {
  box-shadow: 0px 10px 0 rgb(249, 154, 0), 0px -10px 0 rgb(249, 154, 0), 0 0 20px wheat;
  transition: 1s ease all;
}
.card1:hover .btn {
  background-color: rgb(249, 154, 0);
}

.card1 {
  transition: 1s ease all;
}
.btn {
  transition: 1s ease all;
}

.card1 {
  transition: 1s ease all;
}

/* circle line */
h1 {
  color: rgb(23, 56, 87);
  font-size: 40px;
}
span {
  color: rgb(249, 154, 0);
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
p {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 12px;
  font-size: 12px;
}
hr {
  height: 1px;
  margin-top: 2px;
  background: #5555557a;
}
.text2 {
  margin-top: -0px;
}
.text2 p {
  margin-top: -1px;
}
.btn {
  background-color: rgb(23, 56, 87);
  border-radius: 20px;
  color: white;
}
@media screen and (max-width: 767px) {
  .card1 {
    width: 300px;
    margin: 0 auto;
    margin-top: 13px;
  }
}
@media screen and (max-width: 500px) {
  .choose {
    width: 300px;
  }
  h1 {
    font-size: 30px;
  }
}
h2 {
  box-shadow: 0 0 3px rgb(154, 151, 151);
  display: inline;
  border-radius: 20px;
  padding: 3px 10px;
  text-align: center;
}
</style>
