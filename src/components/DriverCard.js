import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driverCard d-flex flex-row justify-content-center p-4">
      <div>
        <img src={img} alt="driver" />
      </div>
      <div className="align-middle">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
