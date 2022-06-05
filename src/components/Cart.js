import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Button } from 'bootstrap';



const Cart = () => {
    const test = useContext(CartContext);

    return (
        <>
           YOUR CART
           
                <Link to='/'>CONTINUE SHOPPING</Link>
                {
                    (test.cartList.length > 0)
                    ? <Button type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</Button>
                    : <p>Your cart is empty</p>
                }
           
           
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <div key={item.idItem}>
                      
                            <img src={item.imgItem} />
                          
                            <span>
                                <b>Product:</b> {item.nameItem}
                            </span>
                            <Button type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</Button>
                          
                      
                    
                           
                            {item.qtyItem} item(s)
                            
                            $ {item.costItem} each
                        
                        </div>
                        )
                        : <div></div>
                    }
       
        </>
    );
}

export default Cart;