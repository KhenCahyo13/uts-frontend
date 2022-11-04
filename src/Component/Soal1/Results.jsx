export const Results = ({category, type, date, name, phone, message, email, results}) => {
    return (
        <div id="tableBox" className="bg-white mx-4 my-6 px-4 py-4 rounded-md hidden shadow-md lg:mx-24 lg:px-8 dark:bg-gray-700">
            <h1 className="text-gray-600 text-center font-medium lg:text-xl dark:text-gray-100">Results Table</h1>
            <p className="text-gray-400 text-center text-sm dark:text-gray-300">- The Results of Customer Data in Here -</p>
            
            {/* Table */}
            <div className="bg-gray-100 mx-2 my-4 px-2 py-2 rounded-md shadow-md dark:bg-gray-800">
                <div className="overflow-x-auto relative rounded-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 bg-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-4">Category</th>
                                <th scope="col" className="py-3 px-4">Type</th>
                                <th scope="col" className="py-3 px-4">Date</th>
                                <th scope="col" className="py-3 px-4">Name</th>
                                <th scope="col" className="py-3 px-4">Phone</th>
                                <th scope="col" className="py-3 px-4">Message</th>
                                <th scope="col" className="py-3 px-4">Email</th>
                            </tr>
                        </thead>
                        {
                            results.map(data => {
                                return (
                        <tbody key={data.id}>
                            <tr className="bg-white border">
                                <td className="py-4 px-6">{data.category}</td>
                                <td className="py-4 px-6">{data.type}</td>
                                <td className="py-4 px-6">{data.date}</td>
                                <td className="py-4 px-6">{data.name}</td>
                                <td className="py-4 px-6">{data.phone}</td>
                                <td className="py-4 px-6">{data.message}</td>
                                <td className="py-4 px-6">{data.email}</td>
                            </tr>
                        </tbody>
                            )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}