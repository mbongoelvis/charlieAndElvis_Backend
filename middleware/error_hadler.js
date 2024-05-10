const { STATUSCODE } = require("../utils/status_code");

const errorHandler = (err, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500;
  switch (status) {
    case STATUSCODE.BADREQUEST:
      res.json({
        type: "BAD REQHUEST",
        message: err.message,
        stack: err.stack,
      });
      break;
    case STATUSCODE.NOTFOUND:
      res.json({ type: "NOT FOUND", message: err.message, stack: err.stack });
      break;
    case STATUSCODE.SERVERERROR:
      res.json({ type: "SEVER ERROR", message: err.message, stack: err.stack });
      break;
    default:
      res.json({
        type: "SEVER ERROR",
        message: err.message,
        stack: err.stack,
      });
  }
  next();
};

module.exports = { errorHandler };
