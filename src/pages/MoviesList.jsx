import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import MovieCard from '../components/MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const db = getFirestore();
      const moviesCollection = collection(db, 'movies');
      const moviesSnapshot = await getDocs(moviesCollection);
      const moviesList = moviesSnapshot.docs.map(doc => doc.data());
      setMovies(moviesList);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          rate={movie.rate}
          direction={movie.direction}
        />
      ))}
    </div>
  );
};

export default MoviesList;
