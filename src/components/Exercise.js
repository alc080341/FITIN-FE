import React from 'react';

const Exercise = ({ name, sets, reps }) => {
  return (
    <div className="exercise">
      <h4>{name}</h4>
      <p>Sets: {sets}</p>
      <p>Reps: {reps}</p>
    </div>
  );
};

export default Exercise;