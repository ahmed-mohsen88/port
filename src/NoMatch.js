import React from "react";
import { NavLink } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h2>NoMatch ERROR 404 cant find this page</h2>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}

export default NoMatch;
