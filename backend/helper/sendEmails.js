// const {sendingEmail }= require('./nodemailer')
const nodemailer = require("nodemailer")
const {google}=require('googleapis')

// const CLIENT_ID='890060694689-l2t3slc5fh0u38nr91ete34po94l9ehm.apps.googleusercontent.com';
// const CLIENT_SECRET='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';
// const REDIRECT_URI='https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN='1//045zwBWK12vUECgYIARAAGAQSNwF-L9IrTydaamGVT8glU38_J1MJ00I-klBSGWwWFh7xLqoNZ8bA4qcaRFN7bMUIL3-OmcOv_ZY'

const CLIENT_ID=process.env.OAUTH_CLIENTID;
const CLIENT_SECRET=process.env.OAUTH_CLIENT_SECRET;
const REDIRECT_URI=process.env.OUTH_REDIRECT_URI;
const REFRESH_TOKEN=process.env.OAUTH_REFRESH_TOKEN

const oAuth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

const sendEmails=async({email,role,uniqueCode})=>{
     try {
          const accessToken=await oAuth2Client.getAccessToken()

          let transport = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                 type: 'OAuth2',
                 user: 'parascet2025@gmail.com',
                 clientId:CLIENT_ID,
                 clientSecret:CLIENT_SECRET,
                 refreshToken:REFRESH_TOKEN,
                 accessToken:accessToken
               }
             });
          
             let mailOptions = {
               from: "parascet2025@gmail.com",
               to: `${email}`,
               subject: 'Your UniqueCode',
               text: `Congrats For being Selected As An ${role}`,
               html: `<h1>Congrats For Being Selected As <span style="color:yellow">${role}</span> And Your UniqueCode Is <span style="color:red">${uniqueCode}</span></h1>`
             };

             transport.sendMail(mailOptions, function (err, data) {
               if (err) {
                 console.log(err);
               } else {
                 console.log("Email Sent Successfully : ", data.response);
               }
             });
     } catch (error) {
           return error
     }

    //  res.send("HEllooo chhodi")


}

module.exports=sendEmails