<template>
  <div>
    NotFound NotFound NotFound
    <!-- <Countdown /> -->
    NotFound
    {{ isAuthenticated }}
    <!-- Bet Dashboard Area -->
    NotFound
  </div>
</template>

<script setup>
import { useUserStore } from "@/pinia/modules/user";
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from "vue";

const userStore = useUserStore();
console.log("hello script setup");

const isAuthenticated = computed(() => userStore.isAuthenticated());

/**
 * Data
 */
const data = reactive({});

const onSelectedGame = () => {};

onBeforeMount(() => {});

onMounted(() => {});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({
  ...toRefs(data),
  onSelectedGame,
});
</script>

<style scoped></style>
