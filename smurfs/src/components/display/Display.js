import React, { useState } from "react";
import { connect } from "react-redux";

// components
import Smurf from "./Smurf";
import AddSmurf from "./AddSmurf";
import EditSmurf from "./EditSmurf";

// actions
import {
  fetchData,
  setAdding,
  addSmurf,
  setEditing,
  deleteSmurf
} from "../../actions";

const Display = props => {
  const {
    data,
    fetchData,
    setAdding,
    isAdding,
    addSmurf,
    isEditing,
    setEditing,
    deleteSmurf
  } = props;

  const [currentSmurf, setCurrentSmurf] = useState({});

  const smurfToEdit = smurf => {
    setCurrentSmurf(smurf);
    setEditing();
  };

  return (
    <div className="display-container">
      <button onClick={fetchData}>Grab Smurfs!</button>
      {isAdding ? (
        <AddSmurf addSmurf={addSmurf} />
      ) : isEditing ? (
        <EditSmurf currentSmurf={currentSmurf} />
      ) : (
        <div>
          {data.map(item => {
            return (
              <Smurf
                key={item.id}
                item={item}
                smurfToEdit={smurfToEdit}
                deleteSmurf={deleteSmurf}
              />
            );
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
    isAdding: state.smurfReducer.isAdding,
    isEditing: state.smurfReducer.isEditing
  };
};

const mapDispatchToProps = {
  fetchData,
  setAdding,
  addSmurf,
  setEditing,
  deleteSmurf
};
export default connect(mapStateToProps, mapDispatchToProps)(Display);
