import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getXiuxianxie } from "../../actions";

@connect(state => {
  return { ...state };
})
export class Xiuxianxie extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getXiuxianxie({
        url: "/react/typeXiuXianXie",
        cb() {
          console.log("get typeXiuXianXie success");
        }
      })
    );
  }
  render() {
    const { xiuxianxie } = this.props;
    let xiuxianxieList = xiuxianxie.map((good, index) => (
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
        <Head title="休闲鞋" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{xiuxianxieList}</ul>
        </div>
      </div>
    );
  }
}
