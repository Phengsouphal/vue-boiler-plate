/*
* setLocalStorage
* 
*/
export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, window.JSON.stringify(value))
}

/*
* getLocalStorage
* 
*/
export const getLocalStorage = (key) => {
    return window.JSON.parse(window.localStorage.getItem(key))
}

/*
* removeLocalStorage
* 
*/
export const removeLocalStorage = (key) => {
    window.localStorage.removeItem(key)
}

/*
* setSessionStorage
* 
*/
export const setSessionStorage = (key, value) => {
    window.sessionStorage.setItem(key, window.JSON.stringify(value))
}

/*
* getSessionStorage
* 
*/
export const getSessionStorage = (key) => {
    return window.JSON.parse(window.sessionStorage.getItem(key) || '[]')
}
