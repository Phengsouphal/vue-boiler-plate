<template>
  <div class="layout">
    <Layout>
      <Sider
        style="background: #17233d"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="data.isCollapsed"
      >
        <NavBar :isCollapsed="data.isCollapsed" />
      </Sider>
      <Layout>
        <Header :style="{ padding: 0 }" class="layout-header-bar">
          <Icon
            @click="collapsedSider"
            :class="layoutComputed"
            :style="{ margin: '0 20px' }"
            type="md-menu"
            size="24"
          ></Icon>
          <div class="md-more-menu">
            <MenuLayout />
          </div>
        </Header>

        <Content
          :style="{
            margin: '15px',
            padding: '20px',
            background: '#fff',
            minHeight: '900px',
            position: 'relative',
          }"
        >
          <div style="padding: 10px, position: relative;">
            <div class="close-icon">
              <Poptip v-model="data.visible" placement="bottom-end">
                <Icon type="ios-close-circle-outline" :size="28" />
                <template #content>
                  <div class="pop-tip">
                    <Button @click="onCloseTab(true)" type="text"
                      >关闭全部</Button
                    >
                    <Button @click="onCloseTab(false)" type="text"
                      >关闭其他</Button
                    >
                  </div>
                </template>
              </Poptip>
            </div>
            <Tabbar v-if="useLayout.listTabPannel.length > 0" />
            <div class="dashboard" v-else>
              <p class="title">欢迎 admin 登入成功</p>
              <div class="ip-container">
                <p class="label">本次 登录IP：</p>
                <p class="value">110.235.252.151</p>
                <p class="label">本次 登录IP：</p>
                <p class="value">110.235.252.151</p>
                <p class="label">登录地址：</p>
                <p class="value">柬埔寨</p>
              </div>
              <div class="ip-container">
                <p class="label">本次 登录IP：</p>
                <p class="value">110.235.252.151</p>
                <p class="label">本次 登录IP：</p>
                <p class="value">110.235.252.151</p>
                <p class="label">登录地址：</p>
                <p class="value">柬埔寨</p>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavBar from "./components/navbar.vue";
import Tabbar from "./components/tabbar.vue";
import MenuLayout from "./components/menuLayout.vue";
import { useLayoutStore } from "@/pinia/modules/layoutStore";

const router = useRouter();

const useLayout = useLayoutStore();

const data = reactive({
  isCollapsed: false,
  visible: false,
});

const rotateIcon = () => {
  return ["menu-icon", data.isCollapsed ? "rotate-icon" : ""];
};
const menuitemClasses = () => {
  return ["menu-item", data.isCollapsed ? "collapsed-menu" : ""];
};

const onCloseTab = (isAll) => {
  data.visible = false;
  console.log("is Close All", isAll);
  if (isAll) {
    router.push({ path: "/Home" });
    useLayout.clearAllTab();
  } else {
  }
};

const layoutComputed = computed(() => {
  if (data.isCollapsed) {
    return rotateIcon();
  } else {
    return menuitemClasses();
  }
});

const collapsedSider = () => {
  if (data.isCollapsed) {
    data.isCollapsed = false;
  } else {
    data.isCollapsed = true;
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/layout/style/layout.scss";

.close-icon {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 10;
}

.pop-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.title {
  padding: 25px;
  font-size: 24px;
}

.value {
  margin: 0px 10px;
}

.label {
  font-weight: 400;
}

.ip-container {
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
