import './App.css';
import Program from './components/Program';

const workoutsData = [
  {
    name: 'Upper Body',
    exercises: [
      { name: 'Bench Press', sets: 3, reps: 10 },
      { name: 'Pull-ups', sets: 3, reps: 'Max' },
      { name: 'Bicep Curls', sets: 2, reps: 12 }
    ]
  },
  {
    name: 'Lower Body',
    exercises: [
      { name: 'Squats', sets: 4, reps: 8 },
      { name: 'Deadlifts', sets: 3, reps: 8 },
      { name: 'Lunges', sets: 3, reps: 10 }
    ]
  }
];


function App() {
  return (
    <div className="app">
      <Program name="Fitness Routine" workouts={workoutsData} />
    </div>
  );
}

export default App;
