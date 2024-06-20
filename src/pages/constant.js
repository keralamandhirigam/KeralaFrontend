import { CardSVG } from "../packages/icons/card"
import { CashSVG } from "../packages/icons/cash"
import { GPaySVG } from "../packages/icons/gpay"

const Payment_Mode =  [
    { value: '1', label: 'UPI', icon :  <GPaySVG/>  },
    { value: '2', label: 'Cash',icon :  <CashSVG/>   },
    { value: '3', label: 'Card',icon :  <CardSVG/>   }
    // { value: '4', label: 'Credit card' },
]

export {Payment_Mode}