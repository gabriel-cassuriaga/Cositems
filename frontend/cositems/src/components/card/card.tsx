import { Link } from 'react-router-dom'
import './card.css'

interface CardProps {
    id: string | undefined,
    name: string,
    image: string,
    price: number


}

export function Card({ id, image, name, price }: CardProps) {
    return (
        <div className="card">

            <div className="card-image">
                <Link to={`/produto/${id}`} >
                    <img src={image}></img>
                </Link>
            </div>

            <div className="card-footer">
                <h2>{name}</h2>
                <p>R${price}</p>
            </div>

        </div>
    )

}