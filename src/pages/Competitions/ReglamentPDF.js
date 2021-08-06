import React from "react";
import { Document } from "react-pdf";

function ReglamentPDF({ reglament }) {
  return (
    <div>
      <Document file={reglament.competitions_regulations_file} />
      Hello
    </div>
  );
}

export default ReglamentPDF;
