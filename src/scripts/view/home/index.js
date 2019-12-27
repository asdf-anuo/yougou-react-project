import "./index.scss";
import { Head } from "../../components/head";
import { Link } from "react-router-dom";
import { Toast, Carousel, NoticeBar } from "antd-mobile";
import { getAllGoodsByTypes, getGaogenType, getTop50Type } from "../../actions";
import { connect } from "react-redux";
import { FootInfo } from "../../components/footinfo";

@connect(state => {
  return {
    ...state
  };
})
export class Home extends Component {
  state = {
    lunboImgs: [
      {
        iconUrl: require("../../../assets/image/brand-adidas.jpg"),
        brandName: "adidas"
      },
      {
        iconUrl: require("../../../assets/image/brand-basto.jpg"),
        brandName: "basto"
      },
      {
        iconUrl: require("../../../assets/image/brand-belle.jpg"),
        brandName: "belle"
      },
      {
        iconUrl: require("../../../assets/image/brand-converse.jpg"),
        brandName: "converse"
      },
      {
        iconUrl: require("../../../assets/image/brand-joy.jpg"),
        brandName: "joy"
      },
      {
        iconUrl: require("../../../assets/image/brand-puma.jpg"),
        brandName: "puma"
      },
      {
        iconUrl: require("../../../assets/image/brand-staccato.jpg"),
        brandName: "staccato"
      },
      {
        iconUrl: require("../../../assets/image/brand-tata.jpg"),
        brandName: "tata"
      },
      {
        iconUrl: require("../../../assets/image/brand-teenmix.jpg"),
        brandName: "teenmix"
      },
      {
        iconUrl: require("../../../assets/image/brand-vabs.jpg"),
        brandName: "vabs"
      }
    ],
    imgs: [
      require("../../../assets/image/type1-Txu.png"),
      require("../../../assets/image/type2-yundong.png"),
      require("../../../assets/image/type3-xiuxian.png"),
      require("../../../assets/image/type4-paobu.png"),
      require("../../../assets/image/type5-laodie.png"),
      require("../../../assets/image/type6-xiaobai.png"),
      require("../../../assets/image/type7-gaogen.png"),
      require("../../../assets/image/type8-xinkuan.png")
    ]
  };
  componentWillMount() {
    // Toast.loading("加载中...", 3000);
    let { dispatch, history } = this.props;
    dispatch(
      getAllGoodsByTypes({
        url: "/react/allGoodsByType",
        type: "马丁靴",
        limit: 6,
        cb() {
          // console.log("get 马丁靴");
        }
      })
    );
    dispatch(
      getGaogenType({
        url: "/react/allGoodsByType",
        type: "高跟鞋",
        limit: 6,
        cb() {
          // console.log("get 高跟鞋");
        }
      })
    );
    dispatch(
      getTop50Type({
        url: "/react/allGoodsByType",
        type: "人气TOP",
        limit: 6,
        cb() {
          // console.log("get 人气TOP");
        }
      })
    );
    // Toast.success('加载成功!!!', 1);
  }

  render() {
    const { lunboImgs } = this.state;
    let lunboimgs = lunboImgs.map((item, index) => (
      <Link
        key={index}
        to="/app/classify"
        style={{ display: "inline-block", width: "100%" }}
      >
        <img
          src={item.iconUrl}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event("resize"));
            this.setState({ imgHeight: "auto" });
          }}
        />
      </Link>
    ));

    const { allGoodsByTypes, gaogenType, top50Type } = this.props;
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

    let gaogenlist = gaogenType.map((good, index) => (
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

    let top50list = top50Type.map((good, index) => (
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
        <Head title="首页" show={false} />

        {/* 轮播图 */}
        <div className="carousel-box">
          <Carousel autoplay={true} infinite autoplayInterval={2000}>
            {lunboimgs}
          </Carousel>
        </div>
        {/* 通知栏 */}
        <div className="NoticeBar-box">
          <NoticeBar
            marqueeProps={{ loop: true, style: { padding: "0 4px" } }}
            mode="link"
            onClick={() => this.props.history.push("/register")}
          >
            公告:注册新会员立即获得100元购物券以及部分新品八折优惠，拿起手机赶紧注册吧~
          </NoticeBar>
        </div>

        <div className="bigtitle">
          <h2>热门分类</h2>
        </div>

        <div className="choose-for-you">
          <ul>
            <li>
              <img
                src={this.state.imgs[0]}
                className="txu"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
            <li>
              <img
                src={this.state.imgs[1]}
                alt=""
                className="yundongku"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
            <li>
              <img
                src={this.state.imgs[2]}
                alt=""
                className="xiuxianxie"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
            <li>
              <img
                src={this.state.imgs[3]}
                alt=""
                className="paobuxie"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
            <li>
              <img
                src={this.state.imgs[4]}
                alt=""
                className="laodiexie"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
            <li>
              <img
                src={this.state.imgs[5]}
                alt=""
                className="xiaobaixie"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
            <li>
              <img
                src={this.state.imgs[6]}
                alt=""
                className="gaogenxie"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
            <li>
              <img
                src={this.state.imgs[7]}
                alt=""
                className="new2019"
                onClick={() =>
                  this.props.history.push("/" + event.target.className)
                }
              />
            </li>
          </ul>
        </div>

        {/* 男生都要马丁靴 */}
        <div className="crossline" />
        <div
          className="bigtitle"
          onClick={() => this.props.history.push("/madingxie")}
        >
          <h2>酷爱马丁靴</h2>
          <p>查看更多 >></p>
        </div>
        <div>
          <ul className="detail-box">{goodslist}</ul>
        </div>

        {/* 女生都爱高跟鞋 */}
        <div className="crossline" />
        <div
          className="bigtitle"
          onClick={() => this.props.history.push("/gaogenxie")}
        >
          <h2>性感高跟鞋</h2>
          <p>查看更多 >></p>
        </div>
        <div>
          <ul className="detail-box">{gaogenlist}</ul>
        </div>

        {/* 人气TOP榜单 */}
        <div className="crossline" />
        <div
          className="bigtitle"
          onClick={() => this.props.history.push("/app/classify")}
        >
          <h2>人气TOP榜单</h2>
          <p>查看更多 >></p>
        </div>
        <div>
          <ul className="detail-box">{top50list}</ul>
        </div>

        <FootInfo />
      </div>
    );
  }
}
