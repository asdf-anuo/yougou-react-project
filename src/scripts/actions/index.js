import { http } from "../utils";

export const COUNTADD = "COUNTADD";
export const countAdd = count => {
  return {
    type: COUNTADD,
    count
  };
};

//goRegister
export const GOREGISTER = "GOREGISTER";
export const goRegister = ({ url, cb }) => {
  return http.get(url).then(res => {
    cb();
    return {
      type: "GOREGISTER",
      user: res.data.result
    };
  });
};

//goLogin
export const GOLOGIN = "GOLOGIN";
export const goLogin = ({ url, username, password, cb }) => {
  return http.get(url, { params: { username, password } }).then(res => {
    cb();
    return {
      type: "GOLOGIN",
      username: res.data.result
    };
  });
};

//购物车数量+1
export const MYSHOPCARNUMADD = "MYSHOPCARNUMADD";
export const myshopcarnumAdd = num => {
  return {
    type: MYSHOPCARNUMADD,
    num
  };
};

//获取所有商品
export const GETALLGOODS = "GETALLGOODS";
export const getAllGoods = ({ url, limit, cb }) => {
  return http
    .get(url, {
      params: { limit }
    })
    .then(res => {
      cb();
      return {
        type: "GETALLGOODS",
        allGoods: res.data.result
      };
    });
};

//获取所有分类
export const GETALLTYPES = "GETALLTYPES";
export const getAllTypes = ({ url, limit, cb }) => {
  return http
    .get(url, {
      params: { limit }
    })
    .then(res => {
      cb();
      return {
        type: "GETALLTYPES",
        allTypes: res.data.result
      };
    });
};

//根据type 获取对应商品
export const GETALLBOODSBTTYPES = "GETALLBOODSBTTYPES";
export const getAllGoodsByTypes = ({ url, type, limit, cb }) => {
  return http.get(url, { params: { type, limit } }).then(res => {
    cb();
    return {
      type: "GETALLBOODSBTTYPES",
      allGoodsByTypes: res.data.result
    };
  });
};

//根据id 获取对应商品
export const GETGOODSDETAIL = "GETGOODSDETAIL";
export const getGoodsDetail = ({ url, id, cb }) => {
  return http.get(url, { params: { id } }).then(res => {
    cb();
    return {
      type: "GETGOODSDETAIL",
      goodsDetail: res.data.result
    };
  });
};

//获取马丁靴
export const GETMADINGXIE = "GETMADINGXIE";
export const getMadingxie = ({ url, type, limit, cb }) => {
  return http.get(url, { params: { type, limit } }).then(res => {
    cb();
    return {
      type: "GETMADINGXIE",
      madingxie: res.data.result
    };
  });
};

//获取高跟鞋
export const GETGAOGENTYPES = "GETGAOGENTYPES";
export const getGaogenType = ({ url, type, limit, cb }) => {
  return http.get(url, { params: { type, limit } }).then(res => {
    cb();
    return {
      type: "GETGAOGENTYPES",
      gaogenType: res.data.result
    };
  });
};

//获取 top50
export const GETTOP50TYPES = "GETTOP50TYPES";
export const getTop50Type = ({ url, type, limit, cb }) => {
  return http.get(url, { params: { type, limit } }).then(res => {
    cb();
    return {
      type: "GETTOP50TYPES",
      top50Type: res.data.result
    };
  });
};

//获取 T恤
export const GETTXUTYPES = "GETTXUTYPES";
export const getTxu = ({ url, limit, cb }) => {
  return http.get(url, { params: { limit } }).then(res => {
    cb();
    return {
      type: "GETTXUTYPES",
      txu: res.data.result
    };
  });
};

//获取 运动裤
export const GETYUNDONGKUTYPES = "GETYUNDONGKUTYPES";
export const getYundongku = ({ url, limit, cb }) => {
  return http.get(url, { params: { limit } }).then(res => {
    cb();
    return {
      type: "GETYUNDONGKUTYPES",
      yundongku: res.data.result
    };
  });
};

//获取 休闲鞋
export const GETXIUXIANXIETYPES = "GETXIUXIANXIETYPES";
export const getXiuxianxie = ({ url, limit, cb }) => {
  return http.get(url, { params: { limit } }).then(res => {
    cb();
    return {
      type: "GETXIUXIANXIETYPES",
      xiuxianxie: res.data.result
    };
  });
};

//跑步鞋
export const GETPAOBUXIE = "GETPAOBUXIE";
export const getPaobuxie = ({ url, limit, cb }) => {
  return http.get(url, { params: { limit } }).then(res => {
    cb();
    return {
      type: "GETPAOBUXIE",
      paobuxie: res.data.result
    };
  });
};

//老爹鞋
export const GETLAODIEXIE = "GETLAODIEXIE";
export const getLaodiexie = ({ url, limit, cb }) => {
  return http.get(url, { params: { limit } }).then(res => {
    cb();
    return {
      type: "GETLAODIEXIE",
      laodiexie: res.data.result
    };
  });
};

//获取 小白鞋
export const GETXIAOBAIXIE = "GETXIAOBAIXIE";
export const getXiaobaixie = ({ url, limit, cb }) => {
  return http.get(url, { params: { limit } }).then(res => {
    cb();
    return {
      type: "GETXIAOBAIXIE",
      xiaobaixie: res.data.result
    };
  });
};

//获取 高跟鞋
export const GETGAOGENXIE = "GETGAOGENXIE";
export const getGaogenxie = ({ url, type, limit, cb }) => {
  return http.get(url, { params: { type, limit } }).then(res => {
    cb();
    return {
      type: "GETGAOGENXIE",
      gaogenxie: res.data.result
    };
  });
};

//获取 2019新款
export const GETNEW2019 = "GETNEW2019";
export const getNew2019 = ({ url, limit, cb }) => {
  return http.get(url, { params: { limit } }).then(res => {
    cb();
    return {
      type: "GETNEW2019",
      new2019: res.data.result
    };
  });
};
