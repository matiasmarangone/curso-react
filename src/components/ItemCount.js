import { useEffect, useState } from 'react';


const ItemCount = ({stock,initial,onAdd}) => {
    const [count,setCount] = useState("0");

    useEffect(() => {
        setCount(initial);
    },[]);

    const decrement = () => {
        if (count >= initial+1) {
            setCount(count - 1);
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

 

    return(
        <div>
            <button type="button" onClick={decrement} className="btn btn-secondary">-</button>
            
            
            
            {count}
         
            <button type="button" onClick={increment} className="btn btn-secondary">+</button>
            
            {
                stock ? <button type="button" onClick={() => onAdd(count)} className="btn btn-primary">Add to Cart</button> : <button type="button" onClick={() => onAdd(count)} class="btn btn-primary" disabled>Add to Cart</button>
            }
            
        </div>
    );
}

export default ItemCount;