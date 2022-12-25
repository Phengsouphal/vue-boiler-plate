<template>
  <div class="text-red-700 text-xs">
    <Header title="Posts">
      <template #extra>
        <a-button @click="onAddPost">Add Post</a-button>
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
          <a-button @click="onEdit(record)" :size="'small'" class="border-none">
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
                @confirm="confirmDelete(record)"
              >
                <DeleteOutlined class="text-red-500" />
              </a-popconfirm>
            </template>
          </a-button>
        </template>
        <template v-if="column.key === 'date'">
          <div>
            {{
              dayjs(record.date_for_editing, "MM/DD/YYYY").format("DD-MM-YYYY")
            }}
          </div>
        </template>
      </template>
    </a-table>

    <div>
      <a-modal
        v-model:visible="data.visible"
        title="Basic Modal"
        okText="Save"
        :okButtonProps="{
          form: 'myForm',
          key: 'submit',
          htmlType: 'submit',
        }"
        @cancel="onModelClose"
      >
        <a-form
          :model="formState"
          id="myForm"
          v-bind="layout"
          name="nest-messages"
          :validate-messages="validateMessages"
          @finish="onFinish"
        >
          <a-form-item
            :name="'title'"
            label="Title"
            :rules="[{ required: true }]"
          >
            <a-input v-model:value="formState.title" />
          </a-form-item>
          <a-form-item
            name="select"
            label="Select"
            has-feedback
            :rules="[
              { required: true, message: 'Please select your country!' },
            ]"
          >
            <a-select
              v-model:value="formState.select"
              placeholder="Please select a status"
            >
              <a-select-option value="success">SUCCESS</a-select-option>
              <a-select-option value="processing">PROCESSING</a-select-option>
              <a-select-option value="failed">FAILED</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item name="datepicker" label="DatePicker" v-bind="config">
            <a-date-picker
              class="w-full"
              v-model:value="formState['datepicker']"
              value-format="MM/DD/YYYY"
              :format="'DD/MM/YYYY'"
            />
          </a-form-item>
          <a-form-item
            :name="'amount'"
            label="Amount"
            :rules="[{ type: 'number', min: 0, max: 999 }]"
          >
            <a-input-number class="w-full" v-model:value="formState.amount" />
          </a-form-item>

          <a-form-item :name="'description'" label="Description">
            <a-textarea v-model:value="formState.description" />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script setup>
import { getTransactionList } from "@/api/user";
import Header from "@/components/Header.vue";
import { useUserStore } from "@/pinia/modules/user";
import { deleteTransactionApi } from "@/api/user";
import dayjs from "dayjs";
import router from "@/router";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
  ref,
} from "vue";

const userStore = useUserStore();

const formState = reactive({
  title: "",
  amount: undefined,
  datepicker: dayjs().format("DD/MM/YYYY"),
  select: "",
  description: "",
});

const config = reactive({
  rules: [{ required: true, message: "Please select time!" }],
});

const validateMessages = reactive({
  required: "${label} is required!",
  types: {
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

/**
 * Data
 */
const data = reactive({
  dataSource: [],
  visible: false,
  id: undefined,
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

const onAddPost = () => {
  data.visible = true;
};

const onFinish = (values) => {
  console.log("======onFinish", values, data.id);
  return;
  // const res = await userStore.addTransaction(values);
  // data.visible = false;

  // if (res) {
  //   data.currentPage = 1;
  //   data.pageSize = 15;
  //   loadData();

  //   console.log("add value data ========");
  // }
};

const pagination = computed(() => ({
  total: data.total,
  current: data.current,
  pageSize: data.pageSize,
}));

onBeforeMount(async () => {});

const onEdit = async (val) => {
  formState.title = val?.title;
  formState.select = val?.status;
  formState.datepicker = dayjs(val?.date_for_editing, "MM/DD/YYYY");
  formState.amount = val?.amount;
  console.log("==== on edit edit edit edit", val, formState.datepicker);
  data.id = val?.id;
  data.visible = true;
};

const onModelClose = () => {
  console.log("Model Close Close Close Close", data.id);
  data.id = undefined;
};

const confirmDelete = async (val) => {
  const res = await deleteTransactionApi(val?.id);
  if (res?.message) {
    message.success(res?.message, 5);
  } else {
    message.error(res?.errors, 5);
  }
  data.currentPage = 1;
  data.pageSize = 15;
  loadData();
};

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
  onAddPost,
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
