import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getYundongku } from "../../actions";

@connect(state => {
  return { ...state };
})
export class Yundongku extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getYundongku({
        url: "/react/typeYunDongKu",
        cb() {
          console.log("get Yundongku success");
        }
      })
    );
  }
  render() {
    const { yundongku } = this.props;
    let yundongList = yundongku.map((good, index) => (
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
        <Head title="运动裤" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{yundongList}</ul>
        </div>
      </div>
    );
  }
}
