import React from "react";
import { connect } from "react-redux";

// components
import Smurf from "./Smurf";
import AddSmurf from "./AddSmurf";

// actions
import { fetchData, setAdding, addSmurf } from "../../actions";

const Display = props => {
  const { data, fetchData, setAdding, isAdding, addSmurf } = props;

  return (
    <div className="display-container">
      <button onClick={fetchData}>Grab Smurfs!</button>
      {isAdding ? (
        <AddSmurf addSmurf={addSmurf} />
      ) : (
        <div>
          {data.map(item => {
            return <Smurf key={item.id} item={item} />;
          })}
          <button onClick={setAdding}>Add New Smurf</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.smurfReducer.data,
    isAdding: state.smurfReducer.isAdding
  };
};
export default connect(mapStateToProps, { fetchData, setAdding, addSmurf })(
  Display
);
