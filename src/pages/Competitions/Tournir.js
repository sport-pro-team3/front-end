import axios from "axios";
import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";

function Tournir({ reglament }) {
  return (
    <div>
      <iframe
        className="reglament__pdf"
        src={reglament.league_table_file}
        title="reglament__pdf"
      ></iframe>
      <Document file={reglament.league_table_file} />
    </div>
  );
}

export default Tournir;
