import { useState } from 'react';
import addImg from '../../assets/icons/products/add.png';
import removeImg from '../../assets/icons/products/remove.png';
import './Counter.css'

interface CounterProps {
    initialNumber: number;
}

export function Counter({ initialNumber }: CounterProps) {
    const [count, setCount] = useState(initialNumber);

    const handleAdd = () => setCount(count + 1);
    const handleRemove = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="counter-section">
            <button className="remove-button" onClick={handleRemove}>
                <img src={removeImg} alt="Remove" />
            </button>
            <span className="count">{count}</span>
            <button className="add-button" onClick={handleAdd}>
                <img src={addImg} alt="Add" />
            </button>
        </div>
    );
}
