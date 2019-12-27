import "./index.scss";
import { Head } from "../../components/head";
import { Link } from "react-router-dom";
import { Button, WhiteSpace, NoticeBar, Stepper } from "antd-mobile";
import shopcarinfo from "../../mobx/shopcarinfo";
import { observer } from "mobx-react";

@observer
export class Shopcar extends Component {
  componentWillMount() {
    shopcarinfo.getCarList(localStorage.username);
  }
  checkOne = val => {
    console.log(val);
    val.persist();
    console.log(val.target.attributes.dataid.value);
    console.log(val.target.checked);
    shopcarinfo.setSelectOne(
      val.target.attributes.dataid.value,
      val.target.checked
    );
  };

  checkAll = v => {
    console.log(v.target.checked);
    shopcarinfo.setSelectAll(v.target.checked);
  };

  render() {
    return (
      <div className="myshopcar">
        <Head title="购物车" show={false} />

        {/* 未登录状态 */}
        <div
          className="noLogin"
          style={{ display: localStorage.username ? "none" : "block" }}
        >
          <NoticeBar
            marqueeProps={{ loop: true, style: { padding: "0 7.5px" } }}
            onClick={() => this.props.history.push("/register")}
          >
            注册新会员立即领取100元全场通用优惠券，还可享受部分商品新会员超低折扣价哦，点击这里，赶紧去注册吧~
          </NoticeBar>
          <h3>亲，您还没有登录哦</h3>
          <Link to="/login">立即去登录</Link>
          <WhiteSpace />
        </div>

        {/* 登录状态 */}
        <div style={{ display: !localStorage.username ? "none" : "block" }}>
          {/* 购物车没有数据 */}
          <div
            className="emptycar"
            style={{
              display: shopcarinfo.carNum > 0 ? "none" : "block"
            }}
          >
            <div className="emptycar-content">
              <i className="icon iconfont icon-chaoshi" />
              <p>购物车空空如也...</p>
            </div>
            <div className="goHome">
              <Link to="/app/home">去首页逛逛</Link>
            </div>
          </div>

          {/* 购物车有数据 */}
          <div
            className="fullcar"
            style={{
              display: shopcarinfo.carNum > 0 ? "block" : "none"
            }}
          >
            <NoticeBar
              marqueeProps={{ loop: true, style: { padding: "0 7.5px" } }}
              onClick={() => this.props.history.push("/new2019")}
            >
              2019春季新款鞋包已上架，部分新品低至5折，心动不如行动，赶紧去选购吧~
            </NoticeBar>

            <ul>
              {shopcarinfo.carList &&
                shopcarinfo.carList.map((item, index) => {
                  // console.log(item.goodId);

                  return (
                    <li key={index}>
                      <input
                        type="checkbox"
                        dataid={item.goodId}
                        checked={item.checked}
                        onChange={this.checkOne}
                      />
                      <div className="goods-img">
                        <img src={item.goodImg} className="img" />
                      </div>
                      <div className="goods-middle">
                        <p className="goods-name">{item.goodName}</p>
                        <p className="goods-price">
                          <span className="discountPrice">
                            ¥{item.discountPrice * item.count}
                          </span>
                          <span className="orignalPrice">
                            ¥{item.orignalPrice * item.count}
                          </span>
                          <span className="goodNum">x {item.count}</span>
                        </p>
                      </div>
                      <div className="goods-num">
                        <span
                          className="goods-num-reduce"
                          onClick={() =>
                            this.reduceOne(item.goodId, item.count)
                          }
                        >
                          -
                        </span>
                        <input
                          type="text"
                          className="goods-num-show"
                          value={item.count}
                          onChange={v => {
                            this.changeCount(item.goodId, v);
                          }}
                          style={{
                            width: "20px",
                            height: "20px",
                            fontSize: "16px",
                            textAlign: "center",
                            background: "none",
                            border: "0"
                          }}
                        />
                        <span
                          className="goods-num-add"
                          onClick={() => this.addOne(item.goodId, item.count)}
                        >
                          +
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>

            <div className="myshopcar-foot">
              <span className="check-all">
                <label htmlFor="check-all">
                  <input
                    type="checkbox"
                    id="check-all"
                    checked={shopcarinfo.selectAll}
                    onClick={this.checkAll}
                  />{" "}
                  全选
                </label>
              </span>
              <span className="subtotal">
                合计：
                <span className="subprice">¥{shopcarinfo.totalprice}</span>
              </span>
              <span className="gotopay">结算</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
