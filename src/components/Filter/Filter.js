import React from "react";
import { useEffect } from "react";
import { axios } from "axios";

export default function Filter() {
  return (
    <div>
      <div className="filter__result"></div>
      <div className="filter__sport-art">
        Order <select></select>
      </div>
      <div className="filter__sports">
        Filter{" "}
        <select>
          <option value="">All</option>
        </select>
      </div>
    </div>
  );
}
