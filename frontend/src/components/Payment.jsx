import axios from "axios";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    document.body.appendChild(script);
  });
}

export default function Payment() {

  const payNow = async () => {

    await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    const order = await axios.post(
      "http://localhost:3000/payment/create-order",
      { amount: 500 }
    );

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: order.data.amount,
      currency: "INR",
      order_id: order.data.id,

      handler: async function (response) {

        await axios.post(
          "http://localhost:3000/payment/verify",
          response
        );

        alert("Payment Successful");
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button onClick={payNow}>
      Pay ₹500
    </button>
  );
}
