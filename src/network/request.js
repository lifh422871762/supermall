import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器，请求拦截器
  instance.interceptors.request.use(config =>{
    return config;
  }, error =>{

  })

  //3.axios的拦截器，响应拦截器
  instance.interceptors.response.use(config =>{
    return config;
  },error => {

  })

  //3.发送真实的网络请求
  return instance(config);
}
