import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item.image
            ? 
            <div>
                <img src={item.image[0]} width="200" height="200" />
                {item.name}
                {item.description}
                $ {item.cost}
                {item.stock} unidades en stock
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;