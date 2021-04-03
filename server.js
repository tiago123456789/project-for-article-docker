const express = require("express");
const app = express();


app.get("/", (request, response) => response.json({ msg: "Welcome the application!!!"}) );

app.listen(process.env.PORT, () => console.log("Application is runnnig in: http://localhost:3000"));