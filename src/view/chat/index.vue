<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import SocketApi from '@/chat/socketApi'
  export default {
    data () {
      return {
      }
    },
    methods: {
      socketInit () {
        // debugger
        const socketapi = new SocketApi()
        const socket = socketapi.socketInit('123')
        socket.send('1')
        // // 初始化网络
        // // debugger
        // const test = new Test()
        // console.log(test.getA('这个傻逼的ES'))
        // const wsProtocol = 'ws' // ws 或 wss
        // const ip = '127.0.0.1'
        // const port = 9326
        // const heartbeatTimeout = 5000 // 心跳超时时间，单位：毫秒
        // const reconnInterval = 1000 // 重连间隔时间，单位：毫秒
        // const binaryType = 'blob' // 'blob' or 'arraybuffer';//arraybuffer是字节
        // const handler = new SocketHandler()
        // const queryString = 'name=kebi'
        // const param = 'token=11&userid=adfadsf'
        // const socket = new Socket(wsProtocol, ip, port, queryString, param, handler, heartbeatTimeout, reconnInterval, binaryType)
        // socket.connect()
      }
    }
  }
</script>

<style>

</style>
