export const DialogMessage = ({message, onDialog})=> {
    return (
        <div className="z-50 bg-gray-900 bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden mx-6 px-10 py-2 justify-center dark:bg-gray-800">
                <h1 className="font-semibold text-base text-center dark:text-gray-200">{message}</h1>
                <p className="text-center text-sm text-gray-400"></p>
                <div className="flex justify-center mt-2 mb-2">
                    <button onClick={() => onDialog(false)} className="bg-green-600 text-sm shadow-md shadow-green-600 rounded-md px-4 py-1 text-white hover:bg-green-700 hover:shadow-green-700 transition duration-300">Oke</button>
                </div>
            </div>
        </div>
    )
}