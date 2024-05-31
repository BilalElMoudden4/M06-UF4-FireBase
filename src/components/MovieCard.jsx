import React from 'react';

const MovieCard = ({ title, image, rate, direction }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={`${title} poster`} />
      <h2>{title}</h2>
      <p>Direcció: {direction}</p>
      <p>Nota: {rate}</p>
    </div>
  );
};

export default MovieCard;
