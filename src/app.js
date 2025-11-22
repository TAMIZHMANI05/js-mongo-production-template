const express = require("express");
const path = require("path");
const router = require("./route/apiRouter");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const responseMessage = require("./constants/responseMessage");
const httpError = require("./utils/httpError");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../", "public")));

app.use("/api/v1", router);


app.use((req, _res, next) => {
  try {
    throw new Error(responseMessage.NOTFOUND("Route"));
  } catch (error) {
    httpError(next, error, req, 404);
  }
});

app.use(globalErrorHandler);

module.exports = app;
