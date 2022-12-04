<template>
  <div>
    <Header title="Form"></Header>

    <a-form
      :model="formState"
      v-bind="layout"
      name="nest-messages"
      :validate-messages="validateMessages"
      @finish="onFinish"
    >
      <a-form-item :name="'name'" label="Name" :rules="[{ required: true }]">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item :name="'email'" label="Email" :rules="[{ type: 'email' }]">
        <a-input v-model:value="formState.email" />
      </a-form-item>
      <a-form-item
        :name="'age'"
        label="Age"
        :rules="[{ type: 'number', min: 0, max: 99 }]"
      >
        <a-input-number v-model:value="formState.age" />
      </a-form-item>
      <a-form-item
        name="select"
        label="Select"
        :rules="[{ required: true, message: 'Please select your country!' }]"
      >
        <a-select
          v-model:value="formState.select"
          placeholder="Please select a country"
        >
          <a-select-option value="china">China</a-select-option>
          <a-select-option value="usa">U.S.A</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item name="datepicker" label="DatePicker">
        <a-date-picker
          v-model:value="formState.datepicker"
          value-format="YYYY-MM-DD"
        />
      </a-form-item>
      <a-form-item name="switch" label="Switch">
        <a-switch v-model:checked="formState.switch" class="customSwitch" />
      </a-form-item>
      <a-form-item :name="'website'" label="Website">
        <a-input v-model:value="formState.website" />
      </a-form-item>
      <a-form-item :name="'introduction'" label="Introduction">
        <a-textarea v-model:value="formState.introduction" />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
        <a-button html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    <!-- <Countdown /> -->
    <!-- Bet Dashboard Area -->
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useUserStore } from "@/pinia/modules/user";
import {
  reactive,
  ref,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
} from "vue";

const userStore = useUserStore();

/**
 * Data
 */
const formState = reactive({
  name: "",
  age: undefined,
  datepicker: "",
  switch: true,
  email: "",
  website: "",
  select: "",
  introduction: "",
});

const validateMessages = reactive({
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
});

const layout = reactive({
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
});

const onSelectedGame = () => {};

onBeforeMount(() => {});

onMounted(() => {});

watchEffect(() => {});

const onFinish = (value) => {
  console.log("Success:", value);
};

// Expose data or function to refs
defineExpose({
  onSelectedGame,
});
</script>

<style scoped lang="css">
:global(.customSwitch.ant-switch) {
  background-color: #00000040;
}

:global(.customSwitch.ant-switch.ant-switch-checked) {
  background-color: #1890ff;
}
</style>
