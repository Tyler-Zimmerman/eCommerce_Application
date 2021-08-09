import React from 'react'
import './Home.css';
import Product from './Product';
import './Product.css';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' 
                src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzkzZDYxNTkt/NzkzZDYxNTkt-OWQwMzQwNDUt-w3000._CB663569411_.jpg' 
                alt='' 
                />

                <div className='home__row'>
                    <Product title='Iphone 12' 
                    price='2,000.00' 
                    image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000'
                    rating={5}/>
                    <Product />
                </div>

                <div className='home__row'>
                    
                </div>

                <div className='home__row'>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
