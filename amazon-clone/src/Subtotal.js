import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function Subtotal() {
    return <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({ShoppingBasket.length} items):
                        <strong>{` ${value}`}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />

        <button>Proceed to checkout</button>
    </div>;
}

export default Subtotal

// *npm i react-currency-format* !important