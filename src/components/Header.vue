<template>
  <a-page-header
    class="p-0 mb-3"
    :title="title"
    :sub-title="subTitle"
    :backIcon="''"
    @back="onBack"
  >
    <template #extra>
      <slot name="extra"> </slot>
    </template>
  </a-page-header>
</template>

<script setup>
import { useUserStore } from "@/pinia/modules/user";
import { reactive, toRefs, watch, onMounted, watchEffect } from "vue";

import { useRoute, useRouter } from "vue-router";

const userStore = useUserStore();

const router = useRouter();
const route = useRoute();

const props = defineProps({
  title: String,
  subTitle: String,
});
const { title, subTitle } = toRefs(props);

/**
 * Data
 */
const data = reactive({});

const onBack = () => {
  router.go(-1);
};

onMounted(() => {});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({
  ...toRefs(data),
});
</script>

<style scoped lang="css"></style>
