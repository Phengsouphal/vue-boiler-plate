<template>
  <a-carousel :dots="false" arrows :slidesToShow="3">
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
      class="w-full flex flex-col items-center justify-center text-center p-4"
      v-for="(item, index) in data.list"
      :key="index"
    >
      <img :src="item.img" alt="" />
      <p class="mt-4 text-xl leading-6 text-left">{{ item.title }}</p>
      <p class="mt-2 font-light text-left">
        By <span class="text-green-500">admin / July 16, 2023</span>
      </p>
      <p class="my-4 text-justify font-light">
        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu
        ex. Aenean posuere libero eu augue condimentum rhoncus praesent.
      </p>
      <div class="w-full my-6 h-[1px] bg-slate-300"></div>

      <div class="w-full flex justify-between items-center">
        <p class="underline cursor-pointer hover:text-green-400">
          Continue Reading
        </p>

        <div class="flex items-center justify-center">
          <MessageOutlined />
          <span class="ml-2">{{ index }}</span>
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<script setup>
import {
  LeftOutlined,
  MessageOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import { reactive } from "vue";

const data = reactive({
  list: [
    {
      title: "Post with Audio",
      img: "https://htmldemo.net/lukani/lukani/assets/img/blog/blog1.jpg",
    },
    {
      title: "Libero lorem",
      img: "https://htmldemo.net/lukani/lukani/assets/img/blog/blog2.jpg",
    },
    {
      title: "Post with Gallery",
      img: "https://htmldemo.net/lukani/lukani/assets/img/blog/blog3.jpg",
    },
    {
      title: "Blog image post",
      img: "https://htmldemo.net/lukani/lukani/assets/img/blog/blog2.jpg",
    },
  ],
});
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
  margin-top: 20px;
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
  opacity: 0.8;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
