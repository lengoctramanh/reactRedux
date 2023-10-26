
import * as TYPES from "./ActionType";
import { nanoid } from "nanoid";

// Create initial state
const initState = {
  todo: [
    {
      id: nanoid,
      task: "A",
      complete:false,
    },

    { id: nanoid,
     task: "B", 
     complete: true },

    {
      id: nanoid,
      task: "C",
      complete: false,
    },

    {
      id: nanoid,
      task: "D",
     complete: true,
    },
  ],
};
// Mảng bự todo chứa nhiều phần tử, tất cả sẽ được gán vào payload của cái action

// Create reducer
const toDoReducer = (state=initState, action) => {
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

export default toDoReducer;
