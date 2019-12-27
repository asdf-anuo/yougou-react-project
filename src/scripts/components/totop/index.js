import "./index.scss";
export class ToTop extends Component {
  toTop = () => {
    // console.log("back 2 top");
    // console.log(window);
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });

    // scrollTo(0, 0);
  };
  render() {
    return (
      <div className="to-top" onClick={() => this.toTop()}>
        <i className="icon iconfont icon-huidaodingbu" />
      </div>
    );
  }
}
