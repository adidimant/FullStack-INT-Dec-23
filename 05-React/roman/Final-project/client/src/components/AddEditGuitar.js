import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuitarContext } from '../context/GuitarContext';
import GuitarForm from './GuitarForm';

const AddEditGuitar = ({ guitar }) => {
  const { addGuitar, updateGuitar } = useContext(GuitarContext);
  const [isEdit, setIsEdit] = useState(!!guitar);
  const navigate = useNavigate();

  const handleSubmit = async (guitarData) => {
    if (isEdit) {
      await updateGuitar(guitarData);
    } else {
      await addGuitar(guitarData);
    }
    navigate('/'); 
  };

  return (
    <div>
      <h1>{isEdit ? 'Edit Guitar' : 'Add Guitar'}</h1>
      <GuitarForm guitar={guitar} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditGuitar;
