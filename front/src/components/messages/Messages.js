import React, { Fragment, useContext } from "react";
import Message from "./Message";
import mContext from "../../context/messaging/mContext";

const Messages = () => {
  const mContext = useContext(mContext);

  const { messages } = messagesContext;

  if (messages.length === 0) {
    return <h4></h4>;
  }

  return (
    <Fragment>
      {/* {filtered !== null
        ? filtered */}
      {messages.map((message) => {})}
      {/* : contacts.map((contact) => ( {" "}
      <ContactItem key={contact.id} contact={contact} />
       ))}  */}
    </Fragment>
  );
};

export default Messages;
