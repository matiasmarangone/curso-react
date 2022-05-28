import { alertTitleClasses } from "@mui/material";
import ItemCount from "./ItemCount";
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";

const { products } = require('../utils/products');


const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);

 

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);


    const onAdd = (quantity) => {
        alert("Has agregado al carrito " + quantity + " items.");
    }


    return(
        <div>
            {greeting}
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;