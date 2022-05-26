

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return(
        <div>
              
               <img src={pictureUrl} width="200" height="200" />
               <strong>$ {price}</strong>
               {stock} unid.
        </div>
    );
}

export default Item;