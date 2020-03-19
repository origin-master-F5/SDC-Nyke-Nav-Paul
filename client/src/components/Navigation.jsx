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
import LogInModal from './LogInModal.jsx';
import Overlay from './Overlay.jsx';
import Help from './Help.jsx';
import Locations from './Location.jsx';
import NewReleases from './NewReleases';
import Mens from './Mens.jsx';
import Womens from './Womens.jsx';
import Kids from './Kids.jsx';
import Customize from './Customize.jsx';
import Search from './Search.jsx';

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modal: '',
            overlay: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(option){
        if(option === ''){
            this.setState({
                modal: '',
                overlay: false
            })
        }
        else if(option === 'join'){
            this.setState({
                modal: 'join',
                overlay: true
            });
        }
        else{
            this.setState({
                modal: option,
                overlay: false
            })
        }
    }

    render(){
        return(
            <div>
                <Overlay display={this.state.overlay} handleClick={this.handleChange}/>
                <LogInModal display={this.state.modal} handleClick={this.handleChange} />
                <Locations display={this.state.modal} handleClick={this.handleChange} />
                <div className='nav-container'>
                    <div className='brand-container'>
                        <div className='brand-item join-us'>Join Us</div>
                        <div className='brand-item jordan'><img height="15px" className='logo-imgs' id='jordan-logo' src={jordan}></img></div>
                        <div className='brand-item hurley'><img height="10px" className='logo-imgs' src={hurley}></img></div>
                        <div className='brand-item converse'><img height="10px" className='logo-imgs' src={converse}></img></div>
                        <div className='brand-item empty'></div>
                        <div className='brand-item join' onClick={() => this.handleChange('join')}>Join/Log In To Nike Member Profile</div>
                        <ul className='help-list' onMouseEnter={() => this.handleChange('help')} onMouseLeave={() => this.handleChange('')}>
                            <div className='brand-item help'>Help
                                <Help display={this.state.modal} />
                            </div>
                        </ul>
                        <div className='brand-item cart'><img height="15px" className='logo-imgs' src={cart}></img></div>
                        <div className='brand-item country' onClick={() => this.handleChange('locations')}><img height="15px" className='logo-imgs' src={pin}></img> United States</div>
                    </div>

                    <div className='site-nav-container'>
                        <div className='logo'><img id='logo' src={logo}></img></div>
                        <div className='empty-site-nav'></div>
                        <div className='site-nav-item logo' onMouseEnter={() => this.handleChange('new')} onMouseLeave={() => this.handleChange('')}><img className ='s-n-img' src={newReleases}></img>
                            <NewReleases display={this.state.modal} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => this.handleChange('men')} onMouseLeave={() => this.handleChange('')}><img className ='s-n-img' src={men}></img>
                            <Mens display={this.state.modal} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => this.handleChange('women')} onMouseLeave={() => this.handleChange('')}><img className ='s-n-img' src={women}></img>
                            <Womens display={this.state.modal} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => this.handleChange('kids')} onMouseLeave={() => this.handleChange('')}><img className ='s-n-img' src={kids}></img>
                            <Kids display={this.state.modal} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => this.handleChange('customize')} onMouseLeave={() => this.handleChange('')}><img className ='s-n-img' src={customize}></img>
                            <Customize display={this.state.modal} />
                        </div>
                        <div className ='empty-site-nav'></div>
                        <div className='search-wrapper'>
                            <input type="text" className='search-bar' placeholder="Search"></input>
                            <Search display={this.state.modal} />
                        </div>
                    </div>
                </div>
                <div className='announcement-banner'>
                    <div className='statement'>Nike statement on COVID-19.</div>
                    <u>VIEW HERE</u>
                </div>
            </div>
        )
    }
}

export default Navigation;

