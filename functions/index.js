const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.sendOtp = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const phoneNumber = req.body.phoneNumber;

    // Your OTP sending logic here
    admin.auth().createUser({
      phoneNumber: phoneNumber,
    })
    .then((userRecord) => {
      // OTP sent successfully
      res.status(200).send('OTP sent successfully');
    })
    .catch((error) => {
      // Error sending OTP
      console.error("Error sending OTP:", error);
      res.status(500).send("Error sending OTP");
    });
  });
});
