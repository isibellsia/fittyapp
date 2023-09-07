import { useEffect, useState } from "react";
import supabase from "../lib/supabase"; // Adjust the path to match your file structure

function TrainingList() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    async function fetchTrainings() {
      const { data, error } = await supabase.from("training").select("*");

      if (error) {
        console.error("Error fetching trainings:", error.message);
      } else {
        setTrainings(data);
      }
    }

    fetchTrainings();
  }, []);

  return (
    <div>
      <h1>Training List</h1>
      <ul>
        {trainings.map((training) => (
          <li key={training.id}>
            <h2>{training.name}</h2>
            <p>Category: {training.category}</p>
            <p>Description: {training.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainingList;
