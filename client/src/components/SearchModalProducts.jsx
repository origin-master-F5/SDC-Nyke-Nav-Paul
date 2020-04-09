import React from 'react';

export default class SearchModalProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleSelect(product){
        this.props.handleChange('');
        window.location.hash = product.id;//this sets the web address to localhost:3001/#(item id number)
        //i think this is so that when you click it, it redirects you to that clicked item page
    }

    render(){
        return(
            <div className='product-container'>{/*THIS IS THE LEFT SEARCH RESULT*/}
                {this.props.products.map((product) => (
                    <div className='product' onClick={(e) => this.handleSelect(product)}>
                        <img height='120px' src={product.image} className='product-photo'></img>
                        <div className='product-text'>
                            <div className='product-name'>{product.item}</div>
                            <div className='product-type-price'>{product.type}</div>
                            <div className='product-type-price'>{product.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}