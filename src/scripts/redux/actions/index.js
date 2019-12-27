// action 必须是对象
export const COUNTDESC = "COUNTDESC";
export const countDesc = { type: COUNTDESC };

export const CHANGEMSG = "CHANGEMSG";
export function changeMsg(msg) {
  return {
    type: CHANGEMSG,
    msg
  };
}

export const INCREMENT = "increment";
export function increment(payload) {
  return {
    type: INCREMENT,
    payload
  };
}

export const CHANGEWORD = "CHANGEWORD";
export const changeWord = word =>{
  return{
    type:CHANGEWORD,
    word,
  }
}

export const CHANGECITY = "CHANGECITY";
export const changeCity = city =>{
  return{
    type:CHANGECITY,
    city,
  }
}

// "学历专业20  面试题20  沟通表达10  项目经验40  运气10" 