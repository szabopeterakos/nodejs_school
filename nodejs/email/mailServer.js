var nodemail = require('nodemailer');

var transporter = nodemail.createTransport({
    service: 'gmail',
    auth: {
      user: 'xxx@gmail.com',
      pass: 'xxxxx'
    }
  });

  var mailOptions = {
    from: 'xxx@gmail.com',
    to: 'xxxxxxxxxxxxx@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });