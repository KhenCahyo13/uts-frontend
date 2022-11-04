import React, { useEffect } from "react";

export const ContactUs = () => {
    useEffect(()=>{
        const iframeData=document.getElementById("iframeId")
        const lat=-7.470475;
        const lon=112.440132;
        iframeData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div className="bg-white px-6 py-4 w-full lg:px-10">
            <h1 className="text-center text-gray-700 text-xl font-semibold">Contact Us</h1>
            <hr className="bg-gray-800 my-2 w-[50%] block mx-auto md:w-[30%]" />      
            <div className="mb-6 columns-1 lg:columns-2 lg:gap-10 lg:mt-6">
                <iframe className="rounded-md shadow-md mt-4" id="iframeId" height="370px" width="100%"></iframe>
                <form>
                    <div className="mt-6">
                        <label className="block text-base text-gray-500 font-medium" htmlFor="Name">Name</label>
                        <input className="w-full outline-none bg-gray-100 hover:border hover:border-gray-800 hover:border-opacity-50 transition duration-300 rounded-md shadow-md h-9 px-2 mt-2" type="text" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-base text-gray-500 font-medium" htmlFor="email">Email</label>
                        <input className="w-full outline-none bg-gray-100 hover:border hover:border-gray-800 hover:border-opacity-50 transition duration-300 rounded-md shadow-md h-9 px-2 mt-2" type="email" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-base text-gray-500 font-medium" htmlFor="message">Message</label>
                        <textarea className="w-full outline-none bg-gray-100 hover:border hover:border-gray-800 hover:border-opacity-50 transition duration-300 rounded-md shadow-md py-2 px-2 mt-2" name="message" id="" cols="30" rows="5"></textarea>                        
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-500 px-4 py-1 shadow-md roounded-md shadow-blue-500 hover:bg-blue-600 hover:shadow-blue-600 transition duration-300 text-white mb-4">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}