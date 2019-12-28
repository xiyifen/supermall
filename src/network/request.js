import  axios from 'axios'
export function request(config) {
  // 创建axios 的实例
  const instance=axios.create({
    baseURL: 'http://123.207.32.32:8000/api/w1',
    timeout: 5000
  })

  // 2. axios的拦截器
  instance.interceptors.request.use(config=>{
    // 需要将拦截的config返回出去
    return config
  },error => {

  })

  // 响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error)
  })

  // 3. 发送真正的网络请求,此处返回的是promise，其他地方调用
  // 的时候可以直接在后面接 .then()
  return instance(config)
}
