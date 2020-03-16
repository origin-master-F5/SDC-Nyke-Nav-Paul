import React from 'react';

function Navigation(props){

    return(
        // <ul className="brand-nav">
        //     <span className="left-nav">
        //         <li className="join-us">Join Us</li>
        //         <li className="jordan"><img src="https://img.icons8.com/ios/50/000000/air-jordan.png"/></li>
        //         <li className="hurley"><img src="https://i.ibb.co/0q353xs/Screen-Shot-2020-03-13-at-4-21-13-PM.png"></img></li>
        //         <li className="converse"><img src="https://i.ibb.co/1rfsRJj/Screen-Shot-2020-03-13-at-4-24-28-PM.png"></img></li>
        //     </span>
        //     <span className="right-nav">    
        //         <li className="right-nav-list">
        //         <span id="join">Join/Log In To Nike Member Profile</span>
        //         <span id="help">Help</span>
        //         <span id="cart"><img src="https://i.ibb.co/KFH8Z0T/Screen-Shot-2020-03-13-at-4-04-24-PM.png"></img></span>
        //         <span id="country"><img src="https://i.ibb.co/ZGZGx5H/Screen-Shot-2020-03-13-at-4-08-42-PM.png"></img>United States</span>
        //         </li>
        //     </span>
        // </ul>
        <div>
            <div className='brand-container'>
                <div className='brand-item join-us'>Join Us</div>
                <div className='brand-item jordan'>Jordan</div>
                <div className='brand-item hurley'>Hurley</div>
                <div className='brand-item converse'>Converse</div>
                <div className='brand-item empty'></div>
                <div className='brand-item join'>Join/Log In To Nike Member Profile</div>
                <div className='brand-item help'>Help</div>
                <div className='brand-item cart'>Cart</div>
                <div className='brand-item country'>United States</div>
            </div>

            <div className='site-nav-container'>
                <div className='site-nav-item logo'>Nike</div>
                <div className='site-nav-item logo'>NEW RELEASES</div>
                <div className='site-nav-item logo'>MEN</div>
                <div className='site-nav-item logo'>WOMEN</div>
                <div className='site-nav-item logo'>KIDS</div>
                <div className='site-nav-item logo'>CUSTOMIZE</div>
            </div>
        </div>
    )
}

export default Navigation;

