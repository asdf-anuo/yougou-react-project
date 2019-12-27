import "./index.scss";
import { Head } from "../head";
import { connect } from "react-redux";
import { getNew2019 } from "../../actions";

@connect(state => {
  return { ...state };
})
export class New2019 extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getNew2019({
        url: "/react/typeNew2019",
        cb() {
          console.log("get typeNew2019 success");
        }
      })
    );
  }
  render() {
    const { new2019 } = this.props;
    let new2019List = new2019.map((good, index) => (
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
        <Head title="2019最新款上架" show={true} {...this.props} />
        <div>
          <ul className="detail-box">{new2019List}</ul>
        </div>
      </div>
    );
  }
}
