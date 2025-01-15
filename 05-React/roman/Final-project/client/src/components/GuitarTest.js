import React, { useContext, useState, useCallback } from 'react';
import { GuitarContext } from '../context/GuitarContext';

const GuitarTest = () => {
  const { guitars, addGuitar, updateGuitar, removeGuitar } = useContext(GuitarContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddGuitar = useCallback(() => {
    addGuitar({ id: Date.now().toString(), name, description });
    setName('');
    setDescription('');
  }, [name, description, addGuitar]);

  return (
    <div>
      <h2>Guitar Context Test</h2>
      <ul>
        {guitars.map((guitar) => (
          <li key={guitar.id}>
            {guitar.name}: {guitar.description}
            <button onClick={() => removeGuitar(guitar.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddGuitar}>Add Guitar</button>
    </div>
  );
};

export default GuitarTest;
