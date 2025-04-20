import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
const MobileApp: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100 h-screen flex items-center justify-center">
                <div className="container mx-auto h-full">
                    <div className="flex flex-col md:flex-row h-full items-center justify-between p-8">

                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Download Our Mobile App</h1>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <button className="bg-black text-white rounded-l-full rounded-r-full py-2 px-6 hover:bg-gray-800 cursor-pointer"><ShopIcon/> Play Store</button>
                                <button className="bg-black text-white rounded-l-full rounded-r-full py-2 px-6 hover:bg-gray-800 cursor-pointer"><AppleIcon /> App Store</button>
                            </div>
                        </div>

                        <div className="md:w-1/2 ml-[35vw]">
                            <img src="https://media.cfifinancial.com/website-prod/general/phone_1.webp" alt="Mobile App" className="rounded-lg shadow-md w-auto h-[80vh]" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default MobileApp;