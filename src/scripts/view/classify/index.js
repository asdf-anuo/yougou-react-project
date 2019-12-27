import "./index.scss";
import { Tabs ,Toast} from "antd-mobile";
import { Head } from "../../components/head";
import { FootInfo } from "../../components/footinfo";
import { ToTop } from "../../components/totop";
import { getAllTypes, getAllGoods, getAllGoodsByTypes } from "../../actions";
import store from "../../store";
import { connect } from "react-redux";

@connect(state => ({
  types: state.allTypes,
  goods: state.allGoods,
  ...state
}))
export class Classify extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    // 获取all types
    dispatch(
      getAllTypes({
        url: "/react/getTypes",
        cb() {
          // console.log("all types got~");
        }
      })
    );

    // 获取all goods
    dispatch(
      getAllGoods({
        url: "/react/allgoods",
        limit: 4,
        cb() {
          // console.log("get all goods");
        }
      })
    );

    // allGoodsByType
    dispatch(
      getAllGoodsByTypes({
        url: "/react/allGoodsByType",
        type: "百丽",
        cb() {
          // console.log("get allGoodsByType");
          Toast.info("数据加载成功",1);
        }
      })
    );
  }
  render() {
    const { types, allGoodsByTypes } = this.props;
    let typeTab = types.map(item => ({ title: item }));
    let goodslist = allGoodsByTypes.map((good, index) => (
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
        <Head title="分类" show={false} />
        <Tabs
          tabs={typeTab}
          initialPage={0}
          onChange={(tab, index) =>
            store.dispatch(
              getAllGoodsByTypes({
                url: "/react/allGoodsByType",
                type: tab.title,
                cb: () => {
                  // console.log(tab.title);
                }
              })
            )
          }
          onTabClick={(tab, index) =>
            store.dispatch(
              getAllGoodsByTypes({
                url: "/react/allGoodsByType",
                type: tab.title,
                cb: () => {
                  // console.log("");
                }
              })
            )
          }
        >
          <ul className="detail-box">{goodslist}</ul>
        </Tabs>

        <FootInfo />
        <ToTop />
      </div>
    );
  }
}
