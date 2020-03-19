import React from 'react';

export default function Overlay({display, handleClick}){
    var handleExit = () => {
        handleClick('');
        console.log('Exited!');
    };

    if(display){
        console.log('Displaying overlay!');
        return(
            <div id='overlay' onClick={handleExit}></div>
        )
    }
    else{
        return null;
    }
}