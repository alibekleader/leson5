import jsonServer from "json-server";
import express from "express";

const server = jsonServer.create();
const router = jsonServer.router("./server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 500);
});

const app = express();

app.use(server);

setTimeout(() => {
  server.use(router);
}, 500);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
