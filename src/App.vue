<template>
  <div id="app">
    <div class="h-full flex justify-between items-start">
      <NavBar v-if="userStore.isAuthenticated()" />
      <div class="w-full p-10">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import NavBar from "@/components/NavBar.vue";

import { useUserStore } from "@/pinia/modules/user";
const userStore = useUserStore();

onBeforeMount(() => {
  console.log("On Login =>>>>>>>> ");
  // Login

  userStore.initLogin();
});
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* // font-family: $main-font-family; */
  font-weight: 600;
}
</style>
