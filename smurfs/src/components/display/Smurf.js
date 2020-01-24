import React from "react";

const Smurf = props => {
  const { item } = props;

  return (
    <div className="smurf-container">
      <h3>{item.name}</h3>
      <h3>{item.age}</h3>
      <h3>{item.height}</h3>
    </div>
  );
};

export default Smurf;
