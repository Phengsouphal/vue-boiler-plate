import { post, get, del } from "@/utils/https"

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


export const addTransactionApi = async (data) => {
    return post('addTransaction', {
        'title': data?.title,
        'amount': data?.amount,
        'status': data?.select,
        'date_for_editing': data?.datepicker
    })
}

export const deleteTransactionApi = async (id) => {
    return del('deleteTransaction', {
        'id': id
    })
}
