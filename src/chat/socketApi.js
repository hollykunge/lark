// 对外接口
import Socket from '@/chat/socket'
import SocketHandler from '@/chat/SocketHandler'
class SocketApi {
  // 对外提供网络初始化
  socketInit (userId) {
    // 初始化网络
    const wsProtocol = 'ws' // ws 或 wss
    const ip = '127.0.0.1'
    const port = 9326
    const heartbeatTimeout = 5000 // 心跳超时时间，单位：毫秒
    const reconnInterval = 1000 // 重连间隔时间，单位：毫秒
    const binaryType = 'blob' // 'blob' or 'arraybuffer';//arraybuffer是字节
    const handler = new SocketHandler()
    const queryString = 'userId=' + userId
    const param = ''
    const socket = new Socket(wsProtocol, ip, port, queryString, param, handler, heartbeatTimeout, reconnInterval, binaryType)
    socket.connect()
    return socket
  }
// 添加群组
// 退出群组
// 点对点消息
// 群组消息
// 文件上传

}

export default SocketApi
