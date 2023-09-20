"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    // tslint:disable-next-line:no-console
    console.log(req.url);
    // tslint:disable-next-line:no-console
    console.log(req.params);
    // tslint:disable-next-line:no-console
    console.log(req.query);
    next();
};
exports.logger = logger;
//# sourceMappingURL=logger.js.map