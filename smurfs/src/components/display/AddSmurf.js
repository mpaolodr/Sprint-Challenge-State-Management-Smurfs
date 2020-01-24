import React, { useState } from "react";

const AddSmurf = ({ addSmurf }) => {
  const initialFormState = { name: "", age: "", height: "" };
  const [newSmurf, setNewSmurf] = useState(initialFormState);

  // change handler
  const handleChange = e => {
    const { name, value } = e.target;

    setNewSmurf({
      ...newSmurf,
      [name]: value
    });
  };

  //  submit handler
  const handleSubmit = e => {
    e.preventDefault();
    // action goes here
    addSmurf({
      name: newSmurf.name,
      age: newSmurf.age,
      height: newSmurf.height
    });
    setNewSmurf(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newSmurf.name}
        onChange={handleChange}
        placeholder="Enter Smurf Name"
        required
      />

      <input
        type="number"
        name="age"
        value={newSmurf.age}
        onChange={handleChange}
        placeholder="Enter Smurf Age"
        required
      />

      <input
        type="text"
        name="height"
        value={newSmurf.height}
        onChange={handleChange}
        placeholder="Enter Smurf Height"
        required
      />
      <button type="submit">Add Smurf!</button>
    </form>
  );
};

export default AddSmurf;
