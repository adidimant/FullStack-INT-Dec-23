import React, { useState } from 'react';

const GuitarForm = ({ guitar, onSubmit }) => {
  const [name, setName] = useState(guitar ? guitar.name : '');
  const [description, setDescription] = useState(guitar ? guitar.description : '');
  const [categories, setCategories] = useState(guitar ? guitar.categories : []);
  const [image, setImage] = useState(guitar ? guitar.image : '');

  const allCategories = ["Acoustic", "Electric", "Classical", "Bass"]; // Add more categories as needed

  const handleCategoryChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setCategories(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...guitar,
      name,
      description,
      categories,
      image,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <select multiple value={categories} onChange={handleCategoryChange}>
        {allCategories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuitarForm;
