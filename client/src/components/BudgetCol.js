import React from "react";

const BudgetCol = ({ colName, idName }) => {
  return (
    <>
      <div class="row">
        <div class="input-field col s12">
          <label for={idName}>{colName}</label>
          <input
            id={idName}
            type="number"
            min="0.00"
            max="9999999"
            step="0.01"
          />
        </div>{" "}
        <div class="input-field col s6">
          <label for="budget">Name</label>
          <input id="budget" type="text" class="validate" />
        </div>{" "}
        <div class="input-field col s6">
          <label for="budgetAmt">Amount</label>
          <input
            id="budgetAmt"
            type="number"
            min="0.00"
            max="9999999"
            step="0.01"
            class="validate"
          />
          <div class="right-align">
            <a class="waves-effect waves-light btn-small" href="#">
              Add
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetCol;
