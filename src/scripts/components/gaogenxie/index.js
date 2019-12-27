import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getGaogenxie } from "../../actions";
import { ToTop } from "../totop";
import {FootInfo} from "../footinfo";

@connect(state => {
  return { ...state };
})
export class Gaogenxie extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getGaogenxie({
        url: "/react/allGoodsByType",
        type: "高跟鞋",
        cb() {
          console.log("get 高跟鞋");
        }
      })
    );
  }
  render() {
    const { gaogenxie } = this.props;
    let gaogenxieList = gaogenxie.map((good, index) => (
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
        <Head title="高跟鞋" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{gaogenxieList}</ul>
        </div>

        <ToTop />
        <FootInfo />
      </div>
    );
  }
}
