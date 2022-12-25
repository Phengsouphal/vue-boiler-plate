<template>
  <div class="h-full">
    <a-menu
      v-model:openKeys="data.openKeys"
      v-model:selectedKeys="data.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="data.collapsed"
      :class="'custom-menu h-full'"
    >
      <a-button
        class="w-full border-none bg-transparent hover:bg-transparent focus:bg-transparent flex justify-center items-center '"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined
          style="font-size: 16px; color: #ffffffa6"
          v-if="data.collapsed"
        />
        <MenuFoldOutlined style="font-size: 16px; color: #ffffffa6" v-else />
      </a-button>

      <a-menu-item @click="nextPage('/')" key="2">
        <template #icon>
          <DesktopOutlined style="font-size: 16px" />
        </template>
        <span>Home</span>
      </a-menu-item>

      <a-menu-item @click="nextPage('/posts')" key="3">
        <template #icon>
          <InboxOutlined style="font-size: 16px" />
        </template>
        <span>Post</span>
      </a-menu-item>

      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5" @click="nextPage('/test')">Option 5</a-menu-item>
        <a-menu-item key="6" @click="nextPage('/animation')"
          >Option 6</a-menu-item
        >
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined style="font-size: 16px" />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>

      <a-menu-item @click="onLogout" key="2">
        <template #icon>
          <LogoutOutlined style="font-size: 16px" />
        </template>
        <span>Logout</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup>
import { useUserStore } from "@/pinia/modules/user";
import { reactive, toRefs, watch, onMounted, watchEffect } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
import { emitter, emitterEvent } from "@/utils/bus";
import { useRoute, useRouter } from "vue-router";

const userStore = useUserStore();

const router = useRouter();
const route = useRoute();

/**
 * Data
 */
const data = reactive({
  collapsed: false,
  selectedKeys: ["2"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});

const toggleCollapsed = () => {
  data.collapsed = !data.collapsed;
  data.openKeys = data.collapsed ? [] : data.preOpenKeys;
};

const nextPage = (p) => {
  router.push({ path: p });
};

const onLogout = () => {
  console.log("ON LOG OUT");
  userStore.logout();
  router.replace("/signup");
};

onMounted(() => {});

watchEffect(() => {});

// Expose data or function to refs
defineExpose({
  ...toRefs(data),
});

watch(
  () => data.openKeys,
  (_val, oldVal) => {
    data.preOpenKeys = oldVal;
  }
);

watch(
  () => route.name,
  (newVal, oldVal) => {
    console.log(oldVal, newVal, "========>>>>>> route change ");
    switch (newVal) {
      case "posts":
        data.selectedKeys = ["3"];
        break;
      case "home":
        data.selectedKeys = ["2"];
        break;
      case "test":
        data.selectedKeys = ["5"];
        break;
      default:
    }
  }
);
</script>

<style scoped lang="css">
.first-menu-item {
  background-color: green !important;
}

:global(
    .custom-menu.ant-menu-root.ant-menu-inline
      .ant-menu-item
      > .ant-menu-title-content
  ) {
  flex: none;
}
</style>
