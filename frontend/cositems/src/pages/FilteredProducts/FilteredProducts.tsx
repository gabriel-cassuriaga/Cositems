import { useState } from 'react';
import './FilteredProducts.css';
import { ProductsCardList } from '../../components/ProductsCardList/ProductsCardList';
import { useParams } from 'react-router-dom';

export function FilteredProducts() {

    const { name } = useParams<{ name: string }>();

    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);
    const [sizeFilter, setSizeFilter] = useState<string | undefined>(undefined);


    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value));
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    };

    const handleSizeFilterChange = (size: string) => {
        setSizeFilter(prevSize => prevSize === size ? undefined : size);
    };

    return (
        <div className='filtered-products-container'>
            <div className='filter-container'>
                <div className="filter-content">
                    <h2>Tamanho</h2>
                    <ul>
                        {['PP', 'P', 'M', 'G', 'GG'].map(size => (
                            <li 
                                key={size} 
                                onClick={() => handleSizeFilterChange(size)}
                                className={sizeFilter === size ? 'selected' : ''}
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                    <h2>Preço</h2>
                    <div>
                        <label>
                            Min:
                            <input type="number" value={minPrice} onChange={handleMinPriceChange} />
                        </label>
                        <label>
                            Max:
                            <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
                        </label>
                    </div>
                </div>
            </div>

            <div className='filtered-products'>
                <ProductsCardList nameFilter={name} minPrice={minPrice} maxPrice={maxPrice} size={sizeFilter}></ProductsCardList>
            </div>
        </div>
    );
}
