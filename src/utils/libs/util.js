import Cookies from "js-cookie";
// cookie保存的天数
import config from "@/conf/cookie";
import {
  forEach,
  hasOneOf,
  objEqual
} from "@/utils/libs/tools";
const cookieExpires = config;

export const TOKEN_KEY = "token";

export const setToken = token => {
  console.log(token)
  console.log(cookieExpires)
  Cookies.set(TOKEN_KEY, token, {
    expires: 1
  });
};
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) return token;
  else return false;
};

export const hasChild = item => {
  return item.children && item.children.length !== 0;
};

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  console.log('hasAccess')
  if (route.meta && route.meta.access)
    return hasOneOf(access, route.meta.access);
  else return true;
};

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  console.log('canTurnTo的name:' + name)

  const routePermissionJudge = list => {

    return list.some(item => {
      console.log('canTurnTo的routes:' + item.name)
      if (item.children && item.children.length) {
        console.log('里面的item:' + item.name)
        console.log('qqqq' + item.children + ',' + item.children.length)
        console.log('!!!!!')
        return routePermissionJudge(item.children);
      } else if (item.name === 'home') {
        console.log(5)
        return hasAccess(access, item);
      }
    });
  };

  return routePermissionJudge(routes);
};

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split("?")[1].split("&");
  let paramObj = {};
  keyValueArr.forEach(item => {
    const keyValue = item.split("=");
    paramObj[keyValue[0]] = keyValue[1];
  });
  return paramObj;
};

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
};

export const showByAccess = (access, canViewAccess) => {
  return hasOneOf(canViewAccess, access);
};

/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {};
  const params2 = route2.params || {};
  const query1 = route1.query || {};
  const query2 = route2.query || {};
  return (
    route1.name === route2.name &&
    objEqual(params1, params2) &&
    objEqual(query1, query2)
  );
};

export const localSave = (key, value) => {
  localStorage.setItem(key, value);
};

export const localRead = key => {
  return localStorage.getItem(key) || "";
};
