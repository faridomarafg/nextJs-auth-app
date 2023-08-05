 import nodemailer from 'nodemailer';
 import { html } from './htmlEmail';


const sendEmail = async ({to, url, text})=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    });


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject : 'AFG - DEVES | NEXTAUTH',
        html: html({url, text})
    };

    const result = transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });

      return result
};

export default sendEmail;