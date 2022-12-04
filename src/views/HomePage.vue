<template>
  <div>
    <Header title="HomePage"></Header>
    Home Page Home Page Home Page Home Page Home Page Home Page
    <!-- <Countdown /> -->
    <RouterLink to="/posts">post</RouterLink>
    <br />
    <RouterLink to="/test">test</RouterLink>

    {{ isAuthenticated }}
    <!-- Bet Dashboard Area -->
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
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
