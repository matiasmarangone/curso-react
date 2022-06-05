import { Link } from 'react-router-dom';


const Item = ({ id, title, stock, price, pictureUrl }) => {
    return(
        <div>

                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">
                    <strong>$ {price}</strong>
                    {stock} unid. <br />
                    <a href={`/item/${id}`}>Ver detalles</a>
                    </p>
                   
                </div>
                </div>
              
              
               
        </div>
    );
}

export default Item;