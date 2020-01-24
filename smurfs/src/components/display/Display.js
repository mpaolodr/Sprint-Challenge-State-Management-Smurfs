import React from "react";
import { connect } from "react-redux";

const Display = () => {
  return (
    <div className="display-container">
      <h2>smuef component here</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.smurfReducer.data
  };
};
export default connect(mapStateToProps, {})(Display);
