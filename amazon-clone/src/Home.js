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
                    <Product title='New Apple iPhone 12 Pro Max (256GB, Silver) [Locked] + Carrier Subscription' 
                    price='2,000.00' 
                    image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000'
                    rating={5}/>
                    <Product title='Super Small Mini Smartphone 3G Dual SIM Mobile Phone 1GB RAM 8GB ROM 5.0MP Quad Core Dual Standby Unlocked Small Phones Kids Phone Pocket 2.5 Inch Android Mini Cellphone (Black)' 
                    price='78.99' 
                    image='https://m.media-amazon.com/images/I/61s0IaMcKtL._AC_SL1500_.jpg'
                    rating={3}/>
                </div>

                <div className='home__row'>
                <Product title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray' 
                    price='1,099.99' 
                    image='https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg'
                    rating={5}/>
                <Product title='Garmin Fenix 6X Sapphire (Gray DLC/Black Band) Power Bundle | with PlayBetter Portable Charger, HD Screen Protectors & Protective Hard Case | Multisport GPS Smartwatch | PacePro, Music | 010-02157-10' 
                    price='814.99' 
                    image='https://m.media-amazon.com/images/I/71MzCqeRNSS._AC_SL1500_.jpg'
                    rating={4}/>
                <Product title='Douglas Harko Black German Shepherd Dog Plush Stuffed Animal' 
                    price='13.99' 
                    image='https://m.media-amazon.com/images/I/61-bBzBi-7S._AC_SL1000_.jpg'
                    rating={4}/>
                </div>

                <div className='home__row'>
                <Product title='SAMSUNG 49 inch Gaming Monitor, Ultrawide Curved Monitor, 240hz 1ms, Quantum Mini LED, G-Sync, Monitor Adjustable Height, HDR 2000, Odyssey Neo G9, G95NA (LS49AG952NNXZA)' 
                    price='2,499.99' 
                    image='https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SL1500_.jpg'
                    rating={0}/>
                </div>
            </div>
        </div>
    )
}

export default Home
