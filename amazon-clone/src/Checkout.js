import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png' 
                alt='' />

                <div>
                    <h2 className='checkout__title'>Your shopping basket</h2>
                    <Subtotal />
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                </div>
            </div>

            <div className='chcekout__right'>
                <h2>Subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
