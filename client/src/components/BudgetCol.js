import React from "react";

const BudgetCol = ({ colName, idName }) => {
  return (
    <>
      <div class="row">
        <div class="input-field col s12">
          <input
            id={idName}
            type="number"
            min="0.00"
            max="9999999"
            step="0.01"
            class="validate"
          />
          <label for={idName}>{colName}</label>
        </div>
      </div>
    </>
  );
};

export default BudgetCol;
