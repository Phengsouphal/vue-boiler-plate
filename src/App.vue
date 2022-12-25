<template>
  <div id="app">
    <div class="h-full flex justify-between items-start relative">
      <NavBar v-if="userStore.isAuthenticated()" />
      <div class="w-full p-10 h-full">
        <router-view> </router-view>
      </div>

      <!-- <Buttonddd :identt="'kki'"></Buttonddd>
      <Buttonddd :identt="'kkwi'"></Buttonddd>
      <Buttonddd :identt="'kk22wi'"></Buttonddd>

      <Buttonddd :identt="'kkwei'"></Buttonddd>
      <Buttonddd :identt="'kk22weei'"></Buttonddd> -->
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import NavBar from "@/components/NavBar.vue";
import Buttonddd from "@/components/Buttonddd.vue";

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
