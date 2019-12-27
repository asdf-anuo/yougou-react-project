import "./index.scss";
import { Link } from "react-router-dom";
import { Head } from "../../components/head";
import { Button, WhiteSpace, SearchBar } from "antd-mobile";
import { connect } from "react-redux";
// import { myshopcarnumAdd } from "../../actions";

@connect(state => {
  return {
    ...state
  };
})
export class Find extends Component {
  search = val => {
    console.log(val);
  };

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Head title="发现" show={false} />
        <SearchBar
          placeholder="请输入关键字进行搜索..."
          showCancelButton
          maxLength={15}
          ref="search"
          onChange={this.search}
        />
        <WhiteSpace />
      </div>
    );
  }
}
