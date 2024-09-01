const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'emt@gmail.com',
        pass:'gdh'
    }
})

const mailOptions = {
    from: 'esgovt@gmail.com',
    to: 'd.igiekhume@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
            console.log(err)
        }else{
            console.log("mail sent:" + info.response);
        }
    
})