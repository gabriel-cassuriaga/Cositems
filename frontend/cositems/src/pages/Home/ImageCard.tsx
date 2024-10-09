import { Link } from 'react-router-dom'
import './styles/ImageCard.css'

interface CardProps {
    id: string | undefined,
    name: string,
    image: string[],
    price: number

}

export function ImageCard({ id, image, name, price }: CardProps) {
    return (
        <div className="card">

            <div className="card-image">
                <Link to={`/produto/${id}`} >
                    <img src={image[0]}></img>
                </Link>
            </div>

            <div className="card-footer">
                <h2>{name}</h2>
                <p>R${price}</p>
            </div>

        </div>
    )

}