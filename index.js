const express = require("express");
const session = require("express-session");

const app = express();

const router = require("./router");
const port = 3000;

app.use(express.json());

app.use(
  session({
    cookie: {
      sameSite: "strict",
    },
  })
);

app.use(router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
