import { CardSVG } from "../packages/icons/card"
import { CashSVG } from "../packages/icons/cash"
import { GPaySVG } from "../packages/icons/gpay"

const Payment_Mode =  [
    { value: 'upi', label: 'UPI', icon :  <GPaySVG/>  },
    { value: 'cash', label: 'Cash',icon :  <CashSVG/>   },
    { value: 'card', label: 'Card',icon :  <CardSVG/>   }
    // { value: '4', label: 'Credit card' },
]



const sampleData =[
    {
        "name": "Vijay",
        "phoneNumber": "987654323",
        "state": "TN",
        "city": "Chennai",
        "address": "5/102 Dubai st",
        "paymentMode": "upi",
        "totalAmount": 10000,
        "amountPaid": 1000,
        "balanceDue": 9000,
        "remark": "Almost done✌️",
        "clientId": "Vij987"
    },
    {
        "name": "Ravi",
        "phoneNumber": "876543210",
        "state": "KA",
        "city": "Bangalore",
        "address": "12/45 MG Road",
        "paymentMode": "credit card",
        "totalAmount": 15000,
        "amountPaid": 5000,
        "balanceDue": 10000,
        "remark": "Payment pending",
        "clientId": "Rav876"
    },
    {
        "name": "Sankar",
        "phoneNumber": "9988776655",
        "state": "MH",
        "city": "Mumbai",
        "address": "27/9 Bandra West",
        "paymentMode": "bank transfer",
        "totalAmount": 8000,
        "amountPaid": 8000,
        "balanceDue": 0,
        "remark": "Paid in full",
        "clientId": "Pri998"
    },
    {
        "name": "Amit",
        "phoneNumber": "7654321098",
        "state": "UP",
        "city": "Lucknow",
        "address": "8/15 Gomti Nagar",
        "paymentMode": "cash",
        "totalAmount": 12000,
        "amountPaid": 6000,
        "balanceDue": 6000,
        "remark": "Half payment made",
        "clientId": "Ami765"
    },
    {
        "name": "Deepa",
        "phoneNumber": "9876543210",
        "state": "TN",
        "city": "Coimbatore",
        "address": "15/7 Avinashi Road",
        "paymentMode": "cheque",
        "totalAmount": 20000,
        "amountPaid": 15000,
        "balanceDue": 5000,
        "remark": "Final payment due",
        "clientId": "Dee987"
    },
    {
        "name": "Karthik",
        "phoneNumber": "9012345678",
        "state": "KA",
        "city": "Mysore",
        "address": "3/21 Vijayanagar",
        "paymentMode": "online bank transfer",
        "totalAmount": 18000,
        "amountPaid": 10000,
        "balanceDue": 8000,
        "remark": "Progressing well",
        "clientId": "Kar901"
    },
    {
        "name": "Anjali",
        "phoneNumber": "9876541230",
        "state": "DL",
        "city": "New Delhi",
        "address": "10/5 Connaught Place",
        "paymentMode": "paypal",
        "totalAmount": 30000,
        "amountPaid": 20000,
        "balanceDue": 10000,
        "remark": "Finalizing details",
        "clientId": "Anj987"
    },
    {
        "name": "Rajesh",
        "phoneNumber": "9871234567",
        "state": "MH",
        "city": "Pune",
        "address": "4/8 Koregaon Park",
        "paymentMode": "credit card",
        "totalAmount": 25000,
        "amountPaid": 18000,
        "balanceDue": 7000,
        "remark": "Processing payment",
        "clientId": "Raj987"
    },
    {
        "name": "Sneha",
        "phoneNumber": "8765432109",
        "state": "KA",
        "city": "Hubli",
        "address": "6/17 Gandhi Nagar",
        "paymentMode": "upi",
        "totalAmount": 15000,
        "amountPaid": 12000,
        "balanceDue": 3000,
        "remark": "Finalizing arrangements",
        "clientId": "Sne876"
    },
    {
        "name": "Sanjay",
        "phoneNumber": "7890123456",
        "state": "GJ",
        "city": "Ahmedabad",
        "address": "9/3 Navrangpura",
        "paymentMode": "cash",
        "totalAmount": 18000,
        "amountPaid": 10000,
        "balanceDue": 8000,
        "remark": "Discussing terms",
        "clientId": "San789"
    },
    {
        "name": "Meena",
        "phoneNumber": "8765432101",
        "state": "TN",
        "city": "Madurai",
        "address": "23/11 Anna Nagar",
        "paymentMode": "bank transfer",
        "totalAmount": 12000,
        "amountPaid": 8000,
        "balanceDue": 4000,
        "remark": "Adjusting dates",
        "clientId": "Mee876"
    },
    {
        "name": "Alok",
        "phoneNumber": "8901234567",
        "state": "UP",
        "city": "Varanasi",
        "address": "7/4 Sigra",
        "paymentMode": "cheque",
        "totalAmount": 22000,
        "amountPaid": 15000,
        "balanceDue": 7000,
        "remark": "Finalizing contract",
        "clientId": "Alo890"
    },
    {
        "name": "Neha",
        "phoneNumber": "9876543211",
        "state": "MH",
        "city": "Nagpur",
        "address": "18/6 Dharampeth",
        "paymentMode": "online bank transfer",
        "totalAmount": 16000,
        "amountPaid": 12000,
        "balanceDue": 4000,
        "remark": "Checking documents",
        "clientId": "Neh987"
    },
    {
        "name": "Suresh",
        "phoneNumber": "9012345678",
        "state": "KA",
        "city": "Belgaum",
        "address": "5/19 Nehru Nagar",
        "paymentMode": "paypal",
        "totalAmount": 25000,
        "amountPaid": 20000,
        "balanceDue": 5000,
        "remark": "Awaiting confirmation",
        "clientId": "Sur901"
    },
    {
        "name": "Divya",
        "phoneNumber": "9876541234",
        "state": "TN",
        "city": "Tiruchirappalli",
        "address": "13/2 Rockfort",
        "paymentMode": "credit card",
        "totalAmount": 18000,
        "amountPaid": 14000,
        "balanceDue": 4000,
        "remark": "Reviewing terms",
        "clientId": "Div987"
    },
    {
        "name": "Vikram",
        "phoneNumber": "8765432109",
        "state": "MH",
        "city": "Thane",
        "address": "21/7 Vasant Vihar",
        "paymentMode": "upi",
        "totalAmount": 20000,
        "amountPaid": 15000,
        "balanceDue": 5000,
        "remark": "Finalizing paperwork",
        "clientId": "Vik876"
    },
    {
        "name": "Pooja",
        "phoneNumber": "7890123456",
        "state": "GJ",
        "city": "Surat",
        "address": "8/5 Athwalines",
        "paymentMode": "cash",
        "totalAmount": 30000,
        "amountPaid": 25000,
        "balanceDue": 5000,
        "remark": "Final inspection pending",
        "clientId": "Poo789"
    },
    {
        "name": "Anil",
        "phoneNumber": "8765432101",
        "state": "TN",
        "city": "Erode",
        "address": "19/4 Gandhipuram",
        "paymentMode": "bank transfer",
        "totalAmount": 15000,
        "amountPaid": 12000,
        "balanceDue": 3000,
        "remark": "Finalizing dates",
        "clientId": "Ani876"
    },
    {
        "name": "Radha",
        "phoneNumber": "8901234567",
        "state": "UP",
        "city": "Allahabad",
        "address": "3/21 Civil Lines",
        "paymentMode": "cheque",
        "totalAmount": 22000,
        "amountPaid": 15000,
        "balanceDue": 7000,
        "remark": "Finalizing contract terms",
        "clientId": "Rad890"
    }
]

export {Payment_Mode, sampleData}