const defaultState = {
  count: 2018,
  myshopcarnum: 0,
  myordernum:0,
  allGoods: [],
  allTypes: [],
  allGoodsByTypes: [],
  gaogenType: [],
  top50Type: [],
  txu: [],
  yundongku: [],
  xiuxianxie: [],
  paobuxie: [],
  laodiexie: [],
  xiaobaixie: [],
  gaogenxie: [],
  new2019: [],
  madingxie: [],
  goodsDetail: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "COUNTADD":
      state.count += action.count;
      return { ...state };
      break;

    case "GOREGISTER":
      state.user = action.user;
      return { ...state };
      break;

    //我的购物车数量
    case "MYSHOPCARNUMADD":
      state.myshopcarnum += action.num;
      return { ...state };
      break;

    // 获取所有goods
    case "GETALLGOODS":
      state.allGoods = action.allGoods;
      return { ...state };
      break;

    // 获取所有types
    case "GETALLTYPES":
      state.allTypes = action.allTypes;
      return { ...state };
      break;

    // 根据type获取商品详情
    case "GETALLBOODSBTTYPES":
      state.allGoodsByTypes = action.allGoodsByTypes;
      return { ...state };
      break;

    // 根据id获取商品详情
    case "GETGOODSDETAIL":
      state.goodsDetail = action.goodsDetail;
      return { ...state };
      break;

    case "GETGAOGENTYPES":
      state.gaogenType = action.gaogenType;
      return { ...state };
      break;

    case "GETTOP50TYPES":
      state.top50Type = action.top50Type;
      return { ...state };
      break;

    case "GETTXUTYPES":
      state.txu = action.txu;
      return { ...state };
      break;

    case "GETYUNDONGKUTYPES":
      state.yundongku = action.yundongku;
      return { ...state };
      break;

    case "GETXIUXIANXIETYPES":
      state.xiuxianxie = action.xiuxianxie;
      return { ...state };
      break;

    case "GETPAOBUXIE":
      state.paobuxie = action.paobuxie;
      return { ...state };
      break;

    case "GETLAODIEXIE":
      state.laodiexie = action.laodiexie;
      return { ...state };
      break;

    case "GETXIAOBAIXIE":
      state.xiaobaixie = action.xiaobaixie;
      return { ...state };
      break;

    case "GETGAOGENXIE":
      state.gaogenxie = action.gaogenxie;
      return { ...state };
      break;

    case "GETNEW2019":
      state.new2019 = action.new2019;
      return { ...state };
      break;

    case "GETMADINGXIE":
      state.madingxie = action.madingxie;
      return { ...state };
      break;

    default:
      return state;
      break;
  }
};
