import React from "react";

const BudgetRemaining = ({ listName, remAmt }) => {
  return (
    <ul class="collection">
      <li class="collection-item">
        <div>
          {listName} Remaining
          <div class="secondary-content right-align">$ {remAmt}</div>
        </div>
      </li>
    </ul>
  );
};

export default BudgetRemaining;
