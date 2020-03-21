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
            products: [],
            productCount: ''
        }
    }

    getSuggestedCollection(){
        var keyword = this.props.keyword;
        var collections = ['Men\'s Shoe', 'Women\'s Shoe', 'Kids', 'Air', 'Air Max', 'Pegasus', 'Nike', 'Jordan', 'Jordan 3', 'Jordan 3 Retro', 'Adapt', 'Adapt BB', 'Air Force', 'Air Force 1', 'React', 'React Infinity Run', 'Air Zoom', 'Air Max 270', 'Air Huarache', 'Air Max 95', 'Air Huarache Run', 'Air Flight', 'Epic React', 'Epic React Flyknit', 'SB', 'Air Force 1 \'07', 'Air Max 200', 'Air Max 270 React', 'Air Max 90', 'Air VaporMax', 'Jordan 1', 'Free', 'Free X Metcon', 'Metcon', 'Jordan 1 Retro', 'Jordan 1 Retro High', 'Renew', 'Air Zoom Pegasus', 'Air Max 720', '7', 'Zoom', 'Zoom KD12', 'Zoom KD12 Don', 'Blazer', 'Blazer Mid \'77', 'Killshot', 'Killshot 2', 'Air VaporMax Flyknit', 'x Undercover React', 'React Presto', 'Tech Challenge', 'Air Max 1', 'Air Max 1 DNA',  'Air Huarache Run DNA', 'Air Force 1 Low Black History', 'Air Max 95 Black History','Jordan 1 Mid', 'Zoom Pegasus', 'Zoom Pegasus Turbo', 'Air Zoom Pegasus 36', 'Joyride', 'Joyride Dual', 'Jordan 6', 'Air Max Plus', 'Air Force 1 Winter', 'React-Type', 'Freak 1 Soul', 'Air Zoom 85', 'Joyride Run', 'Air Max 270 Special', 'x Undercover Air Max', 'Vaporfly', 'Vaporfly 4%',   'SB Zoom', 'SB Zoom Stefan Janoski', 'Mercurial Vapor', 'Mercurial Vapor 13 Elite', 'SB Zoom Stefan Janoski RM', 'Revolution', 'Drop Type', 'Flex Control', 'Benassi', 'Benassi JDI Fanny', 'Flytrap', 'Air Max Vapor', 'Air Max Vapor Wing', 'Air Max Axis', 'Shox', 'Air Max Motion', 'Air Zoom Vapor', 'Air Force 1 High', 'Free TR', 'Vapor', 'Vapor Untouchable', 'Vapor Untouchable 3', 'Alpha', 'Alpha Huarache', 'Alpha Huarache Elite', 'Alpha Huarache Elite 2', 'Drop-Type', 'Vapor X', 'Vapor X TC', 'Air Ghost', 'Free RN', 'Air Max Alpha', 'Zoom Rize',  'Epic Phantom', 'Epic Phantom React', 'Epic Phantom React A.I.R.', 'Epic Phantom React A.I.R. Cody', 'Air Zoom Vomero', 'Zoom Rival', 'Zoom Rival M', 'Zoom Pegasus Turbo 2', 'Zoom Pegasus Turbo 2 Shield', 'SFB', 'SFB Field', 'SFB Field 2', 'Air Max2'];         
        const regex = new RegExp(keyword, 'i')
        var match = collections.filter((collection) => collection.match(regex));
        if(match.length > 0){
            var shortenedMatch = match.splice(0, 4);
            console.log(shortenedMatch);
            this.setState({
                suggestions: shortenedMatch,
                selected: shortenedMatch[0]
            }, () => {
                axios.get(`/search/${this.state.selected}`)
                .then((result) => {
                var shoes = result.data;
                var shoeCount = result.data.length;
                var shortenedShoes = shoes.splice(0, 6);

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

        axios.get(`/search/${suggestion}`)
        .then((result) => {
            var shoes = result.data;
            var shoeCount = result.data.length;
            var shortenedShoes = shoes.splice(0, 6);

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
                            <SearchModalProducts products={this.state.products} productCount={this.state.productCount} />
                            <div id='view-all'>View All ({this.state.productCount})</div>
                        </div>
                    </div>
                    <div className='match-suggestions'>
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