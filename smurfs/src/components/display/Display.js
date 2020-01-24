import React from "react";
import { connect } from "react-redux";

// components
import Smurf from "./Smurf";
import AddSmurf from "./AddSmurf";

// actions
import { fetchData, setAdding } from "../../actions";

const Display = props => {
  const { data, fetchData, setAdding, isAdding } = props;

  return (
    <div className="display-container">
      <button onClick={fetchData}>Grab Smurfs!</button>
      {isAdding ? (
        <AddSmurf />
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
export default connect(mapStateToProps, { fetchData, setAdding })(Display);
