
import { Link } from 'react-router-dom'
import './ErrorPage.css'

export function ErrorPage() {
    return (
        <div className="error-page-container">
            <div className="error">
                <h1>404</h1>
                <p>Página Não Encontrada</p>
                <div className="sad-face">:(</div>
                <Link to="/">Voltar para a Home</Link>
            </div>
        </div>
    )
}