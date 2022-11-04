export const AboutUs = () => {
    return (
        <div className="bg-gray-100 px-6 py-4 w-full md:px-14">
            <h1 className="text-center text-gray-700 text-xl font-semibold">About Us</h1>
            <hr className="bg-gray-800 my-2 w-[50%] block mx-auto md:w-[30%]" />
            <div className="mt-4 w-full flex justify-center gap-4 lg:mt-6">
                <img className="rounded-md shadow-md w-64" src="img/4.jpg" alt="About Us" />
                <img className="rounded-md shadow-md w-64 hidden md:block" src="img/5.jpg" alt="About Us" />
                <img className="rounded-md shadow-md w-64 hidden lg:block" src="img/2.jpg" alt="About Us" />
                <img className="rounded-md shadow-md w-64 hidden lg:block" src="img/1.jpg" alt="About Us" />
            </div>
            <div className="mb-6 md:columns-2 md:gap-4 md:mt-6 lg:mt-10">
                <div className="mt-4 md:mt-0">
                    <h2 className="text-gray-800 text-lg font-semibold">Examples About 1</h2>
                    <p className="text-gray-700 mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque adipisci velit nostrum fugiat, ex molestiae deleniti repudiandae reprehenderit tempora cupiditate veritatis omnis quod facere voluptatum amet repellat vero reiciendis quibusdam.</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="text-gray-800 text-lg font-semibold">Examples About 2</h2>
                    <p className="text-gray-700 mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque adipisci velit nostrum fugiat, ex molestiae deleniti repudiandae reprehenderit tempora cupiditate veritatis omnis quod facere voluptatum amet repellat vero reiciendis quibusdam.</p>
                </div>
            </div>
        </div>
    )
}