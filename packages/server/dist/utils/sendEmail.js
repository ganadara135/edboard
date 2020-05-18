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
const nodemailer = require("nodemailer");
exports.sendEmail = (recipient, url, linkText) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer.createTransport({
        service: 'Naver',
        host: 'smtp.naver.com',
        port: 587,
        auth: {
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PASSWORD
        }
    });
    const info = yield transporter.sendMail({
        from: process.env.MAIL_EMAIL,
        to: `recipient <${recipient}>`,
        subject: "이메일 인증 요청 메일입니다. ✔",
        text: "확인 링크를 클릭해 주세요",
        html: `<html>
        <body>
        <p>가입을 환영합니다!</p>
        <a href="${url}">${linkText}</a>
        </body>
        </html>`
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
//# sourceMappingURL=sendEmail.js.map