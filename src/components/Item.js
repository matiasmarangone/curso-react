import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <div>
            
            <img src={pictureUrl} height="150px"/>
            <div>
               
                    <strong>$ {price}</strong>
                
                
                   {stock} unid.
              
                    <Link to={`/item/${id}`}>Details</Link>
              
            </div>
        </div>
    );
}

export default Item;