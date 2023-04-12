const express = require("express");
const setupDb = require("./db/db-setup");
const orderController = require("./controllers/order.controller");

setupDb();

const app = express();
app.use(express.json());

app.get("/", () => "Wellcome !");

app.post("/order", orderController);

app.listen(3000, () => console.log("server running on port 3000"));
