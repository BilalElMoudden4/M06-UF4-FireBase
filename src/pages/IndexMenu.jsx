import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => {
  return (
    <div>
      <Card title="Llistat de pel·lícules" link="/movies/list" />
      <Card title="Afegir pel·lícula" link="/movies/add" />
    </div>
  );
};

export default IndexMenu;
