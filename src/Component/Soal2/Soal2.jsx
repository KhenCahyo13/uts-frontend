import { useEffect } from "react"
import { useState } from "react"
import { Count } from "./Count"
import { DialogMessage } from "./DialogMessage"
import { Items } from "./Items"
import { PurchasingData } from "./PurchasingData"
import { useForm } from 'react-hook-form';

export const Soal2 = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const [itemType, setItemType] = useState('')
    const [nameItem, setNameItem] = useState('')
    const [totalItem, setTotalItem] = useState('')
    const [items, setItems] = useState([])
    const [dialog, setDialog] = useState({
        message: '',
        onDialog: false
    })

    // Alert Box
    const handleDialog = (message, onDialog) => {
        setDialog({
            message,
            onDialog
        })
    }

    const dialogSuccess = () => {
        handleDialog('', false)
    }

    useEffect(() => {
        saveItemsToLocal()
    }, [items])

    const handleTypeItems = (event) => {
        setItemType(event.target.value)
    }

    const handleNameItems = (event) => {
        setNameItem(event.target.value)
    }

    const handleTotalItems = (event) => {
        setTotalItem(event.target.value)
    }

    const submitItems = () => {
        handleDialog('Your transaction was successful', true)
        setItems([
            ...items, {
                id: Math.floor(Math.random() * 1000),
                itemType: itemType,
                nameItem: nameItem,
                totalItem: totalItem
            }
        ]);
        setItemType('')
        setNameItem('')
        setTotalItem('')
    }

    // Save Items to Local Storage
    const saveItemsToLocal = () => {
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Theme
    const changeTheme = () => {
        const htmlElement = document.querySelector('html')
        const iconTheme = document.getElementById('iconTheme');
        iconTheme.classList.toggle('fa-moon');
        iconTheme.classList.toggle('fa-sun');
        htmlElement.classList.toggle('dark')
    }

    return (
        <>
        <div className="flex justify-between items-center bg-white mx-4 my-6 px-4 py-2 rounded-md shadow-md lg:mx-24 dark:bg-gray-700">
            <h1 className="text-gray-700 text-center font-semibold dark:text-gray-100">UTS FRONTEND QUESTION 2</h1>
            <button onClick={changeTheme} className="bg-blue-500 px-3 py-1 shadow-md rounded-md shadow-blue-500 cursor-pointer hover:bg-blue-600 hover:shadow-blue-600 transition duration-300"><i id="iconTheme" className="fa-solid fa-moon text-white"></i></button>
        </div>

        {/* Jawaban Soal */}
        <div className="bg-white mx-4 my-6 px-4 py-4 rounded-md shadow-md lg:mx-24 lg:px-8 dark:bg-gray-700"
        >
            <h1 className="text-gray-600 text-center font-medium lg:text-xl dark:text-gray-100">Welcome to Thrift Clothing Store</h1>
            <p className="text-gray-400 text-center text-sm dark:text-gray-200">- Shop at low prices and guaranteed goods -</p>
            <div className="bg-gray-100 mx-2 my-4 px-4 py-2 rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-center text-gray-600 font-medium text-lg dark:text-gray-100">Items Purchase Form</h2>
                <hr className="my-2 dark:text-gray-200" />

                {/* Form */}
                <form className="mt-2 lg:py-4">
                    <div className="columns-1 lg:columns-2">
                        <div className="my-2 lg:my-0">
                            <label htmlFor="type" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Types of Items</label>
                            <select value={itemType} onChange={handleTypeItems} name="type" id="type" className=" text-gray-400
                            w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200">
                                <option>- Choose your item type -</option>
                                <option value='Trousers'>Trousers</option>
                                <option value='Shirt'>Shirt</option>
                                <option value='Accessories'>Accessories</option>
                            </select>
                        </div>
                        <div className="my-2 lg:mt-4">
                            <label htmlFor="name" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Name of Items</label>
                            <input {...register('name', {required: 'Please fill in your items name'})} value={nameItem} onChange={handleNameItems} type="text" id="name" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter your items name" />
                            {errors.name && (<small className="text-red-600 text-xs">{errors.name.message}</small>)}
                        </div>
                        <div className="my-2 lg:my-0">
                            <label htmlFor="total" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Total Items</label>
                            <input {...register('total', {required: 'Please fill in your total items!'})} value={totalItem} onChange={handleTotalItems} type="number" id="total" className="w-full outline-none text-sm h-9 px-2 rounded-md shadow-md mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Enter your total items" />
                            {errors.total && (<small className="text-red-600 text-xs">{errors.total.message}</small>)}
                        </div>
                        <div className="my-2 lg:my-0 lg:mt-9">
                        <button onClick={handleSubmit(submitItems)} className="mt-2 bg-green-600 px-4 py-1 rounded-md shadow-md shadow-green-600 hover:bg-green-700 text-sm text-white hover:shadow-green-700 transition duration-300">Buy Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {dialog.onDialog && (<DialogMessage message={dialog.message} onDialog={dialogSuccess} />)}
        <Items items={items} itemType={itemType} nameItem={nameItem} totalItem={totalItem} />
        <Count />
        <PurchasingData handleDialog={handleDialog}  />
        </>
    )
}