import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getPaobuxie } from "../../actions";

@connect(state => {
  return { ...state };
})
export class Paobuxie extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getPaobuxie({
        url: "/react/typePaobuxie",
        cb() {
          console.log("get typePaobuxie success");
        }
      })
    );
  }
  render() {
    const { paobuxie } = this.props;
    let paobuxieList = paobuxie.map((good, index) => (
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
        <Head title="跑步鞋" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{paobuxieList}</ul>
        </div>
      </div>
    );
  }
}
