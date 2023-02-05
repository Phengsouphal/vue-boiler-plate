<template>
  <div class="timer-container">
    <p class="date">{{ data.date }}</p>
    <p class="time">{{ data.time }}</p>
  </div>
</template>
<script setup>
import { onUnmounted, reactive } from "vue";

const data = reactive({
  date: "",
  time: "",
});

const zeroPadding = (num, digit) => {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
};

const updateTime = () => {
  var cd = new Date();
  data.time =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2);
  data.date =
    zeroPadding(cd.getFullYear(), 4) +
    "-" +
    zeroPadding(cd.getMonth() + 1, 2) +
    "-" +
    zeroPadding(cd.getDate(), 2) +
    " ";
};

var timerID = setInterval(updateTime, 1000);
updateTime();

onUnmounted(() => {
  clearInterval(timerID);
});
</script>
<style lang="scss">
.timer-container {
  display: flex;
}

.time {
  margin-left: 5px;
}
</style>
