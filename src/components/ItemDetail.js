import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

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
            <>
                <>
                    <>
                        <img src={item.image[0]} />
                    </>
                    <>
                        <>{item.name}</>
                        <>{item.description}</>
                        <>$ {item.cost}</>
                        <>{item.stock} unidades en stock</>
                    </>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <a href='/cart' style={{textDecoration: "none"}}><button variant="contained" color="secondary">CheckOut</button></a>
                    }
                </>
            </>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;