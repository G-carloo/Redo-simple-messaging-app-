import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/cContext";
import { CLEAR_CURRENT } from "../../context/Functions";

const Edit = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      editContact(current);
    } else {
      editContact({
        name: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, editContact] = useState({
    name: "",
    phone: "",
    type: "personal",
  });

  const { name, phone, type } = contact;

  const onChange = (e) =>
    editContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    editContact({
      name: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2>{current ? "Edit Contact Details" : "Add Contact"}</h2>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone number'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='pesonal'
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type='submit'
          value={current ? "Update Details" : "Add Contact"}
          className=''
          onClick={clearCurrent}
        />
      </div>
    </form>
  );
};

export default Edit;
