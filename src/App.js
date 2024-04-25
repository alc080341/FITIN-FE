import { useState, useEffect } from "react";
import "./App.css";
import Program from "./components/Program";

function App() {
  const [workoutsData, updateWorkoutData] = useState([]);
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
       // updateWorkoutData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="app">
      <Program name="Fitness Routine" workouts={workoutsData} />
    </div>
  );
}

export default App;
