import { SEND_MESSAGE, GET_MESSAGES } from "../Functions";
import mContext from "./Mc";

export default (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
