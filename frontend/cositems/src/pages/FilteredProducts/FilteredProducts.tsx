import { useState } from 'react';
import { useProductData } from '../../hooks/useProductData';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import './FilteredProducts.css';

export function FilteredProducts() {
    const { data } = useProductData();

    // Variáveis de estado para preços mínimos e máximos
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);

    // Funções para atualizar os preços mínimo e máximo
    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value));
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    };

    return (
        <div className='filtered-products-container'>
            <div className='filter-container'>
                <div className="filter-content">
                    <h2>Tamanho</h2>
                    <ul>
                        {['PP', 'P', 'M', 'G', 'GG'].map(size => (
                            <li key={size} onClick={() => console.log(size)}>{size}</li>
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
                {data?.map(productData => (
                    <ImageCard
                        key={productData.id}
                        id={productData.id}
                        image={productData.image}
                        name={productData.name}
                        price={productData.price}
                    />
                ))}
            </div>
        </div>
    );
}
