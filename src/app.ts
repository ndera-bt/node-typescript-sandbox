import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Hello from the server-side",
  });
});

export { app };
