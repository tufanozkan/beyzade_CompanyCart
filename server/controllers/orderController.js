const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Twilio SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio Token
const client = twilio(accountSid, authToken);

exports.placeOrder = (req, res) => {
  const { cartItems, shippingInfo } = req.body;

  const orderDetails = `
    Sipariş Detayları:
    - Ürünler: ${cartItems
      .map((item) => `${item.name} (${item.quantity})`)
      .join(", ")}
    - Kargo Bilgileri: ${shippingInfo.firstName} ${shippingInfo.lastName}, ${
    shippingInfo.phone
  }, ${shippingInfo.address}
  `;

  // Mesaj gönder
  client.messages
    .create({
      body: orderDetails,
      from: "whatsapp:+14155238886", // Twilio WhatsApp numarası
      to: "whatsapp:+905078958517", // Alıcı numarası
    })
    .then((message) => {
      console.log(`Message sent: ${message.sid}`);
      res.status(200).json({ success: true, message: "Sipariş tamamlandı!" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: "Mesaj gönderilemedi!" });
    });
};
