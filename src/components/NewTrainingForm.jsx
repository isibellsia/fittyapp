import React, { useState, useEffect } from "react";
import supabase from "../lib/supabase";
import { useRouter } from "next/navigation";

function NewTrainingForm({ userId }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "category") setCategory(value);
    else if (name === "description") setDescription(value);

    setIsFormValid(name && category && description);
  };

  useEffect(() => {
    setIsFormValid(!!(name && category && description));
  }, [name, category, description]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const { data, error } = await supabase.from("training").insert([
      {
        name,
        category,
        description,
      },
    ]);

    if (error) {
      console.error("Error creating training:", error.message);
    } else if (data && data.length > 0) {
      const trainingId = data[0].id;
      await supabase.from("user_training").insert([
        {
          user_id: userId,
          training_id: trainingId,
        },
      ]);

      setName("");
      setCategory("");
      setDescription("");
      setIsFormValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='flex flex-col'>
        <label className='font-semibold text-lg'>Name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleInputChange}
          className='p-2 border rounded-md'
        />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold text-lg'>Category:</label>
        <input
          type='text'
          name='category'
          value={category}
          onChange={handleInputChange}
          className='p-2 border rounded-md'
        />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold text-lg'>Description:</label>
        <textarea
          name='description'
          value={description}
          onChange={handleInputChange}
          className='p-2 border rounded-md'
        />
      </div>
      <button
        type='submit'
        disabled={!isFormValid}
        onClick={() => router.push("/training")}
        className={`bg-blue-500 text-white p-2 rounded-md ${
          !isFormValid && "opacity-50 cursor-not-allowed"
        }`}
      >
        Create Training
      </button>
    </form>
  );
}

export default NewTrainingForm;
