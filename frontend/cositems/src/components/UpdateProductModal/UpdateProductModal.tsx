import { useEffect, useState } from "react";
import { useProductDataUpdate } from "../../hooks/products/useProductDataUpdate";
import { ProductData } from "../../interfaces/ProductData";
import './UpdateProductModal.css'

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
}

interface ModalProps {
    closeModal(): void;
    product: ProductData;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </div>
    );
};

export function UpdateProductModal({ closeModal, product }: ModalProps) {
    const [name, setName] = useState(product.name);
    const [image, setImage] = useState("");
    const [images, setImages] = useState<string[]>(product.image);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const { mutate, isSuccess } = useProductDataUpdate();

    const addImage = () => {
        if (image) {
            setImages([...images, image]);
            setImage("");
        }
    };

    const submit = () => {
        if (!product.id) {
            console.error("Product ID is undefined");
            return;
        }
    
        const updatedProductData: ProductData = {
            name,
            image: images,
            description,
            price
        };
        mutate({ id: product.id, data: updatedProductData });
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
                <h2>Atualizar Produto</h2>
                <form className="input-container" onSubmit={e => { e.preventDefault(); submit(); }}>
                    <Input label="Nome" value={name} updateValue={setName} />
                    <div className="input-group">
                        <label>Imagem</label>
                        <input value={image} onChange={event => setImage(event.target.value)} />
                        <button type="button" onClick={addImage}>Adicionar Imagem</button>
                    </div>
                    <Input label="Descrição" value={description} updateValue={setDescription} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <button type="submit" className="btn-secondary">Atualizar</button>
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
