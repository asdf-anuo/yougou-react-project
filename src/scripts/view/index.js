// this is my-react-project main route
import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { Guide } from "./guide";
import { App } from "./app";
import { Detail } from "./detail";
import { Register } from "../components/register";
import { Login } from "../components/login";
import { Txu } from "../components/txu";
import { Yundongku } from "../components/yundongku";
import { Xiuxianxie } from "../components/xiuxianxie";
import { Paobuxie } from "../components/paobuxie";
import { Laodiexie } from "../components/laodiexie";
import { Xiaobaixie } from "../components/xiaobaixie";
import { Gaogenxie } from "../components/gaogenxie";
import { New2019 } from "../components/new2019";
import { Madingxie } from "../components/madingxie";


export class IndexView extends Component {
  render() {
    return (
      <div id="mainEntryBox">
        <Router basename="/">
          <Switch>
            <Route path="/" component={Guide} exact />
            <Route path="/guide" component={Guide} exact />
            <Route path="/app/" component={App} strict />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            
            <Route path="/txu" component={Txu} />
            <Route path="/yundongku" component={Yundongku} />
            <Route path="/xiuxianxie" component={Xiuxianxie} />
            <Route path="/paobuxie" component={Paobuxie} />
            <Route path="/laodiexie" component={Laodiexie} />
            <Route path="/xiaobaixie" component={Xiaobaixie} />
            <Route path="/gaogenxie" component={Gaogenxie} />
            <Route path="/new2019" component={New2019} />
            <Route path="/madingxie" component={Madingxie} />


            <Route render={() => <Redirect to="/app/" />} />
            <Route component={App} />
          </Switch>
        </Router>
      </div>
    );
  }
}
