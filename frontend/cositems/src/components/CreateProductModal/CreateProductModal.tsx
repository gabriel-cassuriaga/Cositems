import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/products/useProductDataMutate";
import { ProductData } from "../../interfaces/ProductData";
import './CreateProductModal.css';

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </div>
    );
};

export function CreateProductModal({ closeModal }: ModalProps) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [images, setImages] = useState<string[]>([]);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess } = useProductDataMutate();

    const addImage = () => {
        if (image) {
            setImages([...images, image]);
            setImage("");
        }
    };

    const submit = () => {
        const productData: ProductData = {
            name,
            image: images,
            description,
            price
        };
        mutate(productData);
    };

    useEffect(() => {
        if (isSuccess) {
            closeModal();
        }
    }, [isSuccess, closeModal]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button className="close-button" onClick={closeModal}>x</button>
                <h2>Cadastro de Produtos</h2>
                <form className="input-container" onSubmit={e => { e.preventDefault(); submit(); }}>
                    <Input label="Nome" value={name} updateValue={setName} />
                    <div className="input-group">
                        <label>Imagem</label>
                        <input value={image} onChange={event => setImage(event.target.value)} />
                        <button type="button" onClick={addImage}>Adicionar Imagem</button>
                    </div>
                    <Input label="Descrição" value={description} updateValue={setDescription} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <button type="submit" className="btn-secondary">Criar</button>
                </form>
                <div className="image-list">
                    {images.map((img, index) => (
                        <div key={index} className="image-item">
                            <img src={img} alt={`Imagem ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
