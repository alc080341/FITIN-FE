import { useState, useEffect } from "react";
import "./App.css";
import Program from "./components/Program";

function App() {
  const [workoutsData, updateWorkoutData] = useState({
    workoutTitle: "none",
    workouts: [],
  });
  useEffect(() => {
    const url = "http://localhost:5275/FitnessProgram";

    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        console.log(response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        updateWorkoutData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="app">
      {workoutsData.workouts.length ? (
        // Render this if data exists
        <Program
          title={workoutsData.programTitle}
          workouts={workoutsData.workouts}
        />
      ) : (
        // Render this if data does not exist
        <div>No data available</div>
      )}
    </div>
  );
}

export default App;
