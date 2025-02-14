import React from 'react';
import Logo from './img/logo.png'

function Loader(){
    return(
        <>
            <div className="relative flex justify-center items-center h-screen ">
                <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                <img src={Logo}  className="rounded-full h-28 w-28 rounded-full border-4 border-indigo-600 shadow-lg" />
            </div>
        </>
    )
}


export default Loader;