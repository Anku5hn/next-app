import React from 'react'

const Countries: React.FC = () =>{
    return(
        <>
        <div className="bg-indigo-500 flex items-center justify-center h-[10%] w-full">
    <div className="flex w-full justify-center items-center">
        <div className="mr-4 py-2">
            <div className="text-2xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-500">14 Licenses</div>
            <div className="text-2xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-500">
                65 Countries
            </div>
        </div>

        <div className="mx-4 h-10 bg-gradient-to-b from-yellow-400 to-yellow-500 w-1"></div>

        <div className="ml-4 text-white py-2 text-2xl font-bold tracking-wider">
            Dubai London Sydney Tokyo Chicago Limassol Singapore Seychelles Tallinn Prague
        </div>
    </div>
</div>
        </>
    )
}
export default Countries;