import axios from 'axios'
import Cache from './cache'

new Cache(axios, {
  requestInterceptorFn: config => {
      // 自定义请求拦截器
      /* */
      // 需要用Promise将config返回
      return Promise.resolve(config)
  },
  responseInterceptorFn: response => {
      // 自定义响应拦截器，可统一返回的数据格式也可拦截错误
      /* */
      // 需要用Promise将response返回
      return Promise.resolve(response)
  }
})

export default axios