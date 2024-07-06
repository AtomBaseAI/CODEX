const express = require("express");
const server = express();
const cors = require("cors");
const v1route = require("./routes/index");
const { PORT } = require("./config/server-config");

server.use(express.json());
server.use(cors());
server.use("/api", v1route);

const startAndcreateServer = async () => {
  const port = process.env.PORT || 8080;  
  server.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
};

startAndcreateServer();
