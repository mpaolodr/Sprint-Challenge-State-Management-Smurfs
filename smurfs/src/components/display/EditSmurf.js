import React, { useState } from "react";
import { connect } from "react-redux";

// actions
import { editSmurf } from "../../actions";

const EditSmurf = ({ currentSmurf, editSmurf }) => {
  const [smurf, setSmurf] = useState(currentSmurf);

  // handle changes
  const handleChange = e => {
    const { name, value } = e.target;
    setSmurf({
      ...smurf,
      [name]: value
    });
  };

  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    editSmurf(smurf);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={smurf.name}
        onChange={handleChange}
        placeholder="Enter Smurf Name"
        required
      />

      <input
        type="number"
        name="age"
        value={smurf.age}
        onChange={handleChange}
        placeholder="Enter Smurf Age"
        required
      />

      <input
        type="text"
        name="height"
        value={smurf.height}
        onChange={handleChange}
        placeholder="Enter Smurf Height"
        required
      />

      <button type="submit">Update Smurf</button>
    </form>
  );
};

export default connect(null, { editSmurf })(EditSmurf);
