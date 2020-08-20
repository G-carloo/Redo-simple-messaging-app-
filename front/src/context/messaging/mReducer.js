import { SEND_MESSAGE, GET_MESSAGE, DELETE_MESSAGE } from "../Functions";
import mContext from "./mContext";

export default (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      localStorage.setItem("message", action.payload.message);
      return {
        ...state,
        messages: action.payload,
      };
    case GET_MESSAGE:
      return {
        ...state,
        messages: action.payload,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: null,
      };
    default:
      return state;
  }
};
