import axios from 'axios'
import qs from 'querystring'

// 创建新的axios
let apiAxios = axios.create({
  baseURL: 'https://service-e1zpu7bf-1257319287.ap-beijing.apigateway.myqcloud.com',
  timeout: 60000,
  headers: {
    'X-Agent': 'Juejin/web',
    'Content-Type':  'application/json'
    // Date: new Date(),
    // Authorization: '',
    // Source: 'web'
  },
  config: {}
})

apiAxios.interceptors.request.use(
  async config => {
    try {
      return config
    } catch (err) {
      console.error(err)
    }
  },
  error => {
    Promise.reject(error)
  }
)

/**
 * formatApiResponse
 * 格式Api的返回结果
 */
let formatApiResponse = promiseObj => {
  return new Promise((resolve, reject) => {
    promiseObj
      .then(result => {
        // 判断code信息
        let rebuildResult = result.data
        if (
          rebuildResult.status_code &&
          (rebuildResult.status_code !== 0 && rebuildResult.status_code !== 200)
        ) {
          reject(rebuildResult)
        } else {
          resolve(rebuildResult)
        }
      })
      .catch(errorResult => {
        console.error(errorResult)
        // 判断异常结果信息
        let status, errorData, response
        try {
          response = errorResult.response
          errorData = response.data
          status = response.status
        } catch (e) {
          status = 500
        }

        let rebuildErrorData = {
          status_code: 1000,
          message: ''
        }
        if (status >= 500) {
          rebuildErrorData.message = '服务器暂时无法响应您的请求，请稍后再试'
        } else if (status === 409 || status === 410) {
          rebuildErrorData.status_code = errorData.status_code
          rebuildErrorData.message = errorData.message
        } else {
          rebuildErrorData.message = '服务器无法连接，请稍后再试'
        }

        reject(rebuildErrorData)
      })
  })
}


/**
 * 设置api请求
 */
export const apiRequest = {
  get(url, params = {}) {
    // params._source = 'm'
    var config = {
      params
    }
    return apiAxios.get(url, config)
    // return formatApiResponse(apiAxios.get(url, config))
  },
  post(url, data) {
    return apiAxios.post(url, data)
    // return formatApiResponse(apiAxios.post(url, qs.stringify(data)))
  },
  counterfeit(data, status = 'success', timing = 500) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status === 'success') {
          resolve(data)
        } else {
          reject(data)
        }
      }, timing)
    })
  }
}

export default apiAxios
