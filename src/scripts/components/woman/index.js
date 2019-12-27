import "./index.scss";
import { Head } from "../head";
export class Woman extends Component {
  render() {
    return (
      <div className="Man-box">
        <Head title="女生天地" show={true} {...this.props} />
        <h2>woman type</h2>
      </div>
    );
  }
}
