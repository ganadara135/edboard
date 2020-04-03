"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.normalizeErrors = (errors) => {
    const errMap = {};
    errors.forEach(err => {
        errMap[err.path] = err.message;
    });
    return errMap;
};
//# sourceMappingURL=normalizeErrors.js.map