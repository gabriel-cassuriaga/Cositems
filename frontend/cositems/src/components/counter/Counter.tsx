import { useEffect, useState } from 'react';
import addImg from '../../assets/icons/products/add.png';
import removeImg from '../../assets/icons/products/remove.png';
import './Counter.css'

interface CounterProps {
    initialNumber: number;
    onChange: (value: number) => void; // Adicione esta linha

}

export function Counter({ initialNumber, onChange }: CounterProps) {
    const [count, setCount] = useState(initialNumber);


    useEffect(() => {
        onChange(count);
    }, [count, onChange]);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };
    

    return (
        <div className="counter-section">
            <button className="remove-button" onClick={decrement}>
                <img src={removeImg} alt="Remove" />
            </button>
            <span className="count">{count}</span>
            <button className="add-button" onClick={increment}>
                <img src={addImg} alt="Add" />
            </button>
        </div>
    );
}
