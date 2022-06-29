import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <div>
            {test.calcItemsQty()}
        </div>
    );
}

export default CartWidget;