import React from 'react';

export default function Mens({ display }){
    var titles = ["NEW RELEASES",
    "AIR FORCE 1",
    "BEST OF AIR MAX SHOES",
    "STYLE YOUR AIR",
    "SPRING BREAK",
    "SALE: JUST REDUCED",];

    var shoes = ["Lifestyle",
    "Running",
    "Basketball",
    "Jordan",
    "Training & Gym",
    "Soccer",
    "Golf",
    "Track & Field",
    "Skateboarding",
    "Tennis",
    "Baseball",
    "Slides & Sandals",
    "Shoes $100 & Under",
    "All Shoes"];

    var clothing = ["Tops & T-Shirts",
    "Shorts",
    "Hoodies & Sweatshirts",
    "Pants & Tights",
    "Jackets & Vests",
    "Swimwear",
    "Polos",
    "Compression & Baselayer",
    "Yoga",
    "Socks & Underwear",
    "Big & Tall",
    "All Clothing"];

    var accessories = ["Bags & Backpacks",
    "Apple Watch Nike",
    "Hats, Visors & Headbands"];
    
    var collections = ["Golf",
    "Jordan",
    "Soccer",
    "Running",
    "Basketball",
    "Tennis",
    "NikeLab",
    "Training & Gym",
    "Football",
    "Baseball",
    "Nike Sportswear",
    "ACG",
    "Skateboarding",
    "Lacrosse",
    "Fan Gear",
    "Nike FlyEase"];

    if (display === 'men') {
        return (
            <div className='flyout'>
                <div className='empty-site-nav'>
                </div>
                <div className='left-wing m-w-k'>
                    {titles.map((title, index) => (
                        <div className='bold-title' key={index}>
                            {title}</div>
                    ))}
                </div>
                <div className='border-div'> </div>
                <div className='center-wing m-w-k'>
                    <div className='bold-title'>SHOES</div>
                    {shoes.map((title, index) => (
                        <div className='center-wing-title' key={index}>
                            {title}</div>
                    ))}
                </div>
                <div className='center-wing m-w-k'>
                    <div className='bold-title'>CLOTHING</div>
                    {clothing.map((title, index) => (
                        <div className='center-wing-title' key={index}>
                            {title}</div>
                    ))}
                    <div className='bold-title'>ACCESSORIES & EQUIPMENT</div>
                    {accessories.map((title, index) => (
                        <div className='center-wing-title' key={index}>
                            {title}</div>
                    ))}
                </div>
                <div className='right-wing m-w-k'>
                    <div className='bold-title'>SHOP COLLECTION</div>
                    {collections.map((title, index) => (
                        <div className='right-wing-title' key={index}>
                            {title}</div>
                    ))}
                </div>
                <div className='empty-site-nav'>
                </div>
            </div>
        )
    }
    else {
        return null;
    }

}

