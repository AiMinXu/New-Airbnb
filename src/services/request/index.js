import axios from "axios";
import { BASE_URL, TIMEOUT } from './config';

//采用类的方式进行封装axios，使其拥有更高的内聚性
class XAMRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    //响应拦截
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  //定义类方法
  request(config) {
    return this.instance.request(config) //拿到实例进行发送
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new XAMRequest(BASE_URL, TIMEOUT)//导出实例
