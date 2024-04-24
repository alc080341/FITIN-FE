import React from 'react';
import Exercise from './Exercise';

const Workout = ({ name, exercises }) => {
  return (
    <div className="workout">
      <h3>{name}</h3>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <Exercise
            key={index}
            name={exercise.name}
            sets={exercise.sets}
            reps={exercise.reps}
          />
        ))}
      </div>
    </div>
  );
};

export default Workout;