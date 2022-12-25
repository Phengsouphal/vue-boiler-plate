<template>
  <div>
    <Tabs
      @on-click="onTabClick"
      type="card"
      :closable="true"
      @on-tab-remove="(e) => useLayout.handleCloseTab(e)"
      v-model="data.routeName"
      :animated="false"
    >
      <TabPane
        v-for="tab in useLayout.listTabPannel"
        :label="tab.routeName"
        v-bind:key="tab.routeName"
        :name="tab.routeName"
      >
        <router-view v-slot="{ Component }" style="padding: 0px 10px">
          <transition name="fade" mode="out-in">
            <keep-alive v-if="route.meta.keepAlive">
              <component :is="Component" />
            </keep-alive>
            <component :is="Component" v-else />
          </transition>
        </router-view>
      </TabPane>
    </Tabs>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useLayoutStore } from "@/pinia/modules/layoutStore";
import { reactive, watch } from "vue";

const route = useRoute();

const useLayout = useLayoutStore();

const data = reactive({
  routeName: useLayout.activeRoute,
});

const onTabClick = (e) => {
  useLayout.switchPage(e);
};

watch(
  () => useLayout.activeRoute,
  (_val, _) => {
    data.routeName = _val;
    console.log(_val, "=========>>>>> ");
  }
);
</script>

<style scoped></style>
