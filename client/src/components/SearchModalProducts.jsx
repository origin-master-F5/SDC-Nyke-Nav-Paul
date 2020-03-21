import React from 'react';

export default class SearchModalProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className='product-container'>
                {this.props.products.map((product) => (
                    <div className='product'>
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