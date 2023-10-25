
// *là import tất cả các biến đc export  từ './ActionType' thành  một object có tên TYPES.
// Lúc này chỉ chỗ type chỉ cần lấy cái TYPES. ra cái biến cụ thể
import * as TYPES from "./ActionType";
export const completeAction = (todo) => {
  return {
    type: TYPES.COMPLETE_ACTION,
    payload: todo,
  };
};
export const addAction = (todo) => {
  return {
    type: TYPES.ADD_ACTION,
    payload: todo,
  };
};
export const removeAction = (todo) => {
  return {
    type: TYPES.REMOVE_ACTION,
    payload: todo,
  };
};
export const updateAction = (todo) => {
  return {
    type: TYPES.UPDATE_ACTION,
    payload: todo,
  };
};
/** + Giá trị của todo được truyền vào các hàm và được gán cho thuộc tính payload
 *  + Là mấy cái hàm đó nhận tham số là gì thì sẽ được gán tất cả cho payload
*/