//app主视图
import "./index.scss";
import { Switch, Route } from "react-router-dom";
import { Head } from "../../components/head";
import { Foot } from "../../components/foot";
import { Home } from "../home";
import { Classify } from "../classify";
import { Find } from "../find";
import { Shopcar } from "../shopcar";
import { Mine } from "../mine";
import {observer} from "mobx-react";
import shopcarinfo from "../../mobx/shopcarinfo";

@observer
export class App extends Component {
  componentWillMount() {
    shopcarinfo.getCarList(localStorage.username);
  }
  render() {
    return (
      <div className="wrap-box">
        <div className="main-box">
          {/* <Head /> */}
          <Switch>
            <Route path="/app/" component={Home} exact />
            <Route path="/app/home" component={Home} />
            <Route path="/app/classify" component={Classify} />
            <Route path="/app/find" component={Find} />
            <Route path="/app/shopcar" component={Shopcar} />
            <Route path="/app/mine" component={Mine} />
            <Route component={Home} />
          </Switch>
        </div>
        <Foot />
      </div>
    );
  }
}
