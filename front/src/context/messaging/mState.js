import React, { useReducer } from "react";
import MessageContext from "./mContext";
import mReducer from "./mReducer";
import { SEND_MESSAGE, GET_MESSAGE, DELETE_MESSAGE } from "../Functions";

const MessageState = (props) => {
  const initialState = {
    messages: null,
  };

  const [state, dispatch] = useReducer(mReducer, initialState);

  // Send mesages
  const sendMessage = (message) => {
    dispatch({ type: SEND_MESSAGE, payload: message });
  };

  //Get messages
  const getMessages = (message) => {
    dispatch({ type: GET_MESSAGE, payload: message });
  };

  // Delete messages
  const deleteMessages = (message) => {
    dispatch({ type: DELETE_MESSAGE, payload: null });
  };

  return (
    <MessageContext.Provider value={{}}>
      {props.children}
      sendmessage, getmessage, deletemessage
    </MessageContext.Provider>
  );
};

export default MessageState;
