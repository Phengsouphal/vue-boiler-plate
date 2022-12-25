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
  ref,
} from "vue";

const userStore = useUserStore();
console.log("hello script setup");

const isAuthenticated = computed(() => userStore.isAuthenticated());

const fileList = ref([]);
/**
 * Data
 */
const data = reactive({
  headers: {
    authorization: "authorization-text",
  },
});

const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "done") {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};

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
