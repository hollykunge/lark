<template>
  <h2>研讨</h2>
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
      }
    }
  }
</script>

<style>

</style>
