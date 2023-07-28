import nodemailer from 'nodemailer';
import { NODE_MAILER_HOST, NODE_MAILER_PASSWORD, NODE_MAILER_USER } from '../config';

const transporter = nodemailer.createTransport({
    host: NODE_MAILER_HOST,
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: NODE_MAILER_USER,
      pass: NODE_MAILER_PASSWORD
    }
  });

export const boomerMailer = async ({from, to, subject, text, html}) =>{
    try {
        const info = await transporter.sendMail({from, to, subject, text, html}); 
        return info.messageId;
    } catch (error) {
        console.log(error);
    }
    
}