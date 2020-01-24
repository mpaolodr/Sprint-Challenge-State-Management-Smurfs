import React from "react";

const Smurf = props => {
  const { item, smurfToEdit, deleteSmurf } = props;

  return (
    <div className="smurf-card">
      <div className="info">
        <h3>{item.name}</h3>
        <h3>{item.age}</h3>
        <h3>{item.height}</h3>
      </div>

      <div className="btn-container">
        <button className="special-btn" onClick={() => smurfToEdit(item)}>
          Edit
        </button>
        <button className="special-btn" onClick={() => deleteSmurf(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Smurf;
