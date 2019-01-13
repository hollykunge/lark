import request from "@/utils/request";
export const loginApi = () => {
  return request({
    url: "/login",
    method: "get"
  });
};
