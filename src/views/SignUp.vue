<template>
  <div>
    <div class="m-auto w-1/2">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Email"
          name="email"
          :rules="[{ required: true, type: 'email' }]"
        >
          <a-input v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button
            :disabled="data.btnDisable"
            ref="submitBtn"
            html-type="submit"
            >Submit</a-button
          >
        </a-form-item>
      </a-form>
    </div>
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
  ref,
} from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const userStore = useUserStore();
const router = useRouter();

const submitBtn = ref("");

/**
 * Data
 */
const data = reactive({
  btnDisable: false,
});

const formState = reactive({
  email: "",
  password: "",
  remember: true,
});

const onFinish = async (values) => {
  console.log("Login Login", values);
  data.btnDisable = true;
  await userStore.loginTTTT(values);
  data.btnDisable = false;

  router.push({ path: "/", replace: true });
};

const onFinishFailed = ({ errorFields, values }) => {
  console.log("Failed:", errorFields, values);
  message.error(errorFields[0]?.errors[0]);
};

onBeforeMount(() => {});

onMounted(() => {});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({});
</script>

<style scoped lang="scss"></style>
