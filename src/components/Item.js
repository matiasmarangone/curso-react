import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return(
        <div>
              
               <img src={pictureUrl} width="200" height="200" />
               <strong>$ {price}</strong>
               {stock} unid.
               <a href={`/item/${id}`}>Ver detalles</a>
        </div>
    );
}

export default Item;