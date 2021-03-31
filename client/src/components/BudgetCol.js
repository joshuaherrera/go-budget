import React, { useState } from "react";
import BudgetRemaining from "../BudgetRemaining";
import ItemList from "./ItemList";

const BudgetCol = ({ colName, idName }) => {
  // https://www.youtube.com/watch?v=YK-jXrsK3JU
  // using js with materialize npm
  const [itemsMap, setItemsMap] = useState([
    { name: "Car Payment", amount: 248.57 },
    { name: "Hulu", amount: 1.99 },
  ]);
  const [remAmt, setRemAmt] = useState(799.98);
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
        <ItemList listName={colName} itemsMap={itemsMap} />
        <div class=" col s12">
          <BudgetRemaining remAmt={remAmt} />
        </div>
      </div>
    </>
  );
};

export default BudgetCol;
