import { COUNTDESC, CHANGEMSG, INCREMENT, CHANGEWORD,CHANGECITY } from "../actions";

//整个项目的state初始化在reducers里面设置
const defaultState = {
  count: 1988,
  msg: "goodgoodstudy",
  city: "wuhan",
  data: {
    word: "work hard"
  }
};

//reducer负责匹配action.type返回新的state

export default (state = defaultState, action) => {
  // console.log(action);

  switch (action.type) {
    case "COUNT_ADD":
      state.count++;
      console.log(state);
      return { ...state };
      break;

    case COUNTDESC:
      state.count--;
      return { ...state };
      break;

    case CHANGEMSG:
      return { ...state, msg: action.msg };
      break;

    case CHANGECITY:
      return { ...state, city: action.city };
      break;

    case INCREMENT:
      state.count = state.count + action.payload;
      return { ...state };
      break;

    case CHANGEWORD:
      return { ...state, data: { word: action.word } };
      break;

    default:
      return state;
      break;
  }
};
