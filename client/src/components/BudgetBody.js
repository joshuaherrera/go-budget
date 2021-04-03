import React, { useState } from "react";
import BudgetCol from "../components/BudgetCol";

const BudgetBody = () => {
  const [check, setCheck] = useState(2000);
  const [necAmt, setNecAmt] = useState(1000);
  const [dsAmt, setDsAmt] = useState(400);
  const [wantAmt, setWantAmt] = useState(600);

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
                value={check}
              />
              <label for="checkAmount">Check Amount</label>
            </div>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="col s4">
          <BudgetCol
            budgetAmt={necAmt}
            colName="Necessities"
            idName="needs"
            perc="50"
          />
        </div>
        <div class="col s4">
          <BudgetCol
            budgetAmt={dsAmt}
            colName="Debt / Savings"
            idName="dns"
            perc="20"
          />
        </div>
        <div class="col s4">
          <BudgetCol
            budgetAmt={wantAmt}
            colName="Wants"
            idName="wants"
            perc="30"
          />
        </div>
      </div>
    </>
  );
};

export default BudgetBody;
