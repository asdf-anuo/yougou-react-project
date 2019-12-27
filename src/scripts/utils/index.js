import axios from "axios";

//开发地址
axios.defaults.baseURL = "http://localhost:1810/";
//生产地址
// axios.defaults.baseURL = "http://39.96.63.112:1810/";

// axios
export const http = axios;

// ajax
export const $http = (function() {
  const ajax = function(url, type, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cb(JSON.parse(xhr.responseText));
      }
    };
  };
  return {
    request: ajax
  };
})();

//promise
export const getJSON = function(url) {
  const promise = new Promise(function(res, rej) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        res(this.response);
      } else {
        rej(new Error(this.statusText));
      }
    };

    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};

exports.getQuery = function(search) {
  var url = require("url");
  return url.parse(search, true).query;
};

import { Modal } from "antd-mobile";
// 判断是否登录
exports.checkIsLogin = function(username, history, callback) {
  const alert = Modal.alert;
  if (!username) {
    alert("提示", "您还未登陆,请先登陆哦!", [
      { text: "取消", onPress: () => console.log("cancel"), style: "default" },
      { text: "确定", onPress: () => history.push("/login") }
    ]);
  } else {
    callback();
  }
};
