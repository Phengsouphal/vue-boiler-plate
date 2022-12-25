import { addTransactionApi, getUserInfo, login } from "@/api/user";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utils/functions";
import { message } from "ant-design-vue";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useUserStore = defineStore("user", () => {
  const userBalance = ref(0);
  const userInfo = ref({
    is_black: 0,
    flag: 0,
    app_user_id: "",
    is_freeze: 0,
    collect_rooms: "",
    game_url: "",
    money_tg: 0,
    vip_expire_time: 0,
    extra: "",
    token: "",
    money: 0,
    my_icode: 0,
    pid: "",
    id: 0,
    mobile: "",
    avatar: "",
    vip_pick_time: 0,
    nickname: "",
    apns_code: "",
  });

  const userToken = ref(
    new URLSearchParams(window.location.search).get("token") || ""
  );

  const setUserInfo = (val) => {
    // userInfo.value = val;
    // userBalance.value = val.money;
  };

  const setToken = (val) => {
    // token.value = val;
  };

  /* 获取用户信息*/
  const GetUserInfo = async () => {
    const res = await getUserInfo();
    console.log('User Info ===>>> ', res,)
    if (res.code === 0) {
      setUserInfo(res.data);
    }
    return { code: 0 };
  };
  /* 登录*/
  const LoginIn = async (data) => {
    try {
      const res = await login(data);
      console.log('Try to Login ===> ', res)

      if (res?.token) {
        userToken.value = res?.token
        setLocalStorage('token', res?.token)
        setUserInfo(res?.userInfo);
      } else if (res?.errors) {
        let error = ''
        if (res?.errors?.password) {
          error = res?.errors?.password[0]
        } else if (res?.errors?.email) {
          error = res?.errors?.email[0]
        } else {
          error = res?.errors
        }

        console.log('=============', error)
        message.error(error, 11152);
      }

      // const key = getQueryString("key");
      // if (!key) return { code: -1, message: "key = nil" };
      // const loginInfo = { key: key };
      // const res = await login(loginInfo);
      // if (res.code === 0) {
      //   setUserInfo(res.data);
      //   return { code: 0 };
      // }
    } catch (e) {
      // return { code: -1, message: e?.message };
    }
  };

  const initLogin = async () => {
    //remove token server token cookie before request prevent error
    const token = getLocalStorage("token")
    if (token) {
      userToken.value = token
      return await GetUserInfo();
    } else {
      // return await LoginIn();
    }
  };

  const loginTTTT = async (data) => {
    await LoginIn(data);
  }

  const getUserBalance = async () => {
    // const res = await getBalance();
    // if (res.code === 0) {
    //   userBalance.value = res.data;
    // }
  };

  const addTransaction = async (data) => {
    try {
      const res = await addTransactionApi(data);
      console.log('AddTransaction =============', res)
      if (res) {
        return res;
      } else if (res?.errors) {
        return null;
      }

    } catch (e) {
    }
  };

  const logout = () => {
    console.log('Log out ')
    removeLocalStorage('token')
    userToken.value = ''

  }

  const isAuthenticated = () => {
    const token = getLocalStorage("token")
    if (localStorage && userToken.value && token) {
      return true;
    }
    return false
  }



  watch(userToken, () => {
    setLocalStorage("token", userToken.value);
  });

  return {
    //property
    userInfo,
    userBalance,
    //Function
    setToken,
    initLogin,
    getUserBalance,
    loginTTTT,
    logout,
    isAuthenticated,
    addTransaction
  };
});
