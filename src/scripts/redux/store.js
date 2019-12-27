// 配置中央容器store 全局唯一

import { createStore } from "redux";
import reducers from "./reducers";
const store = createStore(reducers);
export default store;
