import React from 'react';
import Workout from './Workout';

const Program = ({ name, workouts }) => {
  return (
    <div className="program">
      <h2>{name}</h2>
      <div className="workout-list">
        {workouts.map((workout, index) => (
          <Workout key={index} title={workout.title} exercises={workout.exercises} />
        ))}
      </div>
    </div>
  );
};

export default Program;