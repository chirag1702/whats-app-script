const twillio = require("twilio");
const dotenv = require("dotenv");
const cron = require("node-cron");
const express = require("express");
dotenv.config();

const app = express();

const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_TOKEN;

const client = twillio(accountSid, authToken);

app.listen(process.env.PORT, () => {
  cron.schedule("* */6 * * *", () => {
console.log('cron running');
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: "Gaurav ka birthday aa raha hai",
        to: "whatsapp:+917665135624",
      })
      .then((message) => console.log(message.sid)).catch(error => console.log(error)
);
  });
  console.log("cron job scheduled");
});
