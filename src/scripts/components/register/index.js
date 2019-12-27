import "./index.scss";
import { Head } from "../head";
import { FootInfo } from "../footinfo";
// import { connect } from "react-redux";
import { List, InputItem, Toast, WhiteSpace } from "antd-mobile";
import { http } from "../../utils";

// @connect(state => {
//   return {
//     ...state
//   };
// })
export class Register extends Component {
  state = {
    hasError1: false,
    hasError2: false,
    hasError3: false,

    nameVal: "",
    telVal: "",
    pwdVal: ""
  };

  ErrorClick1 = () => {
    if (this.state.hasError1) {
      Toast.info("用户名由4-10位的字母和数字组成，非数字开头哦");
    }
  };
  ErrorClick2 = () => {
    if (this.state.hasError2) {
      Toast.info("请输入正确格式的手机号码");
    }
  };
  ErrorClick3 = () => {
    if (this.state.hasError3) {
      Toast.info("密码由6-16位的数字/字母组成，推荐组合密码更安全哦");
    }
  };

  onChange1 = nameVal => {
    if (/^[a-zA-Z][a-zA-Z0-9]{3,9}$/.test(nameVal)) {
      this.setState({
        hasError1: false
      });
    } else {
      this.setState({
        hasError1: true
      });
    }

    this.setState({
      nameVal
    });
  };

  onChange2 = telVal => {
    if (telVal.replace(/\s/g, "").length < 11) {
      this.setState({
        hasError2: true
      });
    } else {
      this.setState({
        hasError2: false
      });
    }

    this.setState({
      telVal
    });
  };

  onChange3 = pwdVal => {
    if (/^[a-zA-Z0-9]{6,16}$/g.test(pwdVal)) {
      this.setState({
        hasError3: false
      });
    } else {
      this.setState({
        hasError3: true
      });
    }

    this.setState({
      pwdVal
    });
  };

  goRegister = () => {
    if (
      this.state.hasError1 == false &&
      this.state.hasError2 == false &&
      this.state.hasError3 == false &&
      this.state.nameVal != "" &&
      this.state.telVal != "" &&
      this.state.pwdVal != ""
    ) {
      http
        .get("/react/register", {
          params: {
            username: this.state.nameVal,
            usertel: this.state.telVal,
            password: this.state.pwdVal
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.result.code == 200) {
            Toast.info("注册成功");
            this.props.history.push("/login");
          } else if (res.data.result.code == 204) {
            Toast.info("注册失败，用户名或手机号已存在",1);
          }
        });
    } else {
      Toast.info("输入有误，请重新输入",1);
    }
  };

  render() {
    return (
      <div>
        <Head title="新用户注册" show={true} {...this.props} />
        <div className="register-box">
          <List>
            <InputItem
              type="text"
              placeholder="请输入4-10位的用户名"
              error={this.state.hasError1}
              onErrorClick={this.ErrorClick1}
              onChange={this.onChange1}
              value={this.state.nameVal}
            >
              用户名
            </InputItem>
            <InputItem
              type="phone"
              placeholder="请输入您的手机号"
              error={this.state.hasError2}
              onErrorClick={this.ErrorClick2}
              onChange={this.onChange2}
              value={this.state.telVal}
            >
              手机号
            </InputItem>

            <InputItem
              type="password"
              placeholder="请输入6-16位的密码"
              error={this.state.hasError3}
              onErrorClick={this.ErrorClick3}
              onChange={this.onChange3}
              value={this.state.pwdVal}
            >
              密 码
            </InputItem>
            <button onClick={this.goRegister}>立即注册，成为会员</button>
            <p onClick={() => this.props.history.push("/login")}>
              已有账号，立即去登录
            </p>
            {/* <WhiteSpace /> */}
          </List>
        </div>

        <FootInfo />
      </div>
    );
  }
}
