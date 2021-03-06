// http://123.207.32.32:8000/home/multidata
import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        // baseURL:'http://123.207.32.32:8000',
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })
    // 拦截请求：
    // instance.interceptors.request.use(config => {

    //     return config
    // }, err => {
    //     console.log(err)
    // })
    // 拦截响应：
    instance.interceptors.response.use(res => {

        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}