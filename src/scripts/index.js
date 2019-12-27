import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import { IndexView } from "./view";
import store from "./store";

const hotRender = Cpt => {
  render(
    <Provider store={store}>
      <Cpt />
    </Provider>,
    document.getElementById("app")
  );
};
hotRender(IndexView);
