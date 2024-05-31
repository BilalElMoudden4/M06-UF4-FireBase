import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const MoviesAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');q

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    await addDoc(collection(db, 'movies'), {
      title, description, direction, image, rate, year, duration
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Títol" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Descripció" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Direcció" value={direction} onChange={(e) => setDirection(e.target.value)} />
      <input type="text" placeholder="Imatge (URL)" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="number" placeholder="Nota (1-5)" value={rate} onChange={(e) => setRate(e.target.value)} />
      <input type="number" placeholder="Any" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="number" placeholder="Durada (min)" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button type="submit">Afegir pel·lícula</button>
    </form>
  );
};

export default MoviesAdd;
