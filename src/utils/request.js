import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间 5s
})

// request请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['X-Token'] = 'Lark-Client' // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 响应拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 20000) {
      // this.$Notice.warning({
      //   title: '请求失败',
      //   top: 70,
      //   duration: 3
      // })
      console.log('请求失败!!!')
      return Promise.reject('error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // this.$Notice.error({
    //   title: '错误！',
    //   top: 70,
    //   duration: 3
    // })
    console.log('错误')
    return Promise.reject(error)
  }
)
export default service
