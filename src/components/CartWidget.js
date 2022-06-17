import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const test = useContext(CartContext);

    return(
        <div>
            
            <i className="bi bi-cart"></i>
          
        </div>
    );
}


export default CartWidget;