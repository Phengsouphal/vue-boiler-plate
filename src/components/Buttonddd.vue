<template>
  <div ref="testRef" :id="identt" class="test1"></div>
</template>

<script setup>
import { useUserStore } from "@/pinia/modules/user";
import { reactive, toRefs, ref, onMounted, watchEffect } from "vue";

import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  identt: String,
});

const { identt } = toRefs(props);

/**
 * Data
 */
const data = reactive({
  x: 0,
  xDelta: 0,
  y: 0,
  yDelta: 0,
  xMax: 0,
  yMax: 0,
  rectBox: null,
  move: false,
});

const testRef = ref("");

const maxSpeed = 2;

const move = (timestamp) => {
  data.x = data.x + data.xDelta;
  data.y = data.y + data.yDelta;
  if (data.x < data.rectBox.x || data.x > data.xMax) {
    data.xDelta = -data.xDelta;
    data.x = data.x < data.rectBox.x ? data.rectBox.x : data.xMax;
  }
  if (data.y < data.rectBox.y || data.y > data.yMax) {
    data.yDelta = -data.yDelta;
    data.y = data.y < data.rectBox.y ? data.rectBox.y : data.yMax;
  }

  const ddd = document.getElementById(identt.value);

  ddd.style.left = data.x + "px";
  ddd.style.top = data.y + "px";

  window.requestAnimationFrame(move);
};
const setSpeed = () => {
  data.xDelta = rand(-maxSpeed, maxSpeed);
  data.yDelta = rand(-maxSpeed, maxSpeed);
};
const rand = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

onMounted(() => {
  const rect = testRef.value?.getBoundingClientRect();
  console.log("onMounted ========== onMounted", rect, testRef);
  data.rectBox = testRef.value?.parentNode.getBoundingClientRect();
  data.xMax = data.rectBox.width + data.rectBox.x - rect.width;
  data.yMax = data.rectBox.height + data.rectBox.y - rect.height;

  data.x = rect.x;
  data.y = rect.y;

  setSpeed();
  const ddd = document.getElementById(identt.value);
  console.log(
    "onMounted ========== onMounted dddddddddddddddddd",
    ddd,
    identt.value
  );

  console.log(ddd);

  ddd.addEventListener("click", setSpeed);
  window.requestAnimationFrame(move);
  ddd.classList.toggle("move", true);
});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({
  ...toRefs(data),
});
</script>

<style scoped lang="css">
.bgcolor {
  background-color: black;
  color: rgba(255, 255, 255, 0.8);
}
.test1 {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #fcd757;
}
.test1.move {
  margin: 0;
  position: absolute;
}
.check {
  border: 2px solid black;
  width: 50px;
  height: 105px;
}
</style>
