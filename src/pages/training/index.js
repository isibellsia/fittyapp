import React, { useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import TrainingCard from "../../components/TrainingCard";
import Layout from "../../components/Layout";
import withAuth from "../../hoc/withAuth";

function TrainingList() {
  const [trainings, setTrainings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredTrainings = trainings.filter(
    (training) =>
      training.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-semibold mb-8 text-center'>Trainings</h1>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Search training'
            className='border rounded p-2 w-full shadow'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filteredTrainings.map((training) => (
            <TrainingCard key={training.id} training={training} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(TrainingList);
