import React from "react";

const BudgetCol = ({ colName, idName }) => {
  // https://www.youtube.com/watch?v=YK-jXrsK3JU
  // using js with materialize npm
  return (
    <>
      <div class="row">
        <div class="input-field col s12">
          <label for={idName}>{colName} (X%)</label>
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
        </div>
        <div class="right-align col s12">
          <a class="waves-effect waves-light btn-small" href="#">
            Add
          </a>
        </div>
        <div class=" col s12">
          <ul class="collection">
            <li class="collection-item">
              <div>
                Car Payment
                <div class="secondary-content right-align">$ 250</div>
              </div>
            </li>
            <li class="collection-item">
              <div>
                Hulu
                <div class="secondary-content right-align">$ 2</div>
              </div>
            </li>
          </ul>
        </div>
        <div class=" col s12">
          <ul class="collection">
            <li class="collection-item">
              <div>
                {colName} Remaining
                <div class="secondary-content right-align">$ 700</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BudgetCol;
