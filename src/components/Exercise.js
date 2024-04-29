import React from 'react';

const Exercise = ({ name, sets, reps, description }) => {
  return (
    <div className="exercise">
      <h4>{name}</h4>
      <p>Desription: {description}</p>
      <p>Sets: {sets ? sets : ""}</p>
      <p>Reps: {reps ? reps : ""}</p>
    </div>
  );
};

export default Exercise;