import { alertTitleClasses } from "@mui/material";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
        alert("Has agregado al carrito " + quantity + " items.");
    }

    return(
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;