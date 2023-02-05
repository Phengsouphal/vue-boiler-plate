<template>
  <div class="group/item w-full flex flex-col justify-start items-center">
    <div class="bg-red-300 w-full h-72 relative overflow-hidden cursor-pointer">
      <div class="px-2 text-white bg-red-600 absolute z-10 top-4 left-5">
        {{ discount }}%
      </div>
      <img class="w-full h-full absolute" :src="image" />
      <div
        class="group-hover/item:translate-y-0 ease-in-out translate-y-20 transition duration-500 bg-white p-4 gap-6 bottom-0 absolute z-10 flex justify-start items-center"
      >
        <ShoppingOutlined
          class="hover:text-green-600"
          style="font-size: 21px"
        />
        <ControlOutlined class="hover:text-green-600" style="font-size: 21px" />
        <HeartOutlined class="hover:text-green-600" style="font-size: 21px" />
        <EyeOutlined class="hover:text-green-600" style="font-size: 21px" />
      </div>
    </div>
    <div class="py-3">
      <a-rate v-model:value="data.rate" allow-half />
    </div>
    <p class="text-lg text-neutral-700 py-2">Sapien Libero</p>
    <p class="text-lg text-green-400">
      $20.00
      <span class="text-base line-through text-neutral-700 font-light ml-2"
        >$30.00</span
      >
    </p>
  </div>
</template>

<script setup>
import {
  ControlOutlined,
  EyeOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons-vue";
import { reactive } from "vue";

const data = reactive({
  rate: 2.5,
});

const props = defineProps({
  image: String,
  discount: {
    type: Number,
    default: 5,
  },
});
</script>

<style scoped lang="css"></style>
