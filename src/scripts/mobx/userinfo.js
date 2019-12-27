import { observable, action } from "mobx";

class UserInfo {
  constructor() {}
  @action countAdd = () => {
    this.count++;
  };
  @action countDesc = count => {
    this.count -= count;
  };
  @observable count = 50;
  @observable isLogin = localStorage.username ? true : false;
}

export default new UserInfo();
