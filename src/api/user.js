import { post, get } from "@/utils/https"

export const login = async (data) => {
    return post('login', {
        'email': data?.email,
        'password': data?.password,
    })
}

export const getUserInfo = async () => {
    return get('getUserInfo')
}

export const getTransactionList = async (curPage, data) => {
    console.log('Transaction =====>  ', curPage,)
    return post(`getTransactionList?page=${curPage}`, data)
}