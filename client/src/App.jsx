import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div id='nav'><Navigation /></div>
                <footer id='footer'><Footer /></footer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
