import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index";
import { store } from "@/pinia";

import { post } from './utils/https'

import {
    Button,
    message,
    Menu,
    MenuItem,
    SubMenu,
    PageHeader,
    Table,
    TableColumn,
    Tag,
    Form,
    FormItem,
    Input,
    InputNumber,
    DatePicker,
    Switch,
    Select,
    Checkbox,
    Popconfirm
} from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";

import '@/assets/styles/tailwind.css';


const logd = console.log;
console.log = (...agrs) => {
    if (process.env.NODE_ENV != "development") return;
    logd(...agrs);
};

const app = createApp(App)

// Axios
// app.config.globalProperties.$http = axios
app.config.globalProperties.post = post
app.use(Button)
app.use(message)
app.use(Menu)
app.use(MenuItem)
app.use(SubMenu)
app.use(PageHeader)

app.use(Table)
app.use(Tag)
app.use(TableColumn)
app.use(Form)
app.use(FormItem)
app.use(Input)
app.use(InputNumber)
app.use(DatePicker)
app.use(Switch)
app.use(Select)
app.use(Checkbox)
app.use(Popconfirm)



app.config.globalProperties.$message = message;

app.use(store).use(router).mount("#app");
