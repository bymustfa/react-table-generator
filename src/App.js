import React, { useState } from "react";
import "./styles/main.scss";
import Table from "./components/Table";

export default function App() {
  const [rowNumber, setRowNumber] = useState(2);
  const [columnNumber, setColumnNumber] = useState(2);

  return (
    <div className="content">
      <div className="left">
        <Table rowNumber={rowNumber} columnNumber={columnNumber} />
      </div>
      <div className="right">
        <div className="form-element">
          <label>Row Number</label>
          <input
            defaultValue={rowNumber}
            placeholder="Row Number"
            type="number"
            min="0"
            step="1"
          />
        </div>

        <div className="form-element">
          <label>Column Number</label>
          <input
            defaultValue={columnNumber}
            placeholder="Column Number"
            type="number"
            min="0"
            step="1"
          />
        </div>
      </div>
    </div>
  );
}
