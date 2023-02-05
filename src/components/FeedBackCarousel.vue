<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <LeftOutlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <RightOutlined />
      </div>
    </template>
    <div
      class="w-full flex flex-col items-center justify-center text-center py-4"
    >
      <img
        src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonials-icon.png"
        alt=""
      />
      <p class="py-4 text-xl font-light leading-6">
        “ When a beautiful design is combined with powerful technology,
        <br />
        it truly is an artwork. I love how my website operates and looks with
        this theme. Thank you for the awesome product. ”
      </p>
      <div class="p-6">
        <a href="#"
          ><img
            src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonial1.png"
            alt=""
        /></a>
      </div>

      <p class="p-6">
        <a href="#">Rebecka Filson</a> / <span>CEO of CSC</span>
      </p>
    </div>
    <div
      class="w-full flex flex-col items-center justify-center text-center py-4"
    >
      <img
        src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonials-icon.png"
        alt=""
      />
      <p class="py-4 text-xl font-light leading-6">
        “ When a beautiful design is combined with powerful technology,
        <br />
        it truly is an artwork. I love how my website operates and looks with
        this theme. Thank you for the awesome product. ”
      </p>
      <div class="p-6">
        <a href="#"
          ><img
            src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonial2.png"
            alt=""
        /></a>
      </div>

      <p class="p-6">
        <a href="#">Rebecka Filson</a> / <span>CEO of CSC</span>
      </p>
    </div>
    <div
      class="w-full flex flex-col items-center justify-center text-center py-4"
    >
      <img
        src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonials-icon.png"
        alt=""
      />
      <p class="py-4 text-xl font-light leading-6">
        “ When a beautiful design is combined with powerful technology,
        <br />
        it truly is an artwork. I love how my website operates and looks with
        this theme. Thank you for the awesome product. ”
      </p>
      <div class="p-6">
        <a href="#"
          ><img
            src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonial2.png"
            alt=""
        /></a>
      </div>

      <p class="p-6">
        <a href="#">Rebecka Filson</a> / <span>CEO of CSC</span>
      </p>
    </div>
  </a-carousel>
</template>

<script setup>
import {
  DownOutlined,
  HeartOutlined,
  LeftOutlined,
  EyeOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  ControlOutlined,
  ShoppingOutlined,
  TeamOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped lang="css">
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: auto;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide img) {
  display: inline;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: rgb(0, 0, 0);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.7;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
