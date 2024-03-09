import React from 'react'
import { useProduct } from '../../hooks/Product/Product.tsx'
import ProductList from '../ProductList/ProductList.tsx'
import ProductForm,{productFormData} from '../Form/Form.tsx'

//form is now an abstraction for handleAddProductForm
// you can make handleUpdateProductForm if you want
const Product = () => {
    const {products,addProduct} = useProduct()
    const handleAddProductForm = (formData:productFormData) => {
        addProduct(formData);
    };
/****** this code is commented because its just an example of dependency inversion ********/
  //   const handleUpdateProductForm = (formData:productFormData) => {
  //     updateProduct(formData);
  // };

  return (
    <div>
      <ProductList  products={products}/>
      <ProductForm onSubmit={handleAddProductForm} />
    </div>
  )
}

export default Product
