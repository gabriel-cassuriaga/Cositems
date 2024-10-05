import React, { useState } from 'react';
import './styles/Dropdown.css'

export function Dropdown() {
    const [tamanho, setTamanho] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTamanho(e.target.value);
    };

    return (
        <div className="dropdown-container">
            <select id="tamanho" value={tamanho} onChange={handleChange}>
                <option value="">Selecione um tamanho</option>
                <option value="PP">PP</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
            </select>
        </div>

    );
};
