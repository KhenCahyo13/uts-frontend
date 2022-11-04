import { useState } from "react"
import { DialogMessage } from "./DialogMessage"
import { PurchasingData } from "./PurchasingData"

export const Count = () => {
    const [totalItem, setTotalItem] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [subTotal, setSubTotal] = useState('')
    const [grandTotal, setGrandTotal] = useState('')
    const [discount, setDiscount] = useState('')
    const [payment, setPayment] = useState('')
    const [onDialog, setOnDialog] = useState({
        message: '',
        isDialog: false
    })

    // onDialog Message
    const handleOnDialog = (message, isDialog) => {
        setOnDialog({
            message,
            isDialog
        })
    }

    const getDiscountSuccess = () => {
        handleOnDialog('', false)
    }

    // Count SubTotal
    const handleTotalItem = (event) => {
        setTotalItem(event.target.value)
    }

    const handleUnitPrice = (event) => {
        setUnitPrice(event.target.value)
    }

    const handleCount = (event) => {
        event.preventDefault()
        const count = totalItem * unitPrice
        setSubTotal(count)
        setTotalItem('')
        setUnitPrice('')
    }

    // Get a Discount
    const handleSubTotal = (event) => {
        setSubTotal(event.target.value)
    }

    const handleDiscount = (event) => {
        setDiscount(event.target.value)
    }

    const handleDiscountResult = (event) => {
        event.preventDefault()
        if (subTotal >= 252000) {
            setDiscount(0.11)
            let getDiscount = subTotal * discount
            handleOnDialog('The discount that customers get is ' + getDiscount, true)
            let grandTotalResults = subTotal - getDiscount
            setGrandTotal(grandTotalResults)
        } else if ( subTotal >= 439000) {
            setDiscount(0.21)
            let getDiscount = subTotal * discount
            handleOnDialog('The discount that customers get is ' + getDiscount, true)
            let grandTotalResults = subTotal - getDiscount
            setGrandTotal(grandTotalResults)
        } else if ( subTotal >= 640000) {
            setDiscount(0.35)
            let getDiscount = subTotal * discount
            handleOnDialog('The discount that customers get is ' + getDiscount, true)
            let grandTotalResults = subTotal - getDiscount
            setGrandTotal(grandTotalResults)
        } else {
            setDiscount('')
            handleOnDialog('Sorry customers dont get discounts', true)
            setGrandTotal(subTotal)
        }

        setSubTotal('')
        setDiscount('')
    }

    // Payment
    const handleGrandTotal = (event) => {
        setGrandTotal(event.target.value)
    }

    const handlePayment = (event => {
        setPayment(event.target.value)
    })

    const handlePaymentResult = (event) => {
        event.preventDefault()
        if ( payment < grandTotal ) {
            handleOnDialog('Sorry, the payment amount is less', true)
        } else if(payment > grandTotal) {
            const remainingPayment = payment - grandTotal
            handleOnDialog('Congratulations, payment was successful. The remaining payments are : ' + remainingPayment, true)
            setGrandTotal('')
            setPayment('')
        } else {
            handleOnDialog('Congratulations, payment was successful', true)
            setGrandTotal('')
            setPayment('')
        }
    }

    return (
        <>
        <div className="bg-white mx-4 my-6 px-4 py-4 rounded-md shadow-md lg:mx-24 lg:px-12 dark:bg-gray-700">
            <h1 className="text-gray-600 text-center font-medium lg:text-xl dark:text-gray-100">Calculate Price</h1>
            <p className="text-gray-400 text-center text-sm dark:text-gray-300">- Calculate Total Customer Purchase Price Here -</p>

            <div className="bg-gray-100 mt-2 px-2 py-4 rounded-md shadow-md lg:mt-4 dark:bg-gray-800">
                <form>
                    <div className="flex justify-between overflow-hidden">
                        <input value={totalItem} onChange={handleTotalItem} className="mr-2 w-full outline-none text-xs h-9 px-2 rounded-md shadow-md focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="number" placeholder="Enter total item" />
                        <input value={unitPrice} onChange={handleUnitPrice} className="w-full outline-none text-xs h-9 px-2 rounded-md shadow-md focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="number" placeholder="Enter unit price item" />
                    </div>
                    <div className="mt-3 flex items-center gap-4 overflow-hidden">
                        <button onClick={handleCount} className="mb-2 bg-yellow-500 px-4 py-1 rounded-md shadow-md shadow-yellow-500 hover:bg-yellow-600 text-sm text-white hover:shadow-yellow-600 transition duration-300">Count</button>
                    </div>
                    <div className="mt-3 flex items-center justify-between overflow-hidden">
                        <input value={subTotal} onChange={handleSubTotal} className="mr-2 w-full outline-none text-xs h-9 px-2 rounded-md shadow-md focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="number" placeholder="SubTotal in here" />
                        <input value={discount} onChange={handleDiscount} className="mr-2 w-full outline-none text-xs h-9 px-2 rounded-md shadow-md focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="number" placeholder="Enter the discount you get" />
                    </div>
                    <div className="mt-3 flex items-center overflow-hidden">
                        <button onClick={handleDiscountResult} className="mb-2 bg-green-600 px-4 py-1 rounded-md shadow-md shadow-green-600 hover:bg-green-700 text-sm text-white hover:shadow-green-700 transition duration-300">Check</button>
                    </div>
                    <div className="mt-3 flex items-center overflow-hidden">
                        <input value={grandTotal} onChange={handleGrandTotal} className="mr-2 w-full outline-none text-xs h-9 px-2 rounded-md shadow-md focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="number" placeholder="Grand Total in here" />
                        <input value={payment} onChange={handlePayment} className="mr-2 w-full outline-none text-xs h-9 px-2 rounded-md shadow-md focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="number" placeholder="Enter payment amount" />
                    </div>
                    <div className="mt-3">
                        <button onClick={handlePaymentResult} className="bg-blue-600 px-4 py-1 rounded-md shadow-md shadow-blue-600 hover:bg-blue-700 text-sm text-white hover:shadow-blue-700 transition duration-300">Pay Now</button>
                    </div>
                </form>
            </div>
        </div>

        {onDialog.isDialog && <DialogMessage message={onDialog.message} onDialog={getDiscountSuccess} />}
        </>
    )
}