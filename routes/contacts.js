const express = require("express");
const validator = require("express-validator");
const cors = require("cors");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Contacts = require("../participants/Contacts");
const { check } = require("express-validator");
contacts.use(cors());

// Creating/Adding A Contact
app.post(
  "/",
  auth, [
    check("name", "Please enter a name").not().isEmpty(),
    check("phone", "Please enter a phone number").isNumeric.isLength(),
  ],
  (req, res) => {
    const Contact = {
      name: req.body.name,
      phone: req.body.phone,
      created: today,
    };

    Contact.create(contactData)
      .then((contact) => {
        res.json({ status: contact.name + "Has been added as a contact" });
      })
      .catch((err) => {
        res.send("error: " + err);
      });
  }
);

// Get contacts
router.get("/:name", auth, async (req, res) => {
  const contacts = await Contacts
  .find({ user: req.user.name })
  .sort({ date: -1 })
});

// Update Contact
router.put("/:name", auth, async (req, res) => {
  const { name, phone }

  let contact = await Contacts.findByName( req.params.name )

  if(!contact) {
    res.send(404).json({ msg: "Contact not found" })
  } else {
    res.json(contact)
  }

  const contact = await Contacts.findByNameAndUpdate(
    req.params.name,
    {set: Contact},
    {new: true}
  );

  res.json(contact);
 
});

// Delete Contact
router.delete("/name", auth , (req, res) => {
  let contacts = await Contacts.findByName(req.params.name)

  if(!contact) {
    res.send(404).json({ msg: "Contact does not exist" })
  } else {
    res.json(contact)
  }

  const contact = await Contacts.findByName(
    req.params.name,
    {delete: Contact},
  );

  res.json({ mg: "Contact deleted" })
});
