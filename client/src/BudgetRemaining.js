import React from "react";

const BudgetRemaining = ({ remAmt }) => {
  return (
    <ul class="collection">
      <li class="collection-item">
        <div>
          Car Payment
          <div class="secondary-content right-align">$ {remAmt}</div>
        </div>
      </li>
    </ul>
  );
};

export default BudgetRemaining;
