import React from 'react'

const Message = (props) => {
    return (
        props.error ? 
        <div className="w-full flex justify-center text-center bg-white text-red-600 xl:text-lg text-sm font-bold xl:py-12 py-4 z-20 shadow">
            <div className="">An Error Occurred: {props.message ? props.message : "Unspecified Error"}</div>
        </div> : 
        <div className="w-full flex justify-center text-center bg-white text-blue-600 xl:text-lg text-sm font-bold xl:py-12 py-4 z-20 shadow">
            <div className="">Notice: {props.message ? props.message : "Unspecified Error"}</div>
        </div> 
    )
}

export default Message