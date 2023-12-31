import { useState } from "react";

export const ItemCount = ({stock, initial}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="item-counter">
            <div className="counter-controls">
                <button className="counter-btn" onClick={decrement}>-</button>
                <h4 className="counter-number">{quantity}</h4>
                <button className="counter-btn" onClick={increment}>+</button>
            </div>
        </div>
    )
}