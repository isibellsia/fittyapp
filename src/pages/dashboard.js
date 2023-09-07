import React from "react";
import Layout from "../components/Layout";
import { useUser } from "../context/UserContext";
import NewTrainingForm from "../components/NewTrainingForm";

function Dashboard() {
  const { user } = useUser();

  return (
    <Layout>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-semibold mb-4'>
          Here you can create a training, {user?.email}!
        </h1>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Create a New Training</h2>
          <NewTrainingForm userId={user?.id} />
          {/* Add other dashboard components and information here */}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
