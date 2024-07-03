const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// cookie

app.get("/myName", function (req, res) {
  if (req.cookies.name) {
    res.send(`Hello ${req.cookies.name}`);
  } else {
    res.send(`
            <form action="/trackName" method="GET">
                <input type="text" name="name" placeholder="Please enter your name" required>
                <button type=""submit>送出</button>
            </form>
            `);
  }
});
app.get("/trackName", (req, res) => {
  const userName = req.query.name;
  res.cookie("name", userName, { httpOnly: true });
  res.redirect("/myName");
});

//root

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//sum_parameter API

app.get("/getData", (req, res) => {
  const number = req.query.number;
  if (!number) {
    res.send(`Lack of Parameter`);
  } else if (isNaN(number)) {
    res.send("Wrong Parameter");
  } else {
    const num = parseInt(number);
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    res.send(`${sum}`);
  }
});

// 更正post成get方式,也把req.body更正為query.number
// res.json同步更正成res.send 2024/7/3

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
