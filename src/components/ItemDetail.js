import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import { Button } from 'bootstrap';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <div>
                <div>
                    
                    <img src={item.image[0]} />
                    
                    <div>
                        {item.name}
                        {item.description}
                        $ {item.cost}
                        {item.stock} unidades en stock
                    </div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <a href='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></a>
                    }
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;