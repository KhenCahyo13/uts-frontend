import { useState } from "react"

export const Items = ({items, nameItem, totalItem, itemType}) => {
    const [search, setSearch] = useState('')

    const itemDetails = [
        {
            'id': 1,
            'type': 'Shirt',
            'name': 'Polo',
            'price': 120000
        },
        {
            'id': 2,
            'type': 'Shirt',
            'name': 'Indigo',
            'price': 185000
        },
        {
            'id': 3,
            'type': 'Shirt',
            'name': 'Lawles',
            'price': 240000
        },
        {
            'id': 4,
            'type': 'Trousers',
            'name': 'Nevada',
            'price': 330000
        },
        {
            'id': 5,
            'type': 'Trousers',
            'name': 'Jamaica',
            'price': 290000 
        },
        {
            'id': 6,
            'type': 'Trousers',
            'name': 'Homie',
            'price': 420000
        },
        {
            'id': 7,
            'type': 'Accessories',
            'name': 'Adidas Shoes',
            'price': 450000
        },
        {
            'id': 8,
            'type': 'Accessories',
            'name': 'Handar Shoes',
            'price': 500000
        },
        {
            'id': 9,
            'type': 'Accessories',
            'name': 'Apollo Shoes',
            'price': 220000
        }
    ]

    const showPriceList = () => {
        const priceListBox = document.getElementById('priceListBox')
        priceListBox.classList.toggle('hidden')
    }

    // Search Item
    const searchItem = (event) => {
        setSearch(event.target.value)
    }

    const onSearch = (searchTerm) => {
        setSearch(searchTerm)
        console.log('search', searchTerm)
    }

    return (
        <div className="bg-white mx-4 my-6 px-4 py-4 rounded-md shadow-md lg:mx-24 lg:px-8 dark:bg-gray-700">
            <h1 className="text-gray-600 text-center font-medium lg:text-xl dark:text-gray-100">Items Table</h1>
            <p className="text-gray-400 text-center text-sm dark:text-gray-300">- The items that customers ordered are here -</p>
            
            {/* Table */}
            <div className="bg-gray-100 mx-2 my-4 px-2 py-2 rounded-md shadow-md dark:bg-gray-800">
                <div className="overflow-x-auto relative rounded-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 bg-gray-400 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Item Type</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Item Name</th>
                                <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Total Item</th>
                            </tr>
                        </thead>
                        {
                            items.map(item => {
                                return(
                        <tbody key={item.id}>
                            <tr className="bg-white border dark:bg-gray-600 dark:border-gray-800">
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{item.itemType}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{item.nameItem}</td>
                                <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{item.totalItem}</td>
                            </tr>
                        </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
            <button onClick={showPriceList} className="bg-blue-500 px-2 py-1 flex mx-auto shadow-md shadow-blue-500 rounded-md hover:bg-blue-600 hover:shadow-blue-600 transition duration-300 text-white text-sm">View Price List</button>

            <div id="priceListBox" className="hidden">
                <h1 className="mt-8 text-gray-600 text-center font-medium lg:text-xl dark:text-gray-100">Item Detail Table</h1>
                <p className="text-gray-400 text-center text-sm dark:text-gray-300">- Details of items for sale are here -</p>
                <div className="bg-gray-100 mx-2 my-4 px-2 py-2 rounded-md shadow-md dark:bg-gray-800">
                    <input onChange={searchItem} type="text" className="mt-1 mb-2 w-full outline-none text-xs h-9 px-2 rounded-md shadow-md focus:border focus:border-blue-500 transition duration-300 dark:bg-gray-700 dark:text-gray-200" placeholder="Search items by type" />
                    <button onClick={() => onSearch(search)} className="mb-4 bg-blue-500 px-2 py-1 shadow-md shadow-blue-500 rounded-md hover:bg-blue-600 hover:shadow-blue-600 transition duration-300 text-white text-xs lg:text-sm">Search</button>
                    <div className="overflow-x-auto relative rounded-md">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 bg-gray-400 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Item Type</th>
                                    <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Item Name</th>
                                    <th scope="col" className="py-3 px-4 lg:text-sm dark:text-gray-100">Unit Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    itemDetails.filter(shirt => {
                                        const searchTerm = search.toLowerCase()
                                        const type = shirt.type.toLowerCase()

                                        return searchTerm && type.startsWith(searchTerm)
                                    })
                                    .map(shirt => {
                                        return (
                                <tr key={shirt.id} className="bg-white border dark:bg-gray-600 dark:border-gray-800">
                                    <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{shirt.type}</td>
                                    <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{shirt.name}</td>
                                    <td className="py-4 px-6 lg:text-sm dark:text-gray-100">{shirt.price}</td>
                                </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}