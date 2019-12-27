import { observable, useStrict, action } from "mobx";
import { http } from "../utils";
import { Toast } from "antd-mobile";

class ShopcarInfo {
  @observable carList = [];
  @observable carNum = 0;
  @observable totalprice = 0;
  @observable orderList = [];
  @observable orderListNum = 0;
  @observable msgNum = 1;
  @observable levelNum = 1;
  @observable selectAll=false;

  // 获取购物车列表信息
  @action getCarList = username => {
    localStorage.setItem("username", username);
    http
      .get("/react/getCarList", {
        params: { username }
      })
      .then(res => {
        // console.log(res);
        this.carList = res.data.result;
        // console.log(this.carList.length);
        this.carNum = 0;
        this.carList.forEach(item => {
          this.carNum += item.count;
        });
      });
  };

  // 设置单选按钮
  @action setSelectOne = (goodId, checked) => {
    this.carList = this.carList.map(item => {
      if (item.goodId == goodId) {
        item.checked = checked;
      }
      console.log(item);
      return item;
    });

    this.totalprice = 0;
    let selectAll = true;
    this.carList.forEach(item => {
      if (item.checked) {
        this.totalprice += item.count * item.discountPrice;
      }
      if (!item.checked) {
        selectAll = false;
      }
    });
    this.selectAll = selectAll;
  };

  // 设置全选按钮
  @action setSelectAll = selectAll => {
    this.selectAll = selectAll;
    this.carList = this.carList.map(item => {
      item.checked = selectAll;
      return item;
    });

    this.totalprice = 0;
    this.carList.forEach(item => {
      if (item.checked) {
        this.totalprice += item.count * item.discountPrice;
      }
    });
  };
}

export default new ShopcarInfo();
