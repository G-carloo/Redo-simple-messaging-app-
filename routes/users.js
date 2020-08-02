const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../mods/User");
// users.use(cors());

process.env.SECRET_KEY = "secret";

router.post(
  "/register",
  [
    check("name", "Please enter a name").not().isEmpty(),
    check("email", "Please enter a valid email").not().isEmpty().isEmail(),
    check("phone", "Please enter a phone number").not().isEmpty().isNumeric(),
    check("password", "Please enter a valid password")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("passed");
  }
);
//   const today = new Date();
//   const userData = {
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     password: req.body.password,
//     created: today,
//   };

//   User.findOne({
//     name: req.body.name,
//   })
//     .then((user) => {
//       if (!user) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           userData.password = hash;
//           User.create(userData)
//             .then((user) => {
//               res.json({ status: user.name + "You have been Registered!" });
//               await user.save();
//             })
//             .catch((err) => {
//               res.send("error: " + err);
//             });
//         });
//       } else {
//         res.json({ error: "User already exists" });
//       }
//     })
//     .catch((err) => {
//       res.send("error: " + err);
//     });
// }
// );

router.post("/login", (req, res) => {
  User.findOne({
    name: req.body.name,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user_id,
            name: user.name,
            email: user.email,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 5000,
          });
          res.send(token);
        } else {
          res.json({ error: "User doesnt't exist(probaly not registered)" });
        }
      } else {
        res.json({ error: "User doesnt't exist(probaly not registered)" });
      }
    })
    .catch((err) => {
      res.json({ msg: "Error" + err });
    });
});

router.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json({ msg: "No such user is known" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});
