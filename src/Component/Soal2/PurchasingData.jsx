import { useEffect } from "react"
import { useState } from "react"
import { useForm } from 'react-hook-form';

export const PurchasingData = ({handleDialog}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const [itemName, setItemName] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [purchaseAmount, setPurchaseAmount] = useState('')
    const [total, setTotal] = useState('')
    const [discount, setDiscount] = useState('')
    const [totalPayment, setTotalPayment] = useState('')
    const [purchasingData, setPurchasingData] = useState([])
    
    // Save Data to LocalStorage
    const saveDataToLocal = () => {
        localStorage.setItem('purchasingData', JSON.stringify(purchasingData))
    }

    useEffect(() => {
        saveDataToLocal()
    }, [purchasingData])

    const handleItemName = (event) => {
        setItemName(event.target.value)
    }

    const handleUnitPrice = (event) => {
        setUnitPrice(event.target.value)
    }

    const handlePurchaseAmount = (event) => {
        setPurchaseAmount(event.target.value)
    }

    const handleTotal = (event) => {
        setTotal(event.target.value)
    }

    const handleDiscount = (event) => {
        setDiscount(event.target.value)
    }

    const handleTotalPayment = (event) => {
        setTotalPayment(event.target.value)
    }

    const handlePurchasingData = () => {
        handleDialog('Data entered successfully', true)
        setPurchasingData([...purchasingData, {
            id: Math.floor(Math.random() * 1000),
            itemName: itemName,
            unitPrice: unitPrice,
            purchaseAmount: purchaseAmount,
            total: total,
            discount: discount,
            totalPayment: totalPayment
        }])
        setItemName('')
        setUnitPrice('')
        setPurchaseAmount('')
        setTotal('')
        setDiscount('')
        setTotalPayment('')
    }

    const deleteData = (id) => {
        const filterData = purchasingData.filter((el) => el.id !== id)
        setPurchasingData(filterData)
    }

    return (
        <div className="bg-white mx-4 my-6 px-4 py-4 rounded-md shadow-md lg:mx-24 lg:px-10 dark:bg-gray-700">
            <h1 className="text-gray-600 text-center font-medium lg:text-xl dark:text-gray-100">Purchasing Data</h1>
            <p className="text-gray-400 text-center text-sm dark:text-gray-200">- Add and save purchase data here -</p>

            <div className="bg-gray-100 mx-2 my-4 px-4 py-2 rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-center text-gray-600 font-medium text-lg dark:text-gray-100">Add Purchase Data Form</h2>
                <hr className="mt-2 dark:text-gray-200 lg:mb-4" />

                <form className="lg:columns-2">
                    <div className="mt-2 lg:mt-0">
                        <label htmlFor="name" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Item Name</label>
                        <input {...register('name', {required: 'Please fill in item name'})} value={itemName} onChange={handleItemName} type="text" id="name" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter item name" />
                        {errors.name && (<small className="text-red-600 text-xs">{errors.name.message}</small>)}
                    </div>
                    <div className="mt-2 lg:mt-4">
                        <label htmlFor="unitPrice" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Unit Price</label>
                        <input {...register('unitPrice', {required: 'Please fill in unit price'})} value={unitPrice} onChange={handleUnitPrice} type="number" id="unitPrice" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter unit price" />
                        {errors.unitPrice && (<small className="text-red-600 text-xs">{errors.unitPrice.message}</small>)}
                    </div>
                    <div className="mt-2 lg:mt-4">
                        <label htmlFor="purchase" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Purchase Amount</label>
                        <input {...register('purchase', {required: 'Please fill in purchase amount'})} value={purchaseAmount} onChange={handlePurchaseAmount} type="number" id="purchase" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter purchase amount" />
                        {errors.purchase && (<small className="text-red-600 text-xs">{errors.purchase.message}</small>)}
                    </div>
                    <div className="mt-2 lg:mt-0">
                        <label htmlFor="total" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Total</label>
                        <input {...register('total', {required: 'Please fill in total'})} value={total} onChange={handleTotal} type="number" id="total" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter total" />
                        {errors.total && (<small className="text-red-600 text-xs">{errors.total.message}</small>)}
                    </div>
                    <div className="mt-2 lg:mt-4">
                        <label htmlFor="discount" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Discount</label>
                        <input {...register('discount', {required: 'Please fill in discount'})} value={discount} onChange={handleDiscount} type="number" id="discount" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter discount" />
                        {errors.discount && (<small className="text-red-600 text-xs">{errors.discount.message}</small>)}
                    </div>
                    <div className="mt-2 lg:mt-4">
                        <label htmlFor="payment" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Total Payment</label>
                        <input {...register('payment', {required: 'Please fill in total payment'})} value={totalPayment} onChange={handleTotalPayment} type="number" id="payment" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter total payment" />
                        {errors.payment && (<small className="text-red-600 text-xs">{errors.payment.message}</small>)}
                    </div>
                </form>
                <div className="mb-2 mt-4 flex gap-4">
                    <button onClick={handleSubmit(handlePurchasingData)} className="mb-2 bg-green-600 px-4 py-1 rounded-md shadow-md shadow-green-600 hover:bg-green-700 text-sm text-white hover:shadow-green-700 transition duration-300">Submit</button>
                </div>
            </div>

            {/* Table Purchase Data */}
            <div className="bg-gray-100 mx-2 mb-4 mt-8 px-2 py-2 rounded-md shadow-md dark:bg-gray-800">
                <div className="overflow-x-auto relative rounded-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 bg-gray-400 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Item Name</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Unit Price</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Purchase Amount</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Total</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Discount</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Total Payment</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchasingData.map(data => {
                                    return (
                            <tr key={data.id} className="bg-white border dark:bg-gray-600 dark:border-gray-800">
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{data.itemName}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{data.unitPrice}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{data.purchaseAmount}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{data.total}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{data.discount}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{data.totalPayment}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">
                                    <button onClick={() => deleteData(data.id)} className="px-2 py-1 bg-red-600 shadow-md shadow-red-600 rounded-md hover:bg-red-700 hover:shadow-red-700 transition duration-300"><i className="fa-solid fa-trash text-white"></i></button>
                                </td>
                            </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}