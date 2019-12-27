import { ReduxDemo } from "./views";
import store from "./store";

import { render } from "react-dom";
export class ReduxIndex extends Component {
  render() {
    const state = store.getState();
    console.log(state);
    return (
      <div>
        <ReduxDemo {...store.getState()} />
      </div>
    );
  }
}


