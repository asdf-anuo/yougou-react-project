import "./index.scss";
import { NavBar, Icon } from "antd-mobile";
export class Head extends Component {
  render() {
    const { title, show, history } = this.props;
    return (
      <div className="head-box">
        <NavBar
          icon={show && <Icon type="left" />}
          onLeftClick={show ? () => history.go(-1) : console.log("")}
          rightContent={
            show ? (
              <i
                className="icon iconfont icon-shouye"
                onClick={() => this.props.history.push("/app/home")}
              />
            ) : (
              console.log("")
            )
          }
        >
          {title}
        </NavBar>
      </div>
    );
  }
}
