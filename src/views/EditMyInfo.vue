<template>
  <div class="text-red-700 text-xs">
    <Header title="Posts">
      <template #extra>
        <a-button>Add Post</a-button>
      </template>
    </Header>

    <a-table
      :scroll="{ y: 600 }"
      class="customTable"
      :dataSource="data.dataSource"
      :columns="data.columns"
      :pagination="pagination"
      :loading="data.loading"
      @change="onTableChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'status'">
          <span>
            <a-tag
              :color="
                record.status === 'failed'
                  ? 'volcano'
                  : record.status === 'processing'
                  ? 'geekblue'
                  : 'green'
              "
            >
              {{ record?.status.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-if="column.key === 'operation'">
          <a-button :size="'small'" class="border-none">
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
          <span class="mr-3"></span>
          <a-button :size="'small'" class="border-none">
            <template #icon>
              <a-popconfirm
                overlayClassName="delete-pop-confirm"
                title="Are you sure？"
                ok-text="Yes"
                cancel-text="No"
              >
                <DeleteOutlined class="text-red-500" />
              </a-popconfirm>
            </template>
          </a-button>
        </template>
      </template>
    </a-table>

    <!-- <Countdown /> -->
    <!-- Bet Dashboard Area -->
  </div>
</template>

<script setup>
import { getTransactionList } from "@/api/user";
import Header from "@/components/Header.vue";
import { useUserStore } from "@/pinia/modules/user";
import router from "@/router";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from "vue";

const userStore = useUserStore();

/**
 * Data
 */
const data = reactive({
  dataSource: [],

  columns: [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Date",
      dataIndex: "date_for_editing",
      key: "date",
    },
    { title: "Action", key: "operation" },
  ],
  currentPage: 1,
  total: 0,
  pageSize: 15,
  loading: false,
});

const onSelectedGame = () => {};

const pagination = computed(() => ({
  total: data.total,
  current: data.current,
  pageSize: data.pageSize,
}));

onBeforeMount(async () => {});

const loadData = async () => {
  data.loading = true;

  const param = {
    per_page: data.pageSize,
  };
  const res = await getTransactionList(data.currentPage, param);
  data.currentPage = res?.current_page;
  data.total = res?.total;
  data.pageSize = res?.per_page;
  data.dataSource = res?.data;
  data.loading = false;
  console.log(res);
};

onMounted(() => {
  loadData();
});

watchEffect(() => {});

const onTableChange = (pagination, filters, sorter) => {
  data.currentPage = pagination?.current;
  data.pageSize = pagination?.pageSize;
  loadData();

  console.log(pagination, filters, sorter);
};

// Expose data or function to refs
defineExpose({
  ...toRefs(data),
  onSelectedGame,
});
</script>

<style scoped lang="css">
:global(.customTable .ant-pagination-prev .ant-pagination-item-link),
:global(.customTable .ant-pagination-next .ant-pagination-item-link) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:global(.delete-pop-confirm .ant-btn.ant-btn-primary) {
  background-color: #1890ff;
}
</style>
