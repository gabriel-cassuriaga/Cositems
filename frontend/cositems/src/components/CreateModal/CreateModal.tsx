import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/products/useProductDataMutate";
import { ProductData } from "../../interfaces/ProductData";
import './create-modal.css';

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
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess } = useProductDataMutate();

    const submit = () => {
        const productData: ProductData = {
            name,
            image: [image],
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
                <h2>Cadastro de Produtos</h2>
                <form className="input-container" onSubmit={e => { e.preventDefault(); submit(); }}>
                    <Input label="Nome" value={name} updateValue={setName} />
                    <Input label="Imagem" value={image} updateValue={setImage} />
                    <Input label="Descrição" value={description} updateValue={setDescription} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <button type="submit" className="btn-secondary">Criar</button>
                </form>
            </div>
        </div>
    );
}
