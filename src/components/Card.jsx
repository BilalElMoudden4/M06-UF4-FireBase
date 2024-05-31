import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Card.css'; 

const Card = ({ title, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <Link to={link}>Go</Link>
    </div>
  );
};

export default Card;
