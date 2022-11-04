export const SuccessSubmit = ({message, onDialog}) => {
    return (
        <div className="bg-gray-900 bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden mx-6 justify-center dark:bg-gray-800">
                <img className="rounded-md" src="https://media.giphy.com/media/mJHSkWKziszrkcNJPo/giphy.gif" alt="SuccessGif" />
                <h1 className="font-semibold text-lg text-center dark:text-gray-200">{message}</h1>
                <p className="text-center text-sm text-gray-400"></p>
                <div className="flex justify-center mt-2 mb-4">
                    <button onClick={() => onDialog(false)} className="bg-green-600 shadow-md shadow-green-600 rounded-md px-4 py-1 text-white hover:bg-green-700 hover:shadow-green-700 transition duration-300">Oke</button>
                </div>
            </div>
        </div>
    )
}