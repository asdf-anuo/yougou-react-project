import "./index.scss";
import { checkIsLogin, http } from "../../utils";
// import {Link,Route} from "react-router-dom";
import { Head } from "../../components/head";
import { connect } from "react-redux";
import { Toast, Stepper } from "antd-mobile";
import { getGoodsDetail } from "../../actions";
import shopcarinfo from "../../mobx/shopcarinfo";
// import {observer} from "mobx-react";

// @observer
@connect(state => {
  return {
    goodsDetail: state.goodsDetail,
    ...state
  };
})
export class Detail extends Component {
  state = {
    val: 1
  };

  onChange = v => {
    this.setState({
      val: v
    });
  };

  componentWillMount() {
    let { dispatch } = this.props;
    dispatch(
      getGoodsDetail({
        url: "/react/getDetail",
        id: this.props.match.params.id,
        cb() {
          // console.log("get detail");
          Toast.info("加载成功", 1);
        }
      })
    );

    setInterval(() => {
      this.countDownTime();
    }, 1000);
  }

  //抢购倒计时
  countDownTime = () => {
    //第1步:获取当前时间
    var date = new Date();
    var now = date.getTime();
    //第2步:设置截止时间
    var endDate = new Date("2019-05-25 23:59:59");
    var end = endDate.getTime();
    //第3步:设置时间差
    var leftTime = end - now;
    //第4步:定义四个变量存放day hour second minute
    //leftTime/1000==秒 /60==分 /60 ==小时 /24 ==天
    var leftDay, leftHour, leftMin, leftSec;
    if (leftTime >= 0) {
      leftDay = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      leftHour = Math.floor((leftTime / 1000 / 60 / 60) % 24);
      leftMin = Math.floor((leftTime / 1000 / 60) % 60);
      leftSec = Math.floor((leftTime / 1000) % 60);
    }
    // console.log(leftDay + "天" + leftHour + "小时" + leftMin + "分钟" + leftSec + "秒");
    if (this.refs.countdown && this.refs.countdown.innerHTML) {
      this.refs.countdown.innerHTML =
        (leftDay >= 10 ? leftDay : "0" + leftDay) +
        "天" +
        (leftHour >= 10 ? leftHour : "0" + leftHour) +
        "小时" +
        (leftMin >= 10 ? leftMin : "0" + leftMin) +
        "分钟" +
        (leftSec >= 10 ? leftSec : "0" + leftSec) +
        "秒";
    }
  };

  //gotoMyshopcar 直接购买 把商品数量一起带到购物车页面
  gotoMyshopcar = () => {
    let { history, match } = this.props;
    checkIsLogin(localStorage.username, history, () => {
      // console.log("add to my shopcar");
      http
        .get("/react/addToMyshopcar", {
          params: {
            username: localStorage.username,
            goodId: match.params.id,
            goodImg: this.props.goodsDetail.goods_imgs,
            goodName: this.props.goodsDetail.goods_name,
            discountPrice: this.props.goodsDetail.goods_discount_price,
            orignalPrice: this.props.goodsDetail.goods_orignal_price,
            count: this.state.val
          }
        })
        .then(res => {
          // Toast.info(res.data.msg, 1);
          history.push("/app/shopcar");
        });
    });
  };
  //addToMyshopcar 把商品数量添加到我的购物车 并给提示
  addToMyshopcar = () => {
    let { history, match } = this.props;
    // console.log(match);
    checkIsLogin(localStorage.username, history, () => {
      // console.log("add to my shopcar");
      http
        .get("/react/addToMyshopcar", {
          params: {
            username: localStorage.username,
            goodId: match.params.id,
            goodImg: this.props.goodsDetail.goods_imgs,
            goodName: this.props.goodsDetail.goods_name,
            discountPrice: this.props.goodsDetail.goods_discount_price,
            orignalPrice: this.props.goodsDetail.goods_orignal_price,
            count: this.state.val
          }
        })
        .then(res => {
          Toast.info(res.data.msg, 1);
        });
    });
  };

  render() {
    const { goodsDetail } = this.props;
    // console.log(this.props);
    // console.log(match.params.id);
    // console.log(goodsDetail.goods_imgs);
    // "https://i1.ygimg.cn/pics/belle/2019/101185507/101185507_01_m.jpg?5;https://i1.ygimg.cn/pics/belle/2019/101185507/101185507_02_m.jpg?5;https://i1.ygimg.cn/pics/belle/2019/101185507/101185507_03_m.jpg?5;https://i1.ygimg.cn/pics/belle/2019/101185507/101185507_04_m.jpg?5;https://i1.ygimg.cn/pics/belle/2019/101185507/101185507_05_m.jpg?5;https://i1.ygimg.cn/pics/belle/2019/101185507/101185507_06_m.jpg?5;https://i1.ygimg.cn/pics/belle/2019/101185507/101185507_07_m.jpg?5;"

    return (
      <div className="goodsdetail">
        <Head title="商品详情" show={true} {...this.props} />
        <div className="goodsdetail-box">
          <div className="goods-detail-main">
            <ul>
              {/* <Carousel autoplay={true} infinite autoplayInterval={2000}>
                {goodsimg}
              </Carousel> */}
              <li>
                <img src={goodsDetail.goods_imgs} alt="" />
              </li>
            </ul>

            <p className="goods-name">{goodsDetail.goods_name}</p>
            <p className="goods-price">
              <span className="discount_price">
                ¥{goodsDetail.goods_discount_price}
              </span>
              <span className="orignal_price">
                ¥{goodsDetail.goods_orignal_price}
              </span>
            </p>

            <h4 className="save-to-myshopcar" onClick={this.addToMyshopcar}>
              <i className="icon iconfont icon-duomeitiicon-" />
            </h4>
          </div>

          <div className="cuxiao">
            <span className="title1">促销</span>
            <span className="title2">限时</span>
            <span className="countdown" ref="countdown">
              21天13小时47分54秒
            </span>
          </div>
          <Stepper
            style={{
              width: "30%",
              minWidth: "100px",
              float: "right",
              marginTop: "4px",
              marginRight: "20px"
            }}
            showNumber
            min={1}
            value={this.state.val}
            onChange={this.onChange}
          />
        </div>

        <div className="shopcar-foot">
          <span
            className="myshopcarnum"
            onClick={() => this.props.history.push("/app/shopcar")}
          >
            <i className="icon iconfont icon-gouwuchekong" />
            {shopcarinfo.carNum}
          </span>
          <span className="saveto-shopcar" onClick={this.addToMyshopcar}>
            加入购物车
          </span>
          <span className="goto-shopcar" onClick={this.gotoMyshopcar}>
            立即购买
          </span>
        </div>
      </div>
    );
  }
}
