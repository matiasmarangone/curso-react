import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import FormatNumber from "../utils/FormatNumber";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { Button } from 'bootstrap';

const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = test.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem
    }));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "Leo Messi",
        email: "leo@messi.com",
        phone: "123456789"
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };
  
    console.log(order);
    
    const createOrderInFirestore = async () => {
      // Add a new document with a generated id
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }
  
    createOrderInFirestore()
      .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    test.removeList();
  
  }

    return (
        <div>
            YOUR CART
            <div>
                <a href='/'><Button>CONTINUE SHOPPING</Button></a>
                {
                    (test.cartList.length > 0)
                    ? <Button type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</Button>
                    : <p>Your cart is empty</p>
                }
            </div>
            <div>
            <div>
                <div>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <div key={item.idItem}>
                            <div>
                                <img src={item.imgItem} />
                                
                                <span>
                                    <b>Product:</b> {item.nameItem}
                                </span>
                                <Button type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</Button>
                                
                            </div>
                            <div>
                                
                                {item.qtyItem} item(s)
                                /
                                $ {item.costItem} each
                              
                                $ {test.calcTotalPerItem(item.idItem)} 
                            </div>
                            </div>
                            )
                    }
                </div>
                {
                    test.cartList.length > 0 &&
                        <div>
                            ORDER SUMMARY
                            <div>
                                Subtotal
                                <FormatNumber number={test.calcSubTotal()} />
                            </div>
                            <div>
                                Taxes
                                <FormatNumber number={test.calcTaxes()} />
                            </div>
                            <div>
                                Taxes Discount
                                <FormatNumber number={-test.calcTaxes()} />
                            </div>
                            <div>
                                Total
                                <FormatNumber number={test.calcTotal()} />
                            </div>
                            <Button onClick={createOrder}>CHECKOUT NOW</Button>
                        </div>
                }
            </div>
            </div>
        </div>
    );
}

export default Cart;