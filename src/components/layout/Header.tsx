import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
const Header: React.FC = () => {
    const animationCss: string = `@layer utilities {
        /* Custom animation for dropdown items */
        .dropdown-item {
            @apply transform transition-all duration-200 -translate-x-1 opacity-0;
        }
        .group:hover .dropdown-item {
            @apply translate-x-0 opacity-100;
        }
        /*animation for dropdown items*/
        .dropdown-item:nth-child(1) { transition-delay: 100ms; }
        .dropdown-item:nth-child(2) { transition-delay: 150ms; }
        .dropdown-item:nth-child(3) { transition-delay: 200ms; }
        .dropdown-item:nth-child(4) { transition-delay: 250ms; }
    }`
    return (
        <>
            <style>{animationCss}</style>
            <nav className="shadow-xl fixed top-0 w-full bg-white h-[10vh] z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/*Right side menu*/}
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                {/*LOGO*/}
                                <span className="text-2xl font-bold">Trade<span className="text-indigo-500">X</span></span>
                            </div>
                            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                {/*Dropdown Relative Container*/}
                                <div className="relative group">
                                    {/*Dropdown Button*/}
                                    <button className="px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 cursor-pointer">
                                        <span>Markets</span>
                                        <svg className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {/*Dropdown Absolute Container*/}
                                    <div className="absolute left-0 mt-0 w-56 bg-white text-gray-800 rounded-md shadow-2xl py-1 z-10 
                                origin-top-left scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 
                                transition-all duration-200 transform">
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Crypto</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Shares</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Commodities</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Options</a>
                                    </div>
                                </div>
                                {/*Dropdown Relative Container*/}
                                <div className="relative group">
                                    {/*Dropdown Button*/}
                                    <button className="px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 cursor-pointer">
                                        <span>Trading</span>
                                        <svg className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {/*Dropdown Absolute Container*/}
                                    <div className="absolute left-0 mt-0 w-56 bg-white text-gray-800 rounded-md shadow-2xl py-1 z-10 
                                origin-top-left scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 
                                transition-all duration-200 transform">
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Web Development</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">UI/UX Design</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Digital Marketing</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Consulting</a>
                                    </div>
                                </div>
                                {/*Dropdown Relative Container*/}
                                <div className="relative group">
                                    {/*Dropdown Button*/}
                                    <button className="px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 cursor-pointer">
                                        <span>Company</span>
                                        <svg className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {/*Dropdown Absolute Container*/}
                                    <div className="absolute left-0 mt-0 w-56 bg-white text-gray-800 rounded-md shadow-2xl py-1 z-10 
                                origin-top-left scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 
                                transition-all duration-200 transform">
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Documentation</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Tutorials</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Blog</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Support</a>
                                    </div>
                                </div>
                                {/*Dropdown Relative Container*/}
                                <div className="relative group">
                                    {/*Dropdown Button*/}
                                    <button className="px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 cursor-pointer">
                                        <span>Learn</span>
                                        <svg className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {/*Dropdown Relative Container*/}
                                    <div className="absolute left-0 mt-0 w-56 bg-white text-gray-800 rounded-md shadow-2xl py-1 z-10 
                                origin-top-left scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 
                                transition-all duration-200 transform">
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Documentation</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Tutorials</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Blog</a>
                                        <a href="#" className="dropdown-item block px-4 py-2 hover:bg-indigo-50">Support</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*Left side menu*/}
                        <div className="hidden md:flex items-center space-x-2">
                        <button className="cursor-pointer"><SearchIcon /></button>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">Login</a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-white text-indigo-500 hover:bg-indigo-100 transition-all duration-200">Sign Up</a>
                        </div>
                        {/*Left side mobile*/}
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out">
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;