import React, { useContext } from "react";
import PropTypes from "prop-types";
import mContext from "../../context/messaging/mContext";
import MessageState from "../../context/messaging/mState";
import { response } from "express";

const Message = ({ message }) => {
  const messageContext = useContext(mContext);
  const {} = mContext;

  const { name } = message;

  const onDelete = ({ message }) => {
    // deleteMessage(message);
  };

  const onMessage = ({ message }) => {
    // sendMessage(name);
    // res.json({ msg: "Message sent" });
  };

  return (
    <div className='Ci'>
      <h3>{name}</h3>
      <p>
        <button className='bg' onClick={onDelete}>
          Delete
        </button>
        <button className='bg' onClick={onMessage}>
          message
        </button>
      </p>
    </div>
  );
};

Message.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Message;
