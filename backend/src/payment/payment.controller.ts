import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {

  constructor(private paymentService: PaymentService) {}

  @Post('create-order')
  async createOrder(@Body() body) {
    return this.paymentService.createOrder(body.amount);
  }

}