import { useReducer } from "react";
import * as TYPES from "./ActionType";
import { nanoid } from "nanoid";

// Create initial state
const initState = {
  todo: [
    {
      id: nanoid,
      fullname: "A",
      gender: "male",
    },

    { id: nanoid, fullname: "B", gender: "female" },

    {
      id: nanoid,
      fullname: "C",
      gender: "male",
    },

    {
      id: nanoid,
      fullname: "D",
      gender: "female",
    },
  ],
};
// Mảng bự todo chứa nhiều phần tử, tất cả sẽ được gán vào payload của cái action

// Create reducer
const toDoReducer = (state, action) => {
  // Thay vì switch(action.type ) thì giờ dùng destructuring
  const { type } = action;
  switch (type) {
    case TYPES.COMPLETE_ACTION:
      // Logic
      return; ///
    case TYPES.ADD_ACTION:
      // Logic
      return; ///
    case TYPES.REMOVE_ACTION:
      // Logic
      return; ///
    case TYPES.UPDATE_ACTION:
      // Logic
      return; ///
    default:
      return state;
  }
};
const [] = useReducer(toDoReducer, initState);
export default toDoReducer;
