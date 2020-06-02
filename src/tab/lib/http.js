import axios from './httpConfig'
import qs from 'qs'

export const post = (url, data, extend = {isJson: true, cache: false}) => {
    let defaultConfig = {
        url,
        method: 'POST',
        data: extend.isJson ? data : qs.stringify(data) // 通过isJson来确定传参格式是json还是formData，默认是json
    }
    let config = {...defaultConfig, ...extend}
    return axios(config).then(res => {
        // 可以统一返回的数据格式
        return Promise.resolve(res)
    }, err => {
        return Promise.reject(err)
    })
}

export const get = (url, data, extend = {cache: false}) => {
    let defaultConfig = {
        url,
        method: 'GET',
        params: data
    }
    let config = {...defaultConfig, ...extend}
    return axios(config).then(res => {
        // 可以统一返回的数据格式
        return Promise.resolve(res)
    }, err => {
        return Promise.reject(err)
    })
}
