import React from 'react';
import exit from '../../dist/assets/exit.png';
import login_logo from '../../dist/assets/logo.png';
import star from '../../dist/assets/star.png';
import filledStar from '../../dist/assets/filled-star.png';


export default class Feedback extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: 'stars',
            stars: '',
            starsSubmitted: false
        }

        this.submitStars = this.submitStars.bind(this);
        
    }

    handleStars(num){
        this.setState({
            stars: num
        })
    }

    submitStars(e){
        e.preventDefault();
        document.getElementById('feedback-modal1').classList.toggle('expand');
        console.log('feedback-modal-->', document.getElementsByClassName('feedback-modal1'));
        this.setState({
            starsSubmitted: true
        })
    }

    render(){
        if(this.props.display === 'feedback' && this.state.display === 'stars'){
            document.body.style.overflow='hidden';
            return(
                <div id='feedback-modal1'>
                    <div className='feedback-exit'><img height='10px' src={exit} onClick={this.handleExit}></img></div>
                    <div className='feedback-logo'><img height="30px" src={login_logo}></img></div><br></br>
                    <div className='feedback-text'>HOW WOULD YOU RATE YOUR EXPERIENCE WITH US?</div>
                    <div className='stars-container'>
                        <div className='star' onClick={this.submitStars} onMouseEnter={(() => this.handleStars(1))} onMouseLeave={(() => this.handleStars(0))}>
                            {this.state.stars >= 1 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onMouseEnter={(() => this.handleStars(2))} onMouseLeave={(() => this.handleStars(0))}>
                            {this.state.stars >= 2 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onMouseEnter={(() => this.handleStars(3))} onMouseLeave={(() => this.handleStars(0))}>
                            {this.state.stars >= 3 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onMouseEnter={(() => this.handleStars(4))} onMouseLeave={(() => this.handleStars(0))}>
                            {this.state.stars >= 4 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onMouseEnter={(() => this.handleStars(5))} onMouseLeave={(() => this.handleStars(0))}>
                            {this.state.stars >= 5 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                    </div>
                    {}
                </div>
            )
        }
        else{
            return null;
        }
    }
}