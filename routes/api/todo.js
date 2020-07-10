const express = require("express");
const router = express.Router();
// Load input validation
const validateTodoData = require("../../validation/todo");

// Load User model
const Todo = require("../../models/Todo");
// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/todos", (req, res) => {
  // Form validation
const { errors, isValid } = validateTodoData(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
Todo.findOne({ title: req.body.title }).then(todo => {
  if(todo){
    return res.status(400).json({ title: "Title already Present" });
  }
      const newTodo = new Todo({
        title: req.body.title,
        status: req.body.status,
        deadline: req.body.deadline,
        assignee:req.body.assignee
      });
      newTodo
            .save()
            .then(todo => res.json(todo))
            .catch(err => console.log(err));
// Hash password before saving in database
    });
});
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// router.post("/login", (req, res) => {
//   // Form validation
// const { errors, isValid } = validateLoginInput(req.body);
// // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
// const email = req.body.email;
//   const password = req.body.password;
// // Find user by email
//   User.findOne({ email }).then(user => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }
// // Check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         // User matched
//         // Create JWT Payload
//         const payload = {
//           id: user.id,
//           name: user.name
//         };
// // Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });
// });
module.exports = router;