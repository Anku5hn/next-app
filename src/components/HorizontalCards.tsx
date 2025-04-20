'use client';
import React from 'react'

const HorizontalCards: React.FC = () => {
    const horizontalCardsCSS = `.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}`
    return (
        <>
            {/*Horizontal Cards*/}
            <div className="flex flex-col bg-white m-auto p-auto mt-10">
                <div
                    className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                >
                    <div
                        className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10"
                    >
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                        Dedicated Support
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">24/5</p>
                                    <p className="mt-5">We are here for your guidence and support whenever you need it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                        Trading App
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">5* Rated</p>
                                    <p className="mt-5">Trade on the go with award winning app.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                        Capital
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">$120M+</p>
                                    <p className="mt-5">Join millions who trust TradeX for secure and reliable trading.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                        Access
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">2000+ Assets</p>
                                    <p className="mt-5">Trade any instrument you like, if we are missing something let us know and we will add it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                        Tight Spread
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">From 0</p>
                                    <p className="mt-5">Your trading cost will be low and pridictable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                            High Levrage
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">1:Unlimited</p>
                                    <p className="mt-5">Flexable leveragt to suit any trading style. From low risk to high risk and high rewards strategies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                        Dedicated Support
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">24/5</p>
                                    <p className="mt-5">We are here for your guidence and support whenever you need it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3 cursor-pointer">
                            <div
                                className="group w-64 h-64 max-w-xs flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-[80%] h-[80%] ">
                                    <a href="#" className="text-xl font-semibold relative inline-block">
                                        Dedicated Support
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <p className="text-3xl font-bold mt-5">24/5</p>
                                    <p className="mt-5">We are here for your guidence and support whenever you need it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {horizontalCardsCSS}
            </style>
        </>)
}
export default HorizontalCards;