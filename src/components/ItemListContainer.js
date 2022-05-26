import { alertTitleClasses } from "@mui/material";
import ItemCount from "./ItemCount";
const { products } = require('../utils/products');

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
        alert("Has agregado al carrito " + quantity + " items.");
    }

    const getData = new Promise((resolve,reject)=>{

        let condition = true
        if(condition){
            resolve(console.log('salio bien'))

        }else{
            reject('salio mal')
        }

    })

    return(
        <div>
            {greeting}
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;