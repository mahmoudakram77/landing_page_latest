<template>
  <section id="product">
    <h1 class="text-center mt-5 pt-3 product">Product Gallery</h1>
    <div class="line mt-3">
      <div class="circle"></div>
    </div>
    <div class="all mt justify-content-center text-center">
      <button
        type="button"
        :class="{ active: selectedComponent === 'all-item' }"
        class="btn"
        @click="setSelectedComponent('all-item')"
      >
        All Item
      </button>
      <button
        type="button"
        :class="{ active: selectedComponent === 'the-Protein' }"
        class="btn"
        @click="setSelectedComponent('the-Protein')"
      >
        Protein
      </button>
      <button
        type="button"
        :class="{ active: selectedComponent === 'the-life' }"
        class="btn"
        @click="setSelectedComponent('the-life')"
      >
        Life Style
      </button>
      <button
        type="button"
        class="btn"
        :class="{ active: selectedComponent === 'the-nutrition' }"
        @click="setSelectedComponent('the-nutrition')"
      >
        Nutrition
      </button>

      <button
        type="button"
        class="btn"
        :class="{ active: selectedComponent === 'the-whey' }"
        @click="setSelectedComponent('the-whey')"
      >
        Whey
      </button>
    </div>
    <div class="content">
      <all-item v-if="selectedComponent === 'all-item'"></all-item>
      <the-protein v-if="selectedComponent === 'the-Protein'"></the-protein>
      <the-life v-if="selectedComponent === 'the-life'"></the-life>
      <the-nutrition v-if="selectedComponent === 'the-nutrition'"></the-nutrition>
      <the-whey v-if="selectedComponent === 'the-whey'"></the-whey>
    </div>
    <!-- section under the photo gallary -->
    <div class="conn d-flex">
      <div class="text text-center">
        <h1 class="m mt-5">
          Awesome Supplement For Your Body We Have 15<span>Years Of Experience</span>
        </h1>
        <p class="m">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi ut minus
          labore voluptate natus fuga voluptatum, id architecto velit eum magni nostrum
          sit mollitia, autem dignissimos, optio officiis? Nesciunt. consectetur
          adipisicing elit. Sint quasi ut minus labore voluptate natus fuga
        </p>
      </div>
      <div class="helo"></div>
      <div class="container d-flex coo">
        <div class="row">
          <div class="col mt-3">
            <div class="icon position-relative">
              <i class="fa-solid fa-cube"></i>

              <div class="mt-3">
                <h1 class="h11">
                  <div :class="getColorClass(count)">
                    {{ count }}
                  </div>
                </h1>
              </div>
              <div class="position-absolute keke">
                <h2>Package Delivered</h2>
              </div>
            </div>
            <div></div>
          </div>
          <div class="col mt-3">
            <div class="icon position-relative">
              <i class="fa-solid fa-location-dot"></i>
              <div class="mt-3">
                <h1 class="h11">
                  <div ref="countDiv">
                    <div :class="getColorClass(count1)">
                      {{ count1 }}
                    </div>
                  </div>
                </h1>
              </div>
              <div class="position-absolute keke">
                <h2 class="mt-1">Package Delivered</h2>
              </div>
            </div>
          </div>
          <div class="col mt-3">
            <div class="icon position-relative">
              <i class="fa-solid fa-user"></i>
              <div class="mt-3">
                <h1 class="h11">
                  <div ref="countDiv">
                    <div :class="getColorClass(count2)">{{ count2 }}</div>
                  </div>
                </h1>
              </div>
              <div class="position-absolute keke">
                <h2>Happy Customer</h2>
              </div>
            </div>
          </div>
          <div class="col mt-3">
            <div class="icon position-relative">
              <i class="fa-solid fa-thumbs-up"></i>
              <div class="mt-3">
                <h1 class="h11">
                  <div ref="countDiv">
                    <div :class="getColorClass(count3)">{{ count3 }}</div>
                  </div>
                </h1>
              </div>

              <div class="position-absolute keke"><h2>Year Experience</h2></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AllItem from "@/components/gallery/AllItem.vue";
import TheLife from "@/components/gallery/TheLife.vue";
import TheProtein from "@/components/gallery/TheProtein.vue";
import TheNutrition from "@/components/gallery/TheNutrition.vue";
import TheWhey from "@/components/gallery/TheWhey.vue";

export default {
  data() {
    return {
      selectedComponent: "all-item",
      isActive: false,
      count: 0,
      intervalId: null,
      count1: 0,
      intervalId1: null,
      count2: 0,
      intervalId2: null,
      count3: 3,
      intervalId3: null,

      isCounting: false,
      colorClasses: [
        "color-1",
        "color-2",
        "color-3",
        "color-4",
        "color-5",
        "color-6",
        "color-7",
        "color-8",
        "color-9",
        "color-10",
      ],
    };
  },
  components: {
    AllItem,
    TheLife,
    TheProtein,
    TheNutrition,
    TheWhey,
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
      this.isActive = true;
    },

    handleScroll() {
      const countDiv = this.$refs.countDiv;
      if (!countDiv) {
        return;
      }
      const countDivTop = countDiv.getBoundingClientRect().top;
      const countDivBottom = countDiv.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      if (countDivTop < windowHeight && countDivBottom > 0 && !this.isCounting) {
        this.isCounting = true;
        this.intervalId = setInterval(() => {
          this.count++;

          if (this.count > 888) {
            clearInterval(this.intervalId);
          }
        }, 0);
        this.intervalId1 = setInterval(() => {
          this.count1++;
          if (this.count1 > 1999) {
            clearInterval(this.intervalId1);
          }
        }, 0);
        this.intervalId2 = setInterval(() => {
          this.count2++;
          if (this.count2 > 499) {
            clearInterval(this.intervalId2);
          }
        }, 0);
        this.intervalId3 = setInterval(() => {
          this.count3++;
          if (this.count3 > 299) {
            clearInterval(this.intervalId3);
          }
        }, 0);
      }
    },
    getColorClass(value) {
      const index = Math.floor(value / 100) % this.colorClasses.length;
      return this.colorClasses[index];
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.t {
}
.all {
  box-shadow: 0 0 10px wheat;
  border-radius: 20px;
  /* max-width: 500px; */
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;
}
.all .btn {
  /* background: red; */
  margin: 0 5px;
  border-radius: 20px;
  /* height: 60px; */
}
.btn:focus,
.btn:active {
  background-color: orange;
  border-color: orange;
  transition: 1s ease all;
  border-radius: 20px;
}
.active.active {
  background-color: orange;
  border: 1px solid orange;
}
h1 {
  font-size: 30px;
  color: rgb(23, 56, 87);
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
@media screen and (max-width: 493px) {
  .all .btn {
    font-size: 10px;
    margin: 0 auto;
  }
  .all {
    width: 350px;
  }
}

/* container */
.conn {
  background-color: rgb(23, 56, 87);
  height: 700px;
}
.text {
  margin-top: 60px;
  color: white;

  margin: 0 auto;
  margin-top: 60px;
}
h1 {
  color: white;
  margin: 0 auto;
  max-width: 500px;
  padding: 0px 20px;
}
p {
  max-width: 800px;
  font-size: 12px;
  margin-top: 20px;
  padding: 0px 20px;
}
span {
  color: orange;
}
.icon {
  color: white;
  width: 30px;
  flex-direction: column;
}
.conn {
  flex-direction: column;
}
/* .row {
  margin: 0 auto;
} */
.col .icon div {
}
/* .col {
  margin: 0 90px;
  margin-top: 30px;
} */
.col {
  margin: 0 80px;
}
.keke {
  top: 60px;
  width: 133px;
  margin-left: 20px;
}
@media screen and (max-width: 427px) {
  .row {
    text-align: center;
    margin-top: -30px;
    font-size: 10px;
  }
  .icon {
    width: 20px;
  }
  .h11 {
    font-size: 10px;
  }
  .keke {
    margin-top: -20px;
    margin-right: 20px;
  }
}
.color-1 {
  color: orange;
  transition: color 1s ease-in-out;
}

.color-2 {
  color: #ff8000;
  transition: color 1s ease-in-out;
}

.color-3 {
  color: #ffff00;
  transition: color 1s ease-in-out;
}

.color-4 {
  color: #80ff00;
  transition: color 1s ease-in-out;
}

.color-5 {
  color: #00ff00;
  transition: color 1s ease-in-out;
}

.color-6 {
  color: #00ff80;
  transition: color 1s ease-in-out;
}

.color-7 {
  color: #00ffff;
  transition: color 1s ease-in-out;
}

.color-8 {
  color: #0080ff;
  transition: color 1s ease-in-out;
}

.color-9 {
  color: #ff0000;
  transition: color 1s ease-in-out;
}

.color-10 {
  color: #8000ff;
  transition: color 1s ease-in-out;
}
.product {
  color: rgb(23, 56, 87);
}
.coo {
  position: relative;
  top: 100px;
}
@media screen and (max-width: 500px) {
  .coo {
    position: relative;
    top: 20px;
  }
}
</style>
