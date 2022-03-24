import React from 'react'

const Loader = () => {
    return (
        <div className="w-full flex justify-center text-center bg-white text-cyan-600 xl:text-lg text-sm font-bold xl:py-12 py-4 z-20 shadow">
            <div className="border-4 border-gray-100 border-t-4 border-t-sky-400 rounded-full animate-spin w-8 h-8"></div>
        </div>
    )
}

export default Loader