import { useParams } from "react-router-dom"
import { useProductDataById } from "../../hooks/useProductDataById";

export function ProductDetails() {
    const { id } = useParams();

    // const { data } = useProductDataById(id);

    return(
        <div>
            {id}
        </div>
    )
}