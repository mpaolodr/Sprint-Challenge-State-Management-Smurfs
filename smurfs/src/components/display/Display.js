import React from "react";
import { connect } from "react-redux";

// components
import Smurf from "./Smurf";

// actions
import { fetchData } from "../../actions";

const Display = props => {
  const { data, fetchData } = props;

  return (
    <div className="display-container">
      <button onClick={fetchData}>Grab Smurfs!</button>
      {data.map(item => {
        return <Smurf key={item.id} item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.smurfReducer.data
  };
};
export default connect(mapStateToProps, { fetchData })(Display);
