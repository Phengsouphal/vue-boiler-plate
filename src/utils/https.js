// 一、配置axios
import axios from 'axios'
import { setLocalStorage, getLocalStorage } from '../utils/functions'

// Base Url。
let baseUrl = process.env.VUE_APP_API_BASE_URI

// axios configuration
axios.defaults.baseURL = baseUrl

// Set the maximum request duration
axios.defaults.timeout = 50000

// Request interceptor, set token
axios.interceptors.request.use(config => {
    const token = getLocalStorage('token')
    if (localStorage && token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    console.log('config :::: ======>>>>>', config)

    return config
}, error => {
    console.log(error)
    return Promise.error(error)
})

// Response Interceptor
axios.interceptors.response.use(response => {
    console.log("Response ===>>> ", response)
    if (response.status === 200) {

        return Promise.resolve(response.data)

        // condition check if user expired login expired
        // if (response.data.code !== '-10000') {
        //     return Promise.resolve(response.data)
        // } else {
        //     console.log('登录过期')
        //     // store.commit('clearUserInfo')  // 使用vuex存储过用户信息，这里需要清空一下。
        //     window.location.href = '/#/login'
        // }
    } else {
        return Promise.reject(response)
    }
})

// @param url 
// @param data 
// @param file  
// @param auth  

// get request
export function get(url, data) {
    return axios.get(url, data)
}

// post request
export function post(url, data) {
    let getToken = getLocalStorage('token')
    // url = url
    console.log(data);
    return axios.post(url, null, { params: data })
}

// put request
export function put(url, data) {
    return axios.put(url, data)
}

// delete request
export function del(url, data) {
    return axios.delete(url, data)
}

// upload request
export function uploader(url, file) {
    let params = new FormData()
    params.append('file', file)
    return axios.post(url, params)
}