import React, { useState } from "react";

const AddSmurf = () => {
  const initialFormState = { name: "", age: null, height: "" };
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
    console.log(newSmurf);
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
