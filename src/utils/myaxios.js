import axios from "axios";

const myaxios=axios.create({
    // baseURL:'/', //axios对象发送请求时路径的前缀
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000,   //单位是毫秒
})
export default myaxios;

//发送get请求，请求data.json文件(自动到public文件夹下找)
//请求成功输出resp.data


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;  //一定要返回，然后再发送到后端
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;    //一定要返回这个响应，否则前端获取不到
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });