import React, { useState,FormEvent  } from 'react';
interface ProductFormProps{
    onSubmit: (formData: productFormData) => void;
}
export interface productFormData {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}
const ProductForm: React.FC<ProductFormProps> = ({onSubmit}) => {
  const [formData, setFormData] = useState<productFormData>({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //prevent  page refresh  after submit form data, needed for react fetch and render async api data
    onSubmit(formData);
    // Optionally, clear the form after submission
    setFormData({
      title: '',
      price: 0,
      description: '',
      image: '',
      category: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />

      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />

      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />

      <label>
        Image URL:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <br />

      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
