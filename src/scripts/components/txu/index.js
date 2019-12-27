import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getTxu } from "../../actions";

@connect(state => {
  return { ...state };
})
export class Txu extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getTxu({
        url: "/react/typeTxu",
        cb() {
          console.log("get txu success");
        }
      })
    );
  }
  render() {
    const { txu } = this.props;
    let txuList = txu.map((good, index) => (
      <li
        key={index}
        onClick={() => this.props.history.push("/detail/" + good._id)}
      >
        <img src={good.goods_imgs} />
        <h2>{good.goods_name}</h2>
        <h3>
          <span className="orignal_price">¥{good.goods_orignal_price}</span>
          <span className="discount_price">¥{good.goods_discount_price}</span>
        </h3>
      </li>
    ));
    return (
      <div>
        <Head title="T恤" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{txuList}</ul>
        </div>
      </div>
    );
  }
}
