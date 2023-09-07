import React, { useState } from 'react';
import { TeamData } from '../Data'; // Imports TeamData from data.js

const DataInputForm = () => {
  const [formData, setFormData] = useState([...TeamData]); // Initialize formData with existing TeamData

  // Handle input change for a specific team
  const handleInputChange = (index, fieldName, value) => {
    const updatedData = [...formData];
    updatedData[index][fieldName] = value;
    setFormData(updatedData);
  };

  // Handle form submission (you can send this data to your backend or use it as needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This will contain the user-provided data
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((team, index) => (
        <div key={index}>
          <label htmlFor={`x-${index}`}>X Axis for {team.team_name}:</label>
          <input
            type="number"
            id={`x-${index}`}
            value={team.x}
            onChange={(e) => handleInputChange(index, 'x', e.target.value)}
          />
          <label htmlFor={`y-${index}`}>Y Axis for {team.team_name}:</label>
          <input
            type="number"
            id={`y-${index}`}
            value={team.y}
            onChange={(e) => handleInputChange(index, 'y', e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataInputForm;
