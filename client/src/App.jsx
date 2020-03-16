import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div id='nav'><Navigation /></div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
