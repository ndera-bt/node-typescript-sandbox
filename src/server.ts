import { createServer } from "http";
import { app } from "./app";

const port = process.env.PORT || 4000;

const server = createServer(app);

server.listen(port, () =>
  console.log(`Server is running at http://127.0.0.1:${port}`)
);
