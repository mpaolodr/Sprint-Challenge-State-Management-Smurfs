import React from "react";

const Smurf = props => {
  const { item, smurfToEdit, deleteSmurf } = props;

  return (
    <div className="smurf-container">
      <h3>{item.name}</h3>
      <h3>{item.age}</h3>
      <h3>{item.height}</h3>

      <button onClick={() => smurfToEdit(item)}>Edit</button>
      <button onClick={() => deleteSmurf(item.id)}>Delete</button>
    </div>
  );
};

export default Smurf;
