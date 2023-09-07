import React from "react";

function TrainingCard({ training }) {
  const { name, category, description } = training;

  // Generate a random color class for course title
  const colorClasses = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    // Add more color classes as needed
  ];
  const randomColorClass =
    colorClasses[Math.floor(Math.random() * colorClasses.length)];

  return (
    <div className='bg-white rounded-lg shadow-md p-4'>
      <div
        className='bg-black w-full h-32 mb-4 flex items-center justify-center rounded-md'
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%" height="100%" fill="black" /%3E%3Ctext x="50%" y="50%" fill="white" font-size="24" font-family="Arial" dominant-baseline="middle" text-anchor="middle"%3E${name.charAt(
            0
          )}%3C/text%3E%3C/svg%3E')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
      <h2 className={`text-xl font-semibold ${randomColorClass}`}>{name}</h2>
      <p className='text-gray-600 mt-2'>Category: {category}</p>
      <p className='text-gray-500 mt-2'>{description}</p>
    </div>
  );
}

export default TrainingCard;
