import "./index.scss";
import { Head } from "../head";
import { FootInfo } from "../footinfo";
import { List, InputItem, Toast, WhiteSpace } from "antd-mobile";
import { http } from "../../utils";

export class Login extends Component {
  state = {
    nameVal: "",
    pwdVal: ""
  };
  onChange1 = nameVal => {
    this.setState({
      nameVal
    });
  };
  onChange2 = pwdVal => {
    this.setState({
      pwdVal
    });
  };
  goLogin = () => {
    http
      .get("/react/login", {
        params: {
          loginName: this.state.nameVal,
          password: this.state.pwdVal
        }
      })
      .then(res => {
        console.log(res);
        if (res.data.code == 200) {
          Toast.info("登录成功");
          localStorage.setItem("username", this.state.nameVal);
          this.props.history.push("/app/home");
        } else if (res.data.code == 204) {
          Toast.info("登录失败，账号与密码不匹配");
        }
      });
  };
  render() {
    return (
      <div>
        <Head title="登录" show={true} {...this.props} />

        <div className="login-box">
          <List>
            <InputItem
              type="text"
              placeholder="请输入用户名"
              onChange={this.onChange1}
              value={this.state.nameVal}
            >
              用户名
            </InputItem>

            <InputItem
              type="password"
              placeholder="请输入密码"
              onChange={this.onChange2}
              value={this.state.pwdVal}
            >
              密 码
            </InputItem>
            <WhiteSpace />
            <button onClick={this.goLogin}>确 定 登 录</button>
            <p onClick={() => this.props.history.push("/register")}>
              新用户 立刻去注册
            </p>
          </List>
          <WhiteSpace />

          <h3>---------------第三方账号登录--------------</h3>
          <div className="otherlogin">
            <p>
              <i className="icon iconfont icon-weixin3" />
              <span>微信登录</span>
            </p>
            <p>
              <i className="icon iconfont icon-zhifu-taobao" />
              <span>淘宝登录</span>
            </p>
            <p>
              <i className="icon iconfont icon-qunfengqq" />
              <span>QQ登录</span>
            </p>

            <p>
              <i className="icon iconfont icon-iconfonticons" />
              <span>支付宝登录</span>
            </p>
          </div>
        </div>

        <FootInfo />
      </div>
    );
  }
}
