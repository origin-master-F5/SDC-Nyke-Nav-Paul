import React from 'react';

export default function Customize({ display }){
    var titles = ['NIKE BY YOU NEW RELEASES',
    'BASKETBALL BY YOU',
    'BLAZER BY YOU'];
    var men = ['Basketball',
    'Lifestyle',
    'Running',
    'Football',
    'Training & Gym',
    'Soccer',
    'Baseball',
    'Skateboarding'];
    var women = ['Lifestyle',
    'Running',
    'Training & Gym',
    'Basketball',
    'Soccer',
    'Softball',
    'Skateboarding'];
    var kids = ['Boys',
    'Girls'];

    if (display === 'customize') {
        return (
            <div className='flyout'>
                <div className='empty-site-nav'>
                </div>
                <div className='left-wing'>
                    {titles.map((title, index) => (
                        <div className='bold-title' key={index}>
                            {title}</div>
                    ))}
                </div>
                <div className='border-div'> </div>
                <div className='center-wing'>
                    <div className='bold-title'>MENS</div>
                    {men.map((title, index) => (
                        <div className='center-wing-title' key={index}>
                            {title}</div>
                    ))}
                </div>
                <div className='center-wing'>
                    <div className='bold-title'>WOMENS</div>
                    {women.map((title, index) => (
                        <div className='center-wing-title' key={index}>
                            {title}</div>
                    ))}
                </div>
                <div className='right-wing'>
                    <div className='bold-title'>AIR MAX BY YOU</div>
                    <div className='bold-title'>NIKE BY YOU KIDS</div>
                    {kids.map((title, index) => (
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

