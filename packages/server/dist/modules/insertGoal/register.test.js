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
const common_1 = require("@abb/common");
const User_1 = require("../../entity/User");
const errorMessages_1 = require("./errorMessages");
const TestClient_1 = require("../../utils/TestClient");
const createTestConn_1 = require("../../testUtils/createTestConn");
faker.seed(Date.now() + 5);
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
describe("Register user", () => __awaiter(void 0, void 0, void 0, function* () {
    it("check for duplicate emails", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.register(email, password);
        expect(response.data).toEqual({ register: null });
        const users = yield User_1.User.find({ where: { email } });
        expect(users).toHaveLength(1);
        const user = users[0];
        expect(user.email).toEqual(email);
        expect(user.password).not.toEqual(password);
        const response2 = yield client.register(email, password);
        expect(response2.data.register).toHaveLength(1);
        expect(response2.data.register[0]).toEqual({
            path: "email",
            message: errorMessages_1.duplicateEmail
        });
    }));
    it("check bad email", () => __awaiter(void 0, void 0, void 0, function* () {
        const response3 = yield client.register("b", password);
        expect(response3.data).toEqual({
            register: [
                {
                    path: "email",
                    message: common_1.emailNotLongEnough
                },
                {
                    path: "email",
                    message: common_1.invalidEmail
                }
            ]
        });
    }));
    it("check bad password", () => __awaiter(void 0, void 0, void 0, function* () {
        const response4 = yield client.register(faker.internet.email(), "ad");
        expect(response4.data).toEqual({
            register: [
                {
                    path: "password",
                    message: common_1.passwordNotLongEnough
                }
            ]
        });
    }));
    it("check bad password and bad email", () => __awaiter(void 0, void 0, void 0, function* () {
        const response5 = yield client.register("df", "ad");
        expect(response5.data).toEqual({
            register: [
                {
                    path: "email",
                    message: common_1.emailNotLongEnough
                },
                {
                    path: "email",
                    message: common_1.invalidEmail
                },
                {
                    path: "password",
                    message: common_1.passwordNotLongEnough
                }
            ]
        });
    }));
}));
//# sourceMappingURL=register.test.js.map