import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <>
            <p>YOUR CART</p>
           
                <a href='/'><button>CONTINUE SHOPPING</button></a>
                {
                    (test.cartList.length > 0)
                    ? <button type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</button>
                    : <p>Your cart is empty</p>
                }
            

                <>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                                <>
                          
                                <img src={item.imgItem} />
                                
                                <span>
                                    <b>Product:</b> {item.nameItem}
                                </span>
                                <button type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                                
                            
                               
                                <>{item.qtyItem} item(s)</>
                                /
                                <>$ {item.costItem} each</>
                              
                                <>$ {test.calcTotalPerItem(item.idItem)} </>
                              </>
                            )
                    }
                </>
                {
                    test.cartList.length > 0 &&
                        <>
                           ORDER SUMMARY
                            <>
                                <p>Subtotal</p>
                                {test.calcSubTotal()}
                            </>
                            <>
                                <p>Taxes</p>
                                {test.calcTaxes()}
                            </>
                            <>
                                <p>Taxes Discount</p>
                                {test.calcTaxes()}
                            </>
                            
                                <p>Total</p>
                                {test.calcTotal()}
                           
                            <button>CHECKOUT NOW</button>
                        </>
                }
   
        </>
    );
}

export default Cart;