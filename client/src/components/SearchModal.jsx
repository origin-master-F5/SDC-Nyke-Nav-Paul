import React from 'react';
import SearchModalProducts from './SearchModalProducts.jsx';
import axios from 'axios';
import exit from '../../dist/assets/exit.png';

export default class SearchModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            selected: '',
            products: [],//list of shoes that are related to hovered name
            productCount: ''
        }
    }

    getSuggestedCollection(){
        var keyword = this.props.keyword;
        // shes getting all the search inputs from the array below
        var collections = [ 'Men Shoe', 'Women Shoe', 'Running', 'Run', 'Air', 'Free', 'Zoom', 'React', 'Flyknit', 'Vomero', 'RN', 'Jordan', 'Free RN', 'Odyssey', 'Air Zoom', 'React A.I.R', 'React Terra', 'Zoom Vomero', 'React Ianga', 'Jordan React', 'Air Zoom Fly', 'Odyssey React', 'React Element', 'Air Zoom Fly 3', 'Zoom Vomero 14', 'Free RN Motion', 'React HyperSet', 'Air Zoom Freak', 'Air Zoom Vomero', 'React Element 55', 'Air Zoom Pegasus', 'React Terra Globe', 'Air Zoom Vomero 14', 'React HyperSet Rise', 'Odyssey React JoyRide', 'Odyssey React JoyRide CC', 'Air Zoom Pegasus FlyEase', 'Light Redwood', 'Pink Quartz', 'White', 'Dark Grey', 'Pure Platinum', 'Anthracite', 'Bright Crimson', 'Black', 'Pink Blast', 'Dune Red', 'Mahogany', 'Team Orange', 'Burgundy Ash', 'Stone Mauve', 'Barely Rose', 'Smokey Mauve', 'Metallic Red Bronze', 'Volt', 'Gum Light Brown', 'Aura', 'Light Armory Blue', 'Mint Foam', 'Blackened Blue', 'Cosmic Clay', 'Blue Hero', 'Sail', 'Barely Grey', 'Fossil', 'Pistachio Frost', 'Iced Lilac', 'Noble Red', 'Atomic Violet', 'Night Maroon', 'Oil Grey', 'Wolf Grey', 'Cool Grey', 'Metallic Platinum', 'Valerian Blue', 'Vivid Purple', 'Plum Chalk', 'Infinite Gold', 'Silver Lilac', 'Metallic Gold', 'True Berry', 'Vast Grey', 'Phantom', 'Barely Volt', 'Spruce Aura', 'Bio Beige', 'Light Orewood Brown', 'Villain Red', 'Hyper Crimson', 'Pumice', 'Celestial Gold', 'Echo Pink', 'Photon Dust', 'Light Thistle', 'Pollen Rise', 'Magic Flamingo', 'University Blue', 'Half Blue', 'Beechtree', 'Cargo Khaki', 'Off Noir', 'Summit White', 'Laser Fuchsia', 'Psychic Purple', 'Thunder Grey', 'Light Carbon', 'Bright Ceramic', 'Yellow Pulse', 'Ocean Cube', 'Metallic Cool Grey', 'Speed Yellow', 'Team Red', 'Cosmic Fuchsia', 'Limelight', 'Hyper Pink', 'Racer Blue', 'Atmosphere Grey', 'Sky Grey', 'Obsidian Mist', 'Particle Grey', 'Lava Glow', 'Light Bone', 'Laser Crimson', 'Platinum Tint', 'Track Red', 'Light Blue'];
        const regex = new RegExp(keyword, 'i')
        //match is set to an array of any collections name that is related to the search input
        var match = collections.filter((collection) => collection.match(regex));
        if(match.length > 0){
            //shortenedMatch is just a shorter array of the match array
            var shortenedMatch = match.splice(0, 6);
            // console.log('hola migo: ', shortenedMatch)
            this.setState({
                suggestions: shortenedMatch,
                selected: shortenedMatch[0]
            }, () => {
                axios.get(`/search/${this.state.selected}`)
                .then((result) => {
                    var shoes = result.data;
                    var shoeCount = result.data.length;
                    var shortenedShoes = [];
                    var shoeNames = [];
        
                    shoes.forEach((shoe) => {
                        if(!shoeNames.includes(shoe.item)){
                            shortenedShoes.push(shoe);
                            shoeNames.push(shoe.item);
                        }
                    })
        
                    if(shortenedShoes.length > 6){
                        shortenedShoes = shortenedShoes.slice(0,6);
                    }

                    this.setState({
                        products: shortenedShoes,
                        productCount: shoeCount
                    })

        })
        .catch((err) => {
            console.log(err);
        })
            })
        }
        else{
            this.props.handleChange('');
            document.body.style.overflow='unset';
        }
    }

    handleHover(suggestion){
        // console.log(suggestion)
        //suggestion is the hovered name on the left side of search result
        axios.get(`/search/${suggestion}`)
        .then((result) => {
            var shoes = result.data;//array of shoe items (object from mongo) related to hovered name (suggestion)
            var shoeCount = result.data.length;
            var shortenedShoes = [];//this will eventually be the array that will populate the left side
            var shoeNames = [];

            shoes.forEach((shoe) => {
                if(!shoeNames.includes(shoe.item)){
                    shortenedShoes.push(shoe);
                    shoeNames.push(shoe.item);

                }
            })
            console.log(shortenedShoes)

            if(shortenedShoes.length > 6){
                shortenedShoes = shortenedShoes.slice(0, 6);
            }
            

            this.setState({
                selected: suggestion,
                products: shortenedShoes,
                productCount: shoeCount
            })

        })
        .catch((err) => {
            console.log(err);
        })
    }

    componentDidUpdate(prevProps){
        if((this.props.keyword !== prevProps.keyword) && (this.props.keyword.length > 1)){
            this.getSuggestedCollection();
        }
    }
    
    render(){
        if((this.props.display === 'search') && (this.props.keyword.length > 1)){
            document.body.style.overflow='hidden';
            return(
                <div className='search-modal'>
                    <div className='result-display'>
                        <div className='search-results-container'>
                            <div id='top-suggestions'>TOP SUGGESTIONS</div>
                            <SearchModalProducts products={this.state.products} productCount={this.state.productCount} handleChange={this.props.handleChange}/>
                            <div id='view-all'>View All ({this.state.productCount})+</div>
                        </div>
                    </div>
                    <div className='match-suggestions'>{/*THIS IS THE RIGHT SEARCH RESULT*/}
                        <div className='search-results-container'>
                            {this.state.suggestions.map((suggestion) => (
                                <div className={this.state.selected===suggestion ? 'suggestion-active' : 'suggestion'} onMouseEnter={() => this.handleHover(suggestion)}>{suggestion}</div>
                                ))}
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return null;
        }
    }
}