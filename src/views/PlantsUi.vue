<template>
  <div id="PlantsUI">
    <div class="m-auto w-full">
      <!-- Top Header -->
      <div class="flex justify-between items-center py-3">
        <p>Free Delivery: Take advantage of our time to save event</p>
        <div class="flex justify-center items-center">
          <a-menu mode="horizontal" class="border-none menu-cur-lang">
            <a-sub-menu key="sub1" popupClassName="currency" class="p-0">
              <template #title class="ml-0">
                <div class="flex justify-center items-center space-x-1">
                  <p>USD</p>
                  <DownOutlined />
                </div>
              </template>
              <a-menu-item key="setting:1">EUR</a-menu-item>
              <a-menu-item key="setting:2">GPB</a-menu-item>
              <a-menu-item key="setting:3">RUP</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2" popupClassName="language">
              <template #title class="ml-0">
                <div class="flex justify-center items-center space-x-1">
                  <p>English</p>
                  <DownOutlined />
                </div>
              </template>
              <a-menu-item key="setting:1">French</a-menu-item>
              <a-menu-item key="setting:2">Spanish</a-menu-item>
              <a-menu-item key="setting:3">Russian</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </div>
      <!-- Search Section -->
      <div class="flex justify-between items-center py-8 border-t border-b">
        <p class="text-3xl font-extrabold">LUKANI</p>
        <SearchAndFilter></SearchAndFilter>
        <div class="flex justify-between items-center space-x-2">
          <a-button size="large" class="border-none">
            <template #icon><TeamOutlined style="font-size: 26px" /></template>
          </a-button>
          <a-button size="large" class="border-none">
            <template #icon><HeartOutlined style="font-size: 26px" /></template>
          </a-button>
          <a-button size="large" class="border-none">
            <template #icon
              ><ShoppingOutlined style="font-size: 26px"
            /></template>
          </a-button>
        </div>
      </div>

      <!-- Menu Section  -->
      <div class="flex justify-between items-center py-3">
        <div class="w-1/4 dropdown relative">
          <a-button
            @click="data.isShow = !data.isShow"
            class="border-none px-2 w-full"
          >
            <div class="flex justify-start items-center">
              <img class="w-5 ml-3" :src="require('@/assets/icons/menu.png')" />
              <p class="text-base uppercase ml-3">Categories</p>
            </div>
          </a-button>

          <transition name="slide">
            <ul class="list" v-if="data.isShow">
              <li>Brake Parts</li>
              <li>Wheels & Tires</li>
              <li>Furnitured</li>
              <li>Turbo</li>
              <li>Lighting</li>
              <li>Accessories</li>
              <li>Body Parts</li>
              <li>Performance</li>
            </ul>
          </transition>
          <!-- <div class="w-1/4">
          <a-button
            @click="data.isShow = !data.isShow"
            class="border-none px-2"
          >
            <div class="flex justify-start items-center">
              <img class="w-5 ml-3" :src="require('@/assets/icons/menu.png')" />
              <p class="text-base uppercase ml-3">Categories</p>
            </div>
          </a-button>
          <transition name="slide">
            <ul class="child" v-if="data.isShow">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </transition>-->
        </div>

        <a-menu mode="horizontal" class="plant-menu">
          <a-sub-menu key="home" popupClassName="sub-menu-home">
            <template #title>
              <div class="flex justify-center items-center space-x-1">
                <p>HOME</p>
                <DownOutlined />
              </div>
            </template>

            <a-menu-item key="setting:1">Home Shop 1</a-menu-item>
            <a-menu-item key="setting:2">Home Shop 2</a-menu-item>
            <a-menu-item key="setting:3">Home Shop 3</a-menu-item>
            <a-menu-item key="setting:4">Home Shop 4</a-menu-item>
            <a-menu-item key="setting:5">Home Shop 5</a-menu-item>
            <a-menu-item key="setting:6">Home Shop 6</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="shop" popupClassName="sub-menu-shop">
            <template #title>
              <div class="flex justify-center items-center space-x-1">
                <p>SHOP</p>
                <DownOutlined />
              </div>
            </template>

            <a-menu-item-group>
              <a-menu-item key="shop-1">
                <p class="font-bold">Shop Layouts</p>
              </a-menu-item>
              <a-menu-item key="shop-2">Full Width</a-menu-item>
              <a-menu-item key="shop-3">Right Sidebar</a-menu-item>
              <a-menu-item key="shop-4">Right Sidebar List</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group :title="null">
              <a-menu-item key="shop-5">
                <p class="font-bold">Other Pages</p></a-menu-item
              >
              <a-menu-item key="shop-6">Cart</a-menu-item>
              <a-menu-item key="shop-7">Wishlist</a-menu-item>
              <a-menu-item key="shop-8">Checkout</a-menu-item>
              <a-menu-item key="shop-9">My Account</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group :title="null">
              <a-menu-item key="shop-10">
                <p class="font-bold">Product Types</p></a-menu-item
              >
              <a-menu-item key="shop-11">Product Details</a-menu-item>
              <a-menu-item key="shop-12">Product Sidebar </a-menu-item>
              <a-menu-item key="shop-13">Product Grouped</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>

          <a-sub-menu key="blog" popupClassName="sub-menu-blog">
            <template #title>
              <div class="flex justify-center items-center space-x-1">
                <p>BLOG</p>
                <DownOutlined />
              </div>
            </template>

            <a-menu-item key="setting:1">Blog Details</a-menu-item>
            <a-menu-item key="setting:2">Blog Full Width</a-menu-item>
            <a-menu-item key="setting:3">Blog Sidebar</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="pages" popupClassName="sub-menu-pages">
            <template #title>
              <div class="flex justify-center items-center space-x-1">
                <p>PAGES</p>
                <DownOutlined />
              </div>
            </template>
            <a-menu-item key="setting:1">About Us</a-menu-item>
            <a-menu-item key="setting:2">Services</a-menu-item>
            <a-menu-item key="setting:3">Frequently Questions</a-menu-item>
            <a-menu-item key="setting:3">Contact</a-menu-item>
            <a-menu-item key="setting:3">Login</a-menu-item>
          </a-sub-menu>

          <a-menu-item key="contact">
            <p>CONTACT US</p>
          </a-menu-item>
        </a-menu>
        <div class="w-1/4">
          <p class="text-right">Call Support: 0123456789</p>
        </div>
      </div>

      <!-- Carousel Slider -->
      <div class="w-full">
        <CustomCarousel></CustomCarousel>
      </div>

      <ShippingArea></ShippingArea>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/pinia/modules/user";
