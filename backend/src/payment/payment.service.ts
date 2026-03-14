import { Injectable } from '@nestjs/common';
import Razorpay from 'razorpay';

@Injectable()
export class PaymentService {

  razorpay = new Razorpay({
    key_id: "rzp_test_xxxxxxxxx",
    key_secret: "xxxxxxxxxxxxx",
  });

  async createOrder(amount: number) {

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await this.razorpay.orders.create(options);

    return order;
  }
}