import React from 'react';
import Exercise from './Exercise';

const Workout = ({ title, exercises }) => {
  return (
    <div className="workout">
      <h3>{title}</h3>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <Exercise
            key={index}
            name={exercise.name}
            description = {exercise.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Workout;