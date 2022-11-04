import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Soal1 } from '../Soal1/Soal1'
import { Soal2 } from '../Soal2/Soal2'
import { Soal3 } from './Soal3'

export const Header = () => {
    const showMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu')
        const iconMenu = document.getElementById('iconMenu')

        iconMenu.classList.toggle('fa-xmark')
        iconMenu.classList.toggle('fa-bars')
        mobileMenu.classList.toggle('show-mobileMenu')
    }

    const showDropdown = () => {
        const iconDropdown = document.getElementById('iconDropdown')
        iconDropdown.classList.toggle('fa-caret-up')
        iconDropdown.classList.toggle('fa-caret-down')

        // Show Menu
        const dropdownMenu = document.getElementById('dropdownMenu')
        dropdownMenu.classList.toggle('hidden')
        const dropdownMenuLg = document.getElementById('dropdownMenuLG')
        dropdownMenuLg.classList.toggle('lg:hidden')
    }

    return (
        <>
            <BrowserRouter>
            <header>
                <nav className="bg-blue-500 m-0 px-6 py-2 shadow-md flex justify-between items-center lg:py-4 lg:px-10">
                    <h1 className="text-gray-100 text-2xl font-bold lg:text-3xl">PIONEER</h1>
                    <button className="lg:hidden" onClick={showMenu}><i id="iconMenu" className="fa-solid fa-bars text-gray-100 text-xl hover:text-gray-300 transition duration-300 cursor-pointer"></i></button>
                    <ul className="lg:flex lg:gap-6 lg:text-gray-100 hidden lg:items-center">
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">HOME</li>
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">ABOUT US</li>
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">SERVICES</li>
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">CLIENTS</li>
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">PARTNERS</li>
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">CONTACT US</li>
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">FEED</li>
                        <li className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">NOTIFICATION</li>  
                        <button onClick={showDropdown} className="lg:font-medium lg:hover:text-gray-300 lg:transition duration-300 cursor-pointer">UTS<i className='fa-solid fa-caret-down ml-3 text-sm' id='iconDropdown'></i></button>
                        <ul className='lg:hidden lg:px-2 lg:py-2 lg:absolute lg:top-10 lg:right-4 lg:z-50 lg:bg-blue-500' id='dropdownMenuLG'>
                            <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300 font-light cursor-pointer"><Link to='/'>Landing Page</Link></li>
                            <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300 font-light cursor-pointer"><Link to='/data'>Data Restoran</Link></li>
                            <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300 font-light cursor-pointer"><Link to='/kasir'>Kasir Penjualan</Link></li>
                        </ul>  
                    </ul>
                </nav>
                {/* Mobile Menu */}
                <div id="mobileMenu" className="bg-blue-500 shadow-md px-2 py-2 w-48 min-h-screen fixed -translate-x-96 transition duration-300 z-50 lg:hidden">
                    <ul className="text-gray-100 font-medium">
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">HOME</li>
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">ABOUT US</li>
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">SERVICES</li>
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">CLIENTS</li>
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">PARTNERS</li>
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">CONTACT US</li>
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">FEED</li>
                        <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">NOTIFICATION</li>
                        <button onClick={showDropdown} className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300">UTS<i id='iconDropdown' className='ml-4 fa-solid fa-caret-down'></i></button>
                        <ul className='hidden' id='dropdownMenu'>
                            <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300 font-light cursor-pointer"><Link to='/'>Landing Page</Link></li>
                            <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300 font-light cursor-pointer"><Link to='/data'>Data Restoran</Link></li>
                            <li className="mt-3 text-sm hover:bg-blue-600 hover:text-gray-200 hover:bg-opacity-80 rounded-md px-2 py-1 transition duration-300 font-light cursor-pointer"><Link to='/kasir'>Kasir Penjualan</Link></li>
                        </ul>
                    </ul>
                </div>
            </header>

            <Routes>
                <Route  path='/data' element={<Soal1 />}/>
                <Route  path='/kasir' element={<Soal2 />}/>
                <Route  path='/' element={<Soal3 />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}