# Payment App (Razorpay Integration)

## Project Overview

This project is a **full-stack payment application** that demonstrates how to integrate an online payment gateway using **Razorpay**.
The application uses a **React frontend** and a **NestJS backend** to create and process payment orders.

The backend generates payment orders through Razorpay APIs, while the frontend interacts with the backend to initiate the payment process.

---

## Tech Stack

### Frontend

* React
* Axios
* JavaScript
* HTML / CSS

### Backend

* NestJS
* Node.js
* Razorpay SDK

### Tools

* Git
* GitHub
* npm

---

## Project Structure

```
payment-app
│
├── backend
│   ├── src
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── payment
│   │        ├── payment.controller.ts
│   │        ├── payment.service.ts
│   │        └── payment.module.ts
│   │
│   └── package.json
│
└── frontend
    ├── src
    ├── public
    └── package.json
```

---

## Features

* Create payment orders using Razorpay API
* React frontend to trigger payments
* NestJS backend API
* REST API communication using Axios
* Modular backend architecture

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/payment-app.git
cd payment-app
```

---

### 2. Install Backend Dependencies

```
cd backend
npm install
```

Run backend server:

```
npm run start:dev
```

Backend will run on:

```
http://localhost:5000
```

---

### 3. Install Frontend Dependencies

```
cd frontend
npm install
```

Start React app:

```
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## API Endpoint

### Create Payment Order

```
POST /payment/create-order
```

Example response:

```
{
  "id": "order_xxxxx",
  "amount": 50000,
  "currency": "INR"
}
```

---

## Environment Variables

Create a `.env` file in the backend folder:

```
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_secret_key
```

These keys can be obtained from the Razorpay dashboard.

---

## Payment Flow

```
User
 ↓
React Frontend
 ↓
Axios API Request
 ↓
NestJS Backend
 ↓
Razorpay Order Creation
 ↓
Razorpay Checkout
```

---

## Future Improvements

* Payment verification
* Database integration
* Order history
* Authentication
* Production deployment

---

## License

This project is for educational purposes.
