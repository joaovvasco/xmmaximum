import './ItemProduct.css'
import type { HTMLAttributes } from "react"

export interface IProduct{
    name: string,
    model?: string
    price?: number
    image: string,
    description?: string,
}

const ItemProduct: React.FC<HTMLAttributes<HTMLDivElement> & IProduct> = ({image, model, name, price, description}) => {
    return <div className="product" key={name}>
                <img src={image} alt={name} />
                <p>{name}</p>
                {model && <p>{model}</p>}
                {price && <p>R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>}
                {description && <p>{description}</p>}
            </div>
}

export default ItemProduct