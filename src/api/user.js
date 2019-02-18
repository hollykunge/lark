import request from '@/utils/request'

export const login = ({
  userName,
  password
}) => {
  const data = {
    userName,
    password
  }
  return request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = token => {
  return request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = token => {
  return request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msgId => {
  return request({
    url: 'message/content',
    method: 'get',
    params: {
      msgId
    }
  })
}

export const hasRead = msgId => {
  return request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msgId
    }
  })
}

export const removeReaded = msgId => {
  return request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msgId
    }
  })
}

export const restoreTrash = msgId => {
  return request({
    url: 'message/restore',
    method: 'post',
    data: {
      msgId
    }
  })
}

export const getChatList = () => {
  return request({
    url: 'message/chatList',
    method: 'get'
  })
}

export const getTableData = () => {
  return request({
    url: 'task/projects',
    method: 'get'
  })
}
