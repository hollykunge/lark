import request from "@/utils/request";

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  };
  return request({
    url: "login",
    data,
    method: "post"
  });
};

export const getUserInfo = token => {
  return request({
    url: "get_info",
    params: {
      token
    },
    method: "get"
  });
};

export const logout = token => {
  return request({
    url: "logout",
    method: "post"
  });
};

export const getUnreadCount = () => {
  return request({
    url: "message/count",
    method: "get"
  });
};

export const getMessage = () => {
  return request({
    url: "message/init",
    method: "get"
  });
};

export const getContentByMsgId = msg_id => {
  return request({
    url: "message/content",
    method: "get",
    params: {
      msg_id
    }
  });
};

export const hasRead = msg_id => {
  return request({
    url: "message/has_read",
    method: "post",
    data: {
      msg_id
    }
  });
};

export const removeReaded = msg_id => {
  return request({
    url: "message/remove_readed",
    method: "post",
    data: {
      msg_id
    }
  });
};

export const restoreTrash = msg_id => {
  return request({
    url: "message/restore",
    method: "post",
    data: {
      msg_id
    }
  });
};
