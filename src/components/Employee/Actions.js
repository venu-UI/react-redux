import React from "react";

function Actions(props) {
  return (<form style={{ display: "inline" }}>
    <input
      type="button"
      value="Edit"
      onClick={() => {
        props.editHandler(props.id);
      }}
    />
    &nbsp;&nbsp;
    <input
      type="button"
      value="Delete"
      onClick={() => {
        props.deleteHandler(props.id);
      }}
    />
          </form>);
}

export default Actions;
