import "./index.scss";
import { Head } from "../../components/head";
import { WhiteSpace, Button, Toast } from "antd-mobile";
import { observer } from "mobx-react";
import shopcarinfo from "../../mobx/shopcarinfo";

@observer
export class Mine extends Component {
  state = {
    orderListNum: shopcarinfo.orderListNum,
    carNum: shopcarinfo.carNum,
    msgNum: shopcarinfo.msgNum,
    levelNum: shopcarinfo.levelNum
  };
  loginOut = () => {
    localStorage.setItem("username", "");
    Toast.info("您已退出登录", 1);
    this.props.history.push("/app/home");
  };
  render() {
    return (
      <div>
        <Head title="个人中心" show={false} />

        {/* 登录状态 */}
        <div className="mine-box" style={{ display: !localStorage.username ? "none" : "block" }}>
          <div className="ifLogin">
            <h2>
              <img />
            </h2>
            <h3>
              <p className="username">{localStorage.getItem("username")}</p>
              <span className="lv">Lv.{this.state.levelNum}</span>
            </h3>
          </div>
          <div className="myinfo">
            <p>
              <span>我的订单</span>
              <span className="my-order">{this.state.orderListNum}</span>
            </p>
            <p onClick={() => this.props.history.push("/app/shopcar")}>
              <span>我的收藏</span>
              <span className="save-num">{this.state.carNum}</span>
            </p>
            <p>
              <span>我的消息</span>
              <span className="my-msg">{this.state.msgNum}</span>
            </p>

            <p>
              <span>设置</span>
              <span className="shezhi">
                <i className="icon iconfont icon-setting" />
              </span>
            </p>
            <p>
              <span>客服</span>
              <span className="kefu">
                <i className="icon iconfont icon-erji" />
              </span>
            </p>
            <p>
              <span>退出登录</span>
              <span className="tuichu">
                <i
                  className="icon iconfont icon-tuichu1"
                  onClick={this.loginOut}
                />
              </span>
            </p>
          </div>
          <WhiteSpace />
          <WhiteSpace />
        </div>

        {/* 未登录状态 */}

        <div className="mine-box" style={{ display: localStorage.username ? "none" : "block" }}>
          <div className="noLogin">
            <h2>
              <img />
            </h2>
            <h3>
              <p className="username" onClick={() => this.props.history.push("/login")}>
                未登录状态
              </p>
              <span
                className="lv"
                onClick={() => this.props.history.push("/login")}
              >
                点此登录，查看更多信息
              </span>
            </h3>
          </div>
          <div className="myinfo">
            <p>
              <span>我的订单</span>
              <span className="my-order">0</span>
            </p>
            <p onClick={() => this.props.history.push("/app/shopcar")}>
              <span>我的收藏</span>
              <span className="save-num">0</span>
            </p>
            <p>
              <span>我的消息</span>
              <span className="my-msg">0</span>
            </p>

            <p>
              <span>设置</span>
              <span className="shezhi">
                <i className="icon iconfont icon-setting" />
              </span>
            </p>
            <p>
              <span>客服</span>
              <span className="kefu">
                <i className="icon iconfont icon-erji" />
              </span>
            </p>
            <p>
              <span>去首页</span>
              <span className="tuichu">
                <i
                  className="icon iconfont icon-shouye"
                  onClick={() => this.props.history.push("/app/home")}
                />
              </span>
            </p>
          </div>
          <WhiteSpace />
          <WhiteSpace />
        </div>
        
      </div>
    );
  }
}
