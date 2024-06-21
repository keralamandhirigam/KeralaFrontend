import { CardSVG } from "../packages/icons/card"
import { CashSVG } from "../packages/icons/cash"
import { GPaySVG } from "../packages/icons/gpay"

const Payment_Mode =  [
    { value: 'upi', label: 'UPI', icon :  <GPaySVG/>  },
    { value: 'cash', label: 'Cash',icon :  <CashSVG/>   },
    { value: 'card', label: 'Card',icon :  <CardSVG/>   }
    // { value: '4', label: 'Credit card' },
]

export {Payment_Mode}