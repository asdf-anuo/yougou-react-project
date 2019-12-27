import "./index.scss";
import { HashRouter as Router, NavLink } from "react-router-dom";
import { Badge } from "antd-mobile";
import {observer} from "mobx-react";
import userinfo from "../../mobx/userinfo";
import shopcarinfo from "../../mobx/shopcarinfo";

@observer
export class Foot extends Component {
  
  render() {
    return (
      <div>
        <div className="foot-box">
          <NavLink to="/app/home" activeStyle={{ color: "#f96268" }} exact>
            <i className="icon iconfont icon-shouye" />
            <span>首页</span>
          </NavLink>
          <NavLink to="/app/classify" activeStyle={{ color: "#f96268" }} exact>
            <i className="icon iconfont icon-jingxuanchanpinku" />
            <span>分类</span>
          </NavLink>
          <NavLink to="/app/find" activeStyle={{ color: "#f96268" }} exact>
            <i className="icon iconfont icon-jingzhun" />
            <span>发现</span>
          </NavLink>
          <NavLink to="/app/shopcar" activeStyle={{ color: "#f96268" }} exact>
            <Badge text={shopcarinfo.carNum} hot className="hot" />
            <i className="icon iconfont icon-gouwuche" />
            <span>购物车</span>
          </NavLink>
          <NavLink to="/app/mine" activeStyle={{ color: "#f96268" }} exact>
            <i className="icon iconfont icon-gerenzhongxin1" />
            <span>我的</span>
          </NavLink>
        </div>
      </div>
    );
  }
}
