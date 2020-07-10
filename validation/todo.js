const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateTodoData(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.deadline = !isEmpty(data.deadline) ? data.deadline : "";
  data.assignee = !isEmpty(data.assignee) ? data.assignee : "";
// Name checks
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field can't be blank";
  }
// Email checks
  if (Validator.isEmpty(data.status)) {
    errors.status = "Please select Status from drop-down ";
  }

  if (Validator.isEmpty(data.assignee)) {
    errors.assignee = "Assignee field can't be blank";
  }
if (Validator.isEmpty(data.deadline)) {
    errors.deadline = "Please select from Calendar";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};