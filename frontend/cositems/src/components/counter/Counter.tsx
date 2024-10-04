import { useState } from 'react';
import addImg from '../../assets/images/add.png';
import removeImg from '../../assets/images/remove.png';
import './Counter.css'

export function Counter() {
    const [count, setCount] = useState(1);

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
