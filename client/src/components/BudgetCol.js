import React, { useState } from "react";
import BudgetRemaining from "../BudgetRemaining";
import ItemList from "./ItemList";
import BudgetItem from "./BudgetItem";

const BudgetCol = ({ budgetAmt, colName, idName, perc }) => {
  const [itemsMap, setItemsMap] = useState([
    { name: "Car Payment", amount: 248.57 },
    { name: "Hulu", amount: 1.99 },
  ]);
  const [remAmt, setRemAmt] = useState(799.98);

  return (
    <>
      <div class="row">
        <div class="input-field col s12">
          <label for={idName}>
            {colName} ({perc}%)
          </label>
          <input
            id={idName}
            type="number"
            min="0.00"
            max="9999999"
            step="0.01"
            value={budgetAmt}
            disabled
          />
        </div>{" "}
        <BudgetItem />
        <ItemList itemsMap={itemsMap} />
        <div class=" col s12">
          <BudgetRemaining listName={colName} remAmt={remAmt} />
        </div>
      </div>
    </>
  );
};

export default BudgetCol;
