import React from "react";

const Form = (props) => (
  <form onSubmit={props.getSportArt}>
    <input style={{ color: "#000" }} type="text" name="sportName" />
    <button>search</button>
  </form>
);

export default Form;
