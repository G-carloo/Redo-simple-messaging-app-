import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/cContext";

const Contact = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { name, phone, type } = contact;

  const onDelete = ({ contact }) => {
    deleteContact(name);
    clearCurrent();
  };

  const onMessage = ({ message }) => {
    // messageContact(name)
    console.log("Message working");
  };

  return (
    <div className='Ci'>
      <h3>{name}</h3>
      <h4>
        <span
          className={
            "badge" +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h4>
      <ul>
        {phone && (
          <p>
            <i className='fas fa-user' />
            {phone}
          </p>
        )}
      </ul>
      <p>
        <button className='bg' onClick={() => setCurrent(contact)}>
          Edit
        </button>
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

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
