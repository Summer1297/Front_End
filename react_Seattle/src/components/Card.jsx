import React from 'react';
import '../assets/css/Card.css';


const Card = (props) => {
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <img className="card-image" src={props.imageUrl} alt={props.imageAlt} />
      <p className="card-description">{props.description}</p>
    </div>
  );
};

export default Card;
