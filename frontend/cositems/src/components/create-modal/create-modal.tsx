import { useEffect, useState } from "react"
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";
import './create-modal.css'


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}


interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess } = useProductDataMutate();

    const submit = () => {
        const productData: ProductData = {
            name,
            image,
            price
        }
        mutate(productData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
        
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastro de Produtos</h2>

                <form className="input-container">
                    <Input label="name" value={name} updateValue={setName} />
                    <Input label="image" value={image} updateValue={setImage} />
                    <Input label="price" value={price} updateValue={setPrice} />

                </form>
                <button onClick={submit} className="btn-secondary">Criar</button>
            </div>
        </div>
    )
}