// 라이브러리 불러오기
import nodemailer from "nodemailer";


// 메일 주소 및 앱 비밀번호 선언하기 (gmail)
const sender_email = process.env.REACT_APP_SENDER_EMAIL;
const recipient_email = process.env.REACT_APP_RECIPIENT_EMAIL;
const password = process.env.REACT_APP_PASSWORD;


// transporter 생성하기
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: sender_email,
    password,
  },
});


// 메일 옵션 정하기
export const mailOptions = {
  from: sender_email, // 송신할 이메일 
  to: recipient_email, // 수신할 이메일
};