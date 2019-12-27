import store from "../store";
import {Button,WhiteSpace} from "antd-mobile";
import {countDesc,changeMsg,increment,changeWord,changeCity} from "../actions";
export class ReduxDemo extends Component {
  render() {
    const { count ,data:{word}} = store.getState();
    const { msg,city } = this.props;
    return (
      <div>
        <h3>redux-获取-改变数据</h3>
        <hr/>
        <h3>count == {count}</h3>
        <div style={ {display:"flex" } }>
          <Button type="warning" inline size="small" onClick={()=>store.dispatch({type:"COUNT_ADD"})}>递增</Button><WhiteSpace />
          <Button type="warning" inline size="small" onClick={()=>store.dispatch(countDesc)}>递减</Button><WhiteSpace />
          <Button type="primary" inline size="small" onClick={()=>store.dispatch(increment(10))}>增加10</Button><WhiteSpace />
        </div>
        <h3>msg =={msg}</h3>
        <Button type="warning" onClick={()=>store.dispatch(changeMsg("day-day-up"))}>修改Msg</Button><WhiteSpace />
        <h3>city =={city}</h3>
        <Button type="primary" onClick={()=>store.dispatch(changeCity("我要去拉萨"))}>修改City</Button><WhiteSpace />
        <h2>myword--{ word }</h2>
        <Button type="primary" onClick={()=>store.dispatch(changeWord("no pain no gain"))}>修改word</Button><WhiteSpace />
      </div>
    );
  }
}
