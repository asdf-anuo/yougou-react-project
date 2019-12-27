import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getMadingxie } from "../../actions";
import { ToTop } from "../totop";
import { FootInfo } from "../footinfo";


@connect(state => {
  return { ...state };
})
export class Madingxie extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getMadingxie({
        url: "/react/allGoodsByType",
        type: "马丁靴",
        cb() {
          console.log("get 马丁靴 success");
        }
      })
    );
  }
  render() {
    const { madingxie } = this.props;
    let madingxieList = madingxie.map((good, index) => (
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
        <Head title="马丁靴" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{madingxieList}</ul>
        </div>

        <ToTop />
        <FootInfo />
      </div>
    );
  }
}
