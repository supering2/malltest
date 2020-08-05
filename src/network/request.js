import axios from "axios";

export function request(config) {
  // 1.创建 axios 实例
  const instance1 = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  });
  // 2. axios的拦截器
  //2.1请求拦截方法和作用
  instance1.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      // console.log(err);
    }
  );
  //2.2 响应拦截
  instance1.interceptors.response.use(
    res => {
      //   console.log(res.data);
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  return instance1(config);
}