import SearchAndFilter from "@/components/SearchAndFilter.vue";
import CustomCarousel from "@/components/CustomCarousel.vue";
import ShippingArea from "@/components/ShippingArea.vue";
import {
  DownOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  ShoppingOutlined,
  TeamOutlined,
} from "@ant-design/icons-vue";
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  ref,
  watch,
} from "vue";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();

/*
 *
 * Data
 *
 */
const data = reactive({
  isShow: false,
});

onBeforeMount(() => {});

onMounted(() => {});

watchEffect(() => {});

watch(
  () => [,],
  (newVal, oldVal) => {}
);

// Expose data or function to refs
defineExpose({});
//
</script>

<style scoped>
#PlantsUI >>> .menu-cur-lang.ant-menu-horizontal {
  line-height: 25px;
}

#PlantsUI >>> .menu-cur-lang .ant-menu-submenu::after {
  border: none;
}

#PlantsUI >>> .plant-menu .ant-menu-item,
#PlantsUI >>> .plant-menu .ant-menu-submenu {
  padding: 0px 10px;
}

#PlantsUI >>> .plant-menu.ant-menu-horizontal {
}

#PlantsUI >>> .plant-menu .ant-menu-item::after,
#PlantsUI >>> .plant-menu .ant-menu-submenu::after {
  width: calc(100% - 20px);
  right: 0px;
  left: 10px;
}

#PlantsUI >>> .plant-menu.ant-menu-horizontal {
  border-bottom: 0px;
}
:global(.sub-menu-home .ant-menu),
:global(.sub-menu-shop .ant-menu) {
  padding: 10px;
}

:global(.sub-menu-shop .ant-menu) {
  display: flex;
}

:global(.sub-menu-shop .ant-menu .ant-menu-item-group-title) {
  padding: 0px;
}

:global(.currency .ant-menu-vertical.ant-menu-sub .ant-menu-item),
:global(.sub-menu-home .ant-menu-vertical.ant-menu-sub .ant-menu-item),
:global(.sub-menu-shop .ant-menu-vertical.ant-menu-sub .ant-menu-item),
:global(.language .ant-menu-vertical.ant-menu-sub .ant-menu-item) {
  height: 25px;
  line-height: 25px;
}

:global(.currency .ant-menu-vertical.ant-menu-sub),
:global(.language .ant-menu-vertical.ant-menu-sub) {
  min-width: auto;
}

.list {
  width: 100%;
  margin: 0;
  z-index: 10;
  background-color: white;
  margin-top: 3px;
  position: absolute;
  padding: 10px;
  list-style-type: none;
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
  overflow: hidden;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
}
.list li {
  padding: 10px;
  background: white;
}

.list li:hover {
  color: #1890ff;
  cursor: pointer;
}
.slide-enter-from {
  transform: scaleY(0);
}
.slide-leave-to {
  transform: scaleY(0);
}
</style>
