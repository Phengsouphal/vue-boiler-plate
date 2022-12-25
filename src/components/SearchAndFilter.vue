<template>
  <div
    id="search_and_filter"
    class="w-1/2 border px-5 py-3 rounded-full flex justify-between items-center space-x-3"
  >
    <a-dropdown trigger="click" @visibleChange="onDropDownCate">
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item v-for="(item, index) in categories" :key="index">
            <p :class="index == data.cateSelected && 'font-bold'">{{ item }}</p>
          </a-menu-item>
        </a-menu>
      </template>
      <a-button class="border-none w-40 px-2">
        <div class="flex justify-center items-center">
          {{ categories[data.cateSelected] }}
          <img
            class="w-3 ml-1"
            :src="
              data.showDropDown
                ? require('@/assets/icons/down-arrow.png')
                : require('@/assets/icons/up-arrow.png')
            "
          />
        </div>
      </a-button>
    </a-dropdown>
    <div class="h-5 w-0.5 bg-black"></div>
    <a-input
      v-model:value="data.search"
      :bordered="false"
      placeholder="Search Product"
      class="p-0"
    />
    <a-button size="large" class="border-none">
      <template #icon><SearchOutlined style="font-size: 26px" /></template>
    </a-button>
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
