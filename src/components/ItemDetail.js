import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " items.");
        setItemCount(qty);
    }

    return (
        <>
        {
            item
            ? 
            <div>
               <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={item.pictureUrl} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">
                {item.title} <br />
                <strong>$ {item.price}</strong> <br />
                {item.stock} unidades en stock <br />
                {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}>CheckOut</Link>
                }
                </p>
            
            </div>
            </div>

            <div>

          



            </div>




            </div>
            : <p>Cargando..!!</p>
        }
        </>
    );
}

export default ItemDetail;