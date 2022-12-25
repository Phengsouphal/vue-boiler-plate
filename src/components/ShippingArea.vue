<template>
  <div
    id="shipping_area"
    class="flex justify-center items-center w-full space-x-3"
  >
    <div
      class="flex justify-center items-center w-2/6 space-x-3 pr-10 border-r"
    >
      <img class="w-16" :src="require('@/assets/icons/fast.png')" />
      <div>
        <p class="font-semibold">Free Delivery</p>
        <p class="font-light">
          Free shipping around the world for all orders over $120
        </p>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-2/6 space-x-3 pr-10 border-r"
    >
      <img class="w-12" :src="require('@/assets/icons/debit-card.png')" />
      <div>
        <p class="font-semibold">Free Delivery</p>
        <p class="font-light">
          Free shipping around the world for all orders over $120
        </p>
      </div>
    </div>
    <div class="flex justify-center items-center w-2/6 space-x-3 pr-10">
      <img class="w-10" :src="require('@/assets/icons/customer-support.png')" />
      <div>
        <p class="font-semibold">Free Delivery</p>
        <p class="font-light">
          Free shipping around the world for all orders over $120
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref, onMounted, watchEffect } from "vue";

import { requireImage } from "@/utils/functions";
import { SearchOutlined } from "@ant-design/icons-vue";
const categories = [
  "All Categories",
  "Accessories",
  "Butters",
  "Camera",
  "Monitor",
  "Tablet",
  "Handbag",
  "Watch",
  "Herbs",
  "Electronic",
];

/**
 * Data
 */
const data = reactive({
  cateSelected: 0,
  search: "",
  showDropDown: false,
});

const handleMenuClick = (e) => {
  console.log("click", e);
  data.cateSelected = e?.key;
};

const onDropDownCate = (e) => {
  data.showDropDown = e;
  console.log("click", e);
};

onMounted(() => {});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({
  ...toRefs(data),
});
</script>

<style scoped lang="css"></style>
