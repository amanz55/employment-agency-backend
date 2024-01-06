import nodemailer from "nodemailer";

const sendEmail = (customer_email, generated_number, subject_string) => {
  console.log(typeof customer_email, typeof generated_number);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amanuelalemayehu449@gmail.com",
      pass: "cdpr iftw oorp jixg",
    },
  });

  var mailOptions = {
    from: "amanuelalemayehu449@gmail.com",
    to: customer_email,
    subject: subject_string,
    html:
      generated_number === -1
        ? `<h1>New candidate has been added!</h1>`
        : `<h1>Your reservation code is ${generated_number.toString()}</h1>`,
  };

  console.log(typeof mailOptions.from, typeof mailOptions.to);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendEmail;
