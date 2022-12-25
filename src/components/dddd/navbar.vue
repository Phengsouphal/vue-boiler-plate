<template>
  <Menu
    theme="dark"
    width="auto"
    :class="menuitemClasses"
    :open-names="['1', '2', '3', '4']"
  >
    <Submenu
      v-show="true"
      v-for="(navItem, tIndex) in MenuList"
      :key="tIndex"
      :name="tIndex + 1 + ''"
    >
      <template #title>
        <Icon :type="navItem.icons"></Icon>
        {{ navItem.name }}
      </template>
      <MenuItem
        v-for="(sonItem, index) in navItem.children"
        :key="index"
        :name="tIndex + 1 + '-' + index"
        :to="'/' + sonItem.routeName"
        @click.native="switchPage(sonItem)"
        >{{ sonItem.title }}</MenuItem
      >
    </Submenu>

    <!-- <MenuItem
        :name="_route.name"
        v-for="_route in listRouter"
        v-bind:key="_route.id"
        @click="switchPage(_route)"
      >
        <Icon :type="_route.icon"> </Icon>
        <span>{{ isCollapsed ? "" : _route.name }}</span>
      </MenuItem> -->
  </Menu>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useLayoutStore } from "@/pinia/modules/layoutStore";
import { routeName, listRouter } from "@/router/route";
import { MenuList } from "@/data/SharedDefine";
const route = useRoute();
const router = useRouter();
const useLayout = useLayoutStore();

const switchPage = (_route) => {
  console.log(_route);
  _route.isActived = true;
  useLayout.activeRoute = _route.routeName;
  router.push({ name: _route.routeName });
  if (useLayout.listTabPannel.length > 0) {
    const isExited = useLayout.listTabPannel.filter((x) => x.id == _route.id);
    if (isExited.length > 0) {
      return;
    }
  }
  useLayout.listTabPannel.push(_route);
};

defineProps({
  isCollapsed: Boolean,
  menuitemClasses: String,
});
</script>
