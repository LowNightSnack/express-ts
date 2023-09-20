import { RequestHandler } from "express";

const auth: RequestHandler = (req, res, next) => {
  const user = req.query.user;
  if (user === "admin") {
    req.user = { name: "admin", id: 1 };
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export { auth };
