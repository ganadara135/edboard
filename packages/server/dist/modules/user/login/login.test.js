"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
const errorMessages_1 = require("./errorMessages");
const User_1 = require("../../../entity/User");
const TestClient_1 = require("../../../utils/TestClient");
const createTestConn_1 = require("../../../testUtils/createTestConn");
faker.seed(Date.now() + 1);
const email = faker.internet.email();
const password = faker.internet.password();
const client = new TestClient_1.TestClient(process.env.TEST_HOST);
let conn;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    conn = yield createTestConn_1.createTestConn();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    conn.close();
}));
const loginExpectError = (e, p, errMsg) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield client.login(e, p);
    expect(response.data).toEqual({
        login: [
            {
                path: "email",
                message: errMsg
            }
        ]
    });
});
describe("login", () => {
    test("email not found send back error", () => __awaiter(void 0, void 0, void 0, function* () {
        yield loginExpectError(faker.internet.email(), faker.internet.password(), errorMessages_1.invalidLogin);
    }));
    test("email not confirmed", () => __awaiter(void 0, void 0, void 0, function* () {
        yield client.register(email, password);
        yield loginExpectError(email, password, errorMessages_1.confirmEmailError);
        yield User_1.User.update({ email }, { confirmed: true });
        yield loginExpectError(email, faker.internet.password(), errorMessages_1.invalidLogin);
        const response = yield client.login(email, password);
        expect(response.data).toEqual({ login: null });
    }));
});
//# sourceMappingURL=login.test.js.map