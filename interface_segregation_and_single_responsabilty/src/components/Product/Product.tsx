import React from "react";
import useProduct from "../../hooks/Product/useProduct.tsx";
import Thumbnail from "../Thumbnail/Thumbnail.tsx";
const Product  = () => {

    const {product} = useProduct();
    
    return (
        <div className="card">
            <Thumbnail image={product.image} alt={product.name} width={200} height={200}/>
            <h1>{product.name}</h1>
            <p>{product.price}$</p>
            <p>in stock: {product.inventory}</p>

        </div>
    )
}

export default Product