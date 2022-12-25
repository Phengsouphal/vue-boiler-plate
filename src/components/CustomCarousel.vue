<template>
  <div id="carouselContainer" class="w-full">
    <!-- <Carousel
      ref="customCar"
      :afterChange="onCarouselChange"
      :beforeChange="onBefore"
      arrows
      swipeToSlide
      draggable
      class="custom-carousel"
    >
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <div class="w-8 h-8 custom-arrow-prev" />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <div class="w-8 h-8 custom-arrow-next" />
        </div>
      </template>

      <div class="bg1 relative">
        {{ data.currentCarousel + " " + ddd + " " + currentCarousel }}

        <div class="overflow-hidden flex flex-col justify-start items-start">
          <p
            id="text-title0"
            class="text-6xl font-bold absolute top-1/3 left-10 -mt-10"
          >
            BIG SALE
          </p>
          <p id="text-promo0" class="absolute top-1/3 left-10 mt-7">
            Discount
            <span class="text-green-400"> 20% Off </span>
            For Lukani Members
          </p>
          <a-button
            id="btn-dis0"
            type="primary"
            shape="round"
            class="absolute left-10 top-1/3 w-48 h-12 mt-16 border-none text-lg bg-light-blue hover:bg-stone-700"
          >
            DISCOVER NOW
          </a-button>
        </div>
      </div>
      <div class="bg2 relative">
        {{ data.currentCarousel + " " + ddd + " " + currentCarousel }}

        <div class="overflow-hidden flex flex-col justify-start items-start">
          <p
            id="text-title1"
            class="text-6xl font-bold absolute top-1/3 left-10 -mt-10"
          >
            TOP SALE
          </p>
          <p id="text-promo1" class="absolute top-1/3 left-10 mt-7">
            Discount
            <span class="text-green-400"> 20% Off </span>
            For Lukani Members
          </p>
          <a-button
            id="btn-dis1"
            type="primary"
            shape="round"
            class="absolute left-10 top-1/3 w-48 h-12 mt-16 border-none text-lg bg-light-blue hover:bg-stone-700"
          >
            DISCOVER NOW
          </a-button>
        </div>
      </div>
      <div class="bg3 relative">
        {{ ddd }}

        <div class="overflow-hidden flex flex-col justify-start items-start">
          <p
            id="text-title2"
            class="text-6xl font-bold absolute top-1/3 left-10 -mt-10"
          >
            LOVELY PLANTS
          </p>
          <p id="text-promo2" class="absolute top-1/3 left-10 mt-7">
            Discount
            <span class="text-green-400"> 20% Off </span>
            For Lukani Members
          </p>
          <a-button
            id="btn-dis2"
            type="primary"
            shape="round"
            class="absolute left-10 top-1/3 w-48 h-12 mt-16 border-none text-lg bg-light-blue hover:bg-stone-700"
          >
            DISCOVER NOW
          </a-button>
        </div>
      </div>
    </Carousel> -->

    <Carousel3d
      @after-slide-change="onCarouselChange"
      @before-slide-change="onBefore"
      class="custom-carousel"
      :autoplay="true"
      :autoplay-timeout="115000"
      :perspective="0"
      :disable3d="false"
      :space="365"
      :controls-visible="true"
      :controls-width="30"
      :controls-next-html="next()"
      :controls-prev-html="prev()"
      :controls-height="60"
      :width="data.carouseWidth"
      :height="450"
    >
      <slide class="slider" v-for="(slide, i) in data.slides" :index="i">
        <div :class="'bg' + (slide.index + 1)" class="relative h-full">
          <div class="overflow-hidden flex flex-col justify-start items-start">
            <p
              data-aos-delay="1"
              data-aos-offset="200"
              data-aos-duration="1200"
              data-aos="fade-right"
              :id="'text-title' + i"
              class="text-6xl font-bold absolute top-1/3 left-10 -mt-10"
            >
              {{ slide.name }}
            </p>
            <p
              data-aos-delay="1"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos="fade-right"
              :id="'text-promo' + i"
              class="absolute top-1/3 left-10 mt-7"
            >
              Discount
              <span class="text-green-400"> 20% Off </span>
              For Lukani Members
            </p>
            <a-button
              data-aos-delay="1"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos="fade-right"
              :id="'btn-dis' + i"
              type="primary"
              shape="round"
              class="absolute left-10 top-1/3 w-48 h-12 mt-16 border-none text-lg bg-light-blue hover:bg-stone-700"
            >
              DISCOVER NOW
            </a-button>
          </div>
        </div>
      </slide>
    </Carousel3d>
  </div>
</template>

<script setup>
import { useUserStore } from "@/pinia/modules/user";
import { reactive, toRefs, computed, onMounted, watchEffect, ref } from "vue";
import { Carousel, Slider } from "ant-design-vue";
import { Carousel3d, Slide } from "vue3-carousel-3d";
import { useRoute, useRouter } from "vue-router";

const userStore = useUserStore();

const router = useRouter();
const route = useRoute();

const next = () => {
  return `<div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <div class="w-8 h-8 custom-arrow-next" />
        </div>`;
};
const prev = () => {
  return `<div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <div class="w-8 h-8 custom-arrow-prev" />
        </div>`;
};

/**
 * Data
 */
const data = reactive({
  currentCarousel: 0,
  carouseWidth: 0,
  slides: [
    {
      name: "LOVELY PLANTS",
      index: 1,
    },
    {
      name: "BIG SALE",
      index: 0,
    },
    {
      name: "TOP SALE",
      index: 2,
    },
    {
      name: "LOVELY PLANTS",
      index: 1,
    },
    {
      name: "BIG SALE",
      index: 0,
    },
    {
      name: "TOP SALE",
      index: 2,
    },
  ],
});

const onBefore = (e) => {
  data.currentCarousel = e;
  console.log("from val ======== from", e);
};

const onCarouselChange = (e) => {
  var btnDis = document.getElementById("btn-dis" + e);
  var textPromo = document.getElementById("text-promo" + e);
  var textTitle = document.getElementById("text-title" + e);
  data.slides.forEach((val, index) => {
    if (e == index) {
      btnDis?.classList?.add("aos-animate");
      textPromo?.classList?.add("aos-animate");
      textTitle?.classList?.add("aos-animate");
    } else {
      document
        .getElementById("btn-dis" + index)
        ?.classList?.remove("aos-animate");
      document
        .getElementById("text-promo" + index)
        ?.classList?.remove("aos-animate");
      document
        .getElementById("text-title" + index)
        ?.classList?.remove("aos-animate");
    }
  });
};

onMounted(() => {
  const carouselContainer = document.getElementById("carouselContainer");
  data.carouseWidth = carouselContainer.clientWidth;

  const limitedInterval = setInterval(() => {
    const hasAnimation = document
      .getElementById("text-title1")
      ?.classList.value?.includes("aos-animate");
    if (hasAnimation) {
      data.slides.forEach((_, index) => {
        if (data.currentCarousel != index) {
          document
            .getElementById("text-title" + index)
            ?.classList?.remove("aos-animate");
          document
            .getElementById("btn-dis" + index)
            ?.classList?.remove("aos-animate");
          document
            .getElementById("text-promo" + index)
            ?.classList?.remove("aos-animate");
        }
      });

      clearInterval(limitedInterval);
      console.log("interval cleared!");
    }
  }, 1000);
});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({
  ...toRefs(data),
});
</script>

<style scoped lang="css">
.custom-carousel :deep(.carousel-3d-slide) {
  border: none;
}

.custom-carousel :deep(.slick-next),
.custom-carousel :deep(.slick-prev) {
  width: auto;
  height: auto;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.custom-carousel :deep(.slider .bg1) {
  height: 100%;
  background-image: url(@/assets/images/slider1.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.custom-carousel :deep(.slider .bg2) {
  height: 100%;
  background-image: url(@/assets/images/slider2.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.custom-carousel :deep(.slider .bg3) {
  height: 100%;
  background-image: url(@/assets/images/slider3.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.custom-carousel:hover :deep(.custom-slick-arrow) {
  visibility: visible;
  opacity: 1;
  transition: all 0.5s ease-in;
}

.custom-carousel :deep(.next:hover),
.custom-carousel :deep(.prev:hover) {
  opacity: 1;
}

.custom-carousel :deep(.custom-arrow-prev) {
  background: black;
  -webkit-mask-box-image: url(@/assets/icons/left-arrow.png);
}

.custom-carousel :deep(.custom-arrow-prev:hover),
.custom-carousel :deep(.custom-arrow-next:hover) {
  background: #1890ff;
}

.custom-carousel :deep(.custom-arrow-next) {
  background: black;
  -webkit-mask-box-image: url(@/assets/icons/right-arrow.png);
}

.custom-carousel :deep(.custom-slick-arrow) {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-out;
  z-index: 1;
}
.custom-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
