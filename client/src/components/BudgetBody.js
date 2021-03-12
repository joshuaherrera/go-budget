import React from "react";
import BudgetCol from "../components/BudgetCol";

const BudgetBody = () => {
  return (
    <>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6 push-s3">
              <input
                id="checkAmount"
                type="number"
                min="0.00"
                max="9999999"
                step="0.01"
                class="validate"
              />
              <label for="checkAmount">Check Amount</label>
            </div>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="col s4">
          <BudgetCol colName="Necessities" idName="needs" />
        </div>
        <div class="col s4">
          <BudgetCol colName="Debt / Savings" idName="dns" />
        </div>
        <div class="col s4">
          <BudgetCol colName="Wants" idName="wants" />
        </div>
      </div>
    </>
  );
};

export default BudgetBody;
