// 测试数据接口
import request from '@/utils/request'

/**
 * http请求接口配置
 */

export const testApi = () => {
  return request({
    url: '/test/api',
    method: 'get'
  })
}
