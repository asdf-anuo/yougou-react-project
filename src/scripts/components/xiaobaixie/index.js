import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getXiaobaixie } from "../../actions";

@connect(state => {
  return { ...state };
})
export class Xiaobaixie extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getXiaobaixie({
        url: "/react/typeXiaobaixie",
        cb() {
          console.log("get typeXiaobaixie success");
        }
      })
    );
  }
  render() {
    const { xiaobaixie } = this.props;
    let xiaobaixieList = xiaobaixie.map((good, index) => (
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
        <Head title="小白鞋" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{xiaobaixieList}</ul>
        </div>
      </div>
    );
  }
}
