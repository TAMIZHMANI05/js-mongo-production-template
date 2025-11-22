const httpResponse = require("../utils/httpResponse");
const responseMessage = require("../constants/responseMessage");
const httpError = require("../utils/httpError");

module.exports = {
  self: (req, res, next) => {
    try {
      httpResponse(req, res, 200, responseMessage.SUCCESS);
    } catch (err) {
      httpError(next, err, req, 500);
    }
  },
};
