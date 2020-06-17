"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeErrors = void 0;
;
exports.normalizeErrors = (errors) => {
    // const errMap: { [key: string]: string } = {};
    const errMap = { 'message': errors.message };
    // Object.keys(errors).forEach( (val, i, arr) => {
    //     errMap[i] = val;
    // });
    // errors.forEach(err => {
    //     errMap[err.path] = err.message;
    // });
    console.log("errMap : ", errMap);
    return errMap;
};
//# sourceMappingURL=normalizeErrors.js.map