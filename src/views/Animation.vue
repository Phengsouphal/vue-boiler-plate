<template>
  <div class="box h-full w-full">
    <div
      ref="testRef"
      id="test"
      class="test"
      :class="{ move: data.move }"
    ></div>
  </div>
</template>

<script setup>
import {
  reactive,
  ref,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
} from "vue";

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

const maxSpeed = 5;

onBeforeMount(() => {});

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

  const ddd = document.getElementById("test");

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
  data.rectBox = testRef.value?.parentNode.getBoundingClientRect();
  data.xMax = data.rectBox.width + data.rectBox.x - rect.width;
  data.yMax = data.rectBox.height + data.rectBox.y - rect.height;

  data.x = rect.x;
  data.y = rect.y;

  setSpeed();
  const ddd = document.getElementById("test");
  console.log("onMounted ========== onMounted dddddddddddddddddd", ddd);

  ddd.addEventListener("click", setSpeed);
  window.requestAnimationFrame(move);
  ddd.classList.toggle("move", true);
});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({});
</script>

<style scoped lang="css">
.box {
  width: 100%;
  height: 100%;
  background-color: green;
}
* {
  box-sizing: border-box;
}
.bgcolor {
  background-color: black;
  color: rgba(255, 255, 255, 0.8);
}
.test {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #fcd757;
}
.test.move {
  margin: 0;
  position: absolute;
}
.check {
  border: 2px solid black;
  width: 50px;
  height: 105px;
}
</style>
