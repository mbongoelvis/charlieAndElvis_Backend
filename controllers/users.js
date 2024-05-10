const asyncHandler = require("express-async-handler");
const { validateSignUpSchema } = require("../utils/validate_user");
const { STATUSCODE } = require("../utils/status_code");

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const { value, error } = validateSignUpSchema(req.body);
  if (error) {
    res.status(STATUSCODE.BADREQUEST);
    throw new Error(error.message);
  }
  res.json({ ok: "ok" });
  try {
  } catch (error) {}
});
const signInUser = (req, res) => {};

module.exports = { createUser, signInUser };
