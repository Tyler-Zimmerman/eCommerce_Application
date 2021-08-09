import React from 'react'
import './Product.css'

function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{ title }</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>

            <img className='product__' 
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000'
            alt='' 
            />

            <button>Add to Basket</button>

        </div>
    )
}

export default Product
