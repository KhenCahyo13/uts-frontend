import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form';
import { Results } from "./Results";
import { SuccessSubmit } from "./SuccessSubmit";

export function Soal1 () {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [results, setResults] = useState([])
    const [success, setSucces] = useState({
        message: '',
        isSuccess: false
    })

    // Success Message
    const handleSuccessSubmit = (message, isSuccess) => {
        setSucces({
            message,
            isSuccess
        })
    }

    // Save Results To Local Storage
    useEffect(() => {
        saveResultsToLocal();
    },[results])

    const saveResultsToLocal = () => {
        localStorage.setItem('results', JSON.stringify(results))
    }
    
    // Capturing Input Value
    const handleCategory = (event) => {
        setCategory(event.target.value)
    }
    
    const handleType = (event) => {
        setType(event.target.value)
    }

    const handleDate = (event) => {
        setDate(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    // Send Data input to Results
    const sendResult = (event) => {
        handleSuccessSubmit('Terimakasih! Data kamu berhasil dikirimkan', true)
        setResults([
            ...results, {
                id: Math.floor(Math.random() * 1000),
                category: category,
                type: type,
                date: date,
                name: name,
                phone: phone,
                message: message,
                email: email
            }
        ]);
        setCategory('')
        setType('')
        setDate('')
        setName('')
        setPhone('')
        setMessage('')
        setEmail('')
    }

    // Button Reset
    const resetInput = () => {
        setCategory('')
        setType('')
        setDate('')
        setName('')
        setPhone('')
        setMessage('')
        setEmail('')
    }

    // Button Show Results
    const showResults = () => {
        const resultsBox = document.getElementById('tableBox')
        resultsBox.classList.toggle('hidden')
    }

    // When Klik Oke in Popup Success
    const sendSuccess = () => {
        handleSuccessSubmit('', false)
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
            <h1 className="text-gray-700 text-center font-semibold dark:text-gray-100">UTS FRONTEND QUESTION 1</h1>
            <button onClick={changeTheme} className="bg-blue-500 px-3 py-1 shadow-md rounded-md shadow-blue-500 cursor-pointer hover:bg-blue-600 hover:shadow-blue-600 transition duration-300"><i id="iconTheme" className="fa-solid fa-moon text-white"></i></button>
        </div>
        {/* Jawaban Soal */}
        <div className="bg-white mx-4 my-6 px-4 py-4 rounded-md shadow-md lg:mx-24 lg:px-8 dark:bg-gray-700">
            <h1 className="text-gray-600 text-center font-medium lg:text-xl dark:text-gray-100">Welcome to EX Restaurant</h1>
            <p className="text-gray-400 text-center text-sm dark:text-gray-200">- Please Fill In The Form Below To Order -</p>

            {/* Form */}
            <div className="bg-gray-100 mx-2 my-4 px-4 py-2 rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-center text-gray-600 font-medium text-lg dark:text-gray-100">Order Form</h2>
                <hr className="my-2 dark:text-gray-200" />
                <form className="mt-2">
                    <div className="lg:columns-2">
                    {/* Category */}
                        <h2 className="text-gray-600 text-base font-medium dark:text-gray-200">Select the Category</h2>
                        <div value={category} onChange={handleCategory}>
                            <div className="flex items-center mt-2 bg-blue-400 bg-opacity-30 px-2 py-2 rounded-md">
                                <input id="vip" value='VIP' type="radio" className="mr-1 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="vip" className="text-sm text-gray-700 font-medium dark:text-gray-200">VIP</label>
                            </div>
                            <div className="flex items-center mt-2 bg-blue-400 bg-opacity-30 px-2 py-2 rounded-md">
                                <input id="premium" value='Premium' type="radio" className="mr-1 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="premium" className="text-sm text-gray-700 font-medium dark:text-gray-200">Premium</label>
                            </div>
                            <div className="flex items-center mt-2 bg-blue-400 bg-opacity-30 px-2 py-2 rounded-md">
                                <input id="basic" value='Basic' type="radio" className="mr-1 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="basic" className="text-sm text-gray-700 font-medium dark:text-gray-200">Basic</label>
                            </div>
                        </div>

                        {/* Type */}
                        <h2 className="mt-4 text-gray-600 text-base font-medium dark:text-gray-200">Choose Type</h2>
                        <div value={type} onChange={handleType}>
                            <div className="flex items-center mt-2 bg-blue-400 bg-opacity-30 px-2 py-2 rounded-md">
                                <input id="breakfast" value='Breakfast' type="radio" className="mr-1 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="breakfast" className="text-sm text-gray-700 font-medium dark:text-gray-200">Breakfast</label>
                            </div>
                            <div className="flex items-center mt-2 bg-blue-400 bg-opacity-30 px-2 py-2 rounded-md">
                                <input id="lunch" value='Lunch' type="radio" className="mr-1 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="lunch" className="text-sm text-gray-700 font-medium dark:text-gray-200">Lunch</label>
                            </div>
                            <div className="flex items-center mt-2 bg-blue-400 bg-opacity-30 px-2 py-2 rounded-md">
                                <input id="dinner" value='Dinner' type="radio" className="mr-1 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="dinner" className="text-sm text-gray-700 font-medium dark:text-gray-200">Dinner</label>
                            </div>
                        </div>
                    </div>

                    {/* Form Input */}
                    <h2 className="mt-4 text-gray-600 text-base font-medium dark:text-gray-200">Fill the Form</h2>
                    <div className="mt-2">
                        <label htmlFor="date" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Date</label>
                        <input {...register('date', {required: 'Please fill in your date!'})} value={date} onChange={handleDate} className="text-sm w-full outline-none rounded-md bg-white shadow-md px-2 mt-1 h-9 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="date" id="date" />
                        {errors.date && (<small className="text-red-600 text-xs">{errors.date.message}</small>)}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="name" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Name</label>
                        <input {...register('name', {required: 'Please fill in your name! '})} value={name} onChange={handleName} className="text-sm w-full outline-none rounded-md bg-white shadow-md px-2 mt-1 h-9 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="text" id="name" placeholder="Enter your name" />
                        {errors.name && (<small className="text-red-600 text-xs">{errors.name.message}</small>)}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="phone" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Phone</label>
                        <input {...register('phone', {required: 'Please fill in your phone number!', maxLength: {value:12, message: 'Your maximum number is 12'}})} value={phone} onChange={handlePhone} className="text-sm w-full outline-none rounded-md bg-white shadow-md px-2 mt-1 h-9 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="text" id="phone" placeholder="Enter your phone number" />
                        {errors.phone && (<small className="text-red-600 text-xs">{errors.phone.message}</small>)}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="message" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Message</label>
                        <textarea {...register('message', {required: 'Please fill in your message'})} value={message} onChange={handleMessage} className="text-sm w-full outline-none rounded-md bg-white shadow-md px-2 mt-1 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" id="message" cols="30" rows="5" placeholder="Enter your message"></textarea>
                        {errors.message && (<small className="text-red-600 text-xs">{errors.message.message}</small>)}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="email" className="block text-sm text-gray-500 font-medium dark:text-gray-200">Send to Email</label>
                        <input {...register('email', {required: 'Please fill your email!'})} value={email} onChange={handleEmail} className="text-sm w-full outline-none rounded-md bg-white shadow-md px-2 mt-1 h-9 focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" type="email" id="email" placeholder="Enter email" />
                        {errors.email && (<small className="text-red-600 text-xs">{errors.email.message}</small>)}
                    </div>
                    <div className="mt-4 mb-4 flex">
                        <button onClick={handleSubmit(sendResult)} type="submit" className="mr-2 bg-blue-600 px-4 py-1 rounded-md shadow-md shadow-blue-600 text-sm text-white hover:bg-blue-700 hover:shadow-blue-700 transition duration-300">Send</button>
                        <button onClick={resetInput} type="reset" className="bg-red-600 px-4 py-1 rounded-md shadow-md shadow-red-600 hover:bg-red-700 text-sm text-white hover:shadow-red-700 transition duration-300">Reset</button>
                    </div>
                </form>
            </div>
            <button onClick={showResults} className="mt-6 mb-2 flex mx-auto bg-green-600 px-4 py-1 rounded-md shadow-md shadow-green-600 hover:bg-green-700 text-sm text-white hover:shadow-green-700 transition duration-300">Show Results</button>
        </div>

        {success.isSuccess && (<SuccessSubmit message={success.message} onDialog={sendSuccess} />)}

        <Results category={category} type={type} date={date} name={name} phone={phone} message={message} email={email} results={results} />
        </>
    )
}