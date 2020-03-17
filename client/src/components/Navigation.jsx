import React from 'react';
import newReleases from '../../dist/assets/newReleases.png';
import men from '../../dist/assets/men.png';
import women from '../../dist/assets/women.png';
import kids from '../../dist/assets/kids.png';
import customize from '../../dist/assets/customize.png';
import logo from '../../dist/assets/logo.png';
import converse from '../../dist/assets/converse.png';
import jordan from '../../dist/assets/jordan.png';
import hurley from '../../dist/assets/hurley.png';
import cart from '../../dist/assets/cart.png';
import pin from '../../dist/assets/pin.png';

function Navigation(props){

    return(
        <div className='nav-container'>
            <div className='brand-container'>
                <div className='brand-item join-us'>Join Us</div>
                <div className='brand-item jordan'><img height="15px" className='logo-imgs' id='jordan-logo' src={jordan}></img></div>
                <div className='brand-item hurley'><img height="10px" className='logo-imgs' src={hurley}></img></div>
                <div className='brand-item converse'><img height="10px" className='logo-imgs' src={converse}></img></div>
                <div className='brand-item empty'></div>
                <div className='brand-item join'>Join/Log In To Nike Member Profile</div>
                <div className='brand-item help'>Help</div>
                <div className='brand-item cart'><img height="15px" className='logo-imgs' src={cart}></img></div>
                <div className='brand-item country'><img height="15px" className='logo-imgs' src={pin}></img> United States</div>
            </div>

            <div className='site-nav-container'>
                <div className='logo'><img id='logo' src={logo}></img></div>
                <div className='empty-site-nav'></div>
                <div className='site-nav-item logo'><img className ='s-n-img' src={newReleases}></img></div>
                <div className='site-nav-item logo'><img className ='s-n-img' src={men}></img></div>
                <div className='site-nav-item logo'><img className ='s-n-img' src={women}></img></div>
                <div className='site-nav-item logo'><img className ='s-n-img' src={kids}></img></div>
                <div className='site-nav-item logo'><img className ='s-n-img' src={customize}></img></div>
                <div className ='empty-site-nav'></div>
                <input type="text" className='search-bar' placeholder="Search"></input>
            </div>

            <div className='announcement-banner'>
                <div className='statement'>Nike statement on COVID-19.</div>
                <u>VIEW HERE</u>
            </div>
        </div>
    )
}

export default Navigation;

