import "./index.scss";

export class Guide extends Component {
  state = {
    imgUrl: require("../../../assets/image/guide9.jpg")
  };
  goHome = () => {
    const { history } = this.props;
    var timer = "";
    timer = setTimeout(() => {
      history.push("/app/");
    }, 1000);
    this.refs.go.className = "guide-box moveOut";
  };
  render() {
    return (
      <div className="guide-box moveIn" ref="go">
        <img src={this.state.imgUrl} className="guide-img" />
        <p>
          还有<span>5</span>秒自动跳转
        </p>
        <div className="goHome" onClick={this.goHome}>
          进入首页，开启海淘
        </div>
      </div>
    );
  }
}
