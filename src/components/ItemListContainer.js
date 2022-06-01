import { alertTitleClasses } from "@mui/material";
import ItemCount from "./ItemCount";
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const { products } = require('../utils/products');


const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
 

     //componentDidUpdate
     useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);


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