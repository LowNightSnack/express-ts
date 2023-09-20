"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    const user = req.query.user;
    if (user === "admin") {
        req.user = { name: "admin", id: 1 };
        next();
    }
    else {
        res.status(401).json({ message: "Unauthorized" });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map