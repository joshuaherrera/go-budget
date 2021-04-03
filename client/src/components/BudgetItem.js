import React, { useState } from "react";

const BudgetItem = ({ addItem }) => {
  const [item, setItem] = useState({ title: "", amount: 0 });
  return (
    <>
      <div class="input-field col s6">
        <label for="budget">Name</label>
        <input
          name="title"
          id="budget"
          type="text"
          class="validate"
          value={item.title}
          onChange={({ target }) =>
            setItem({ ...item, [target.name]: target.value })
          }
        />
      </div>{" "}
      <div class="input-field col s6">
        <label for="budgetAmt">Amount</label>
        <input
          value={item.amount}
          id="budgetAmt"
          type="number"
          min="0.00"
          max="9999999"
          step="0.01"
          class="validate"
          name="amount"
          onChange={({ target }) =>
            setItem({ ...item, [target.name]: target.value })
          }
        />
      </div>
      <div class="right-align col s12">
        <button type="submit" class="waves-effect waves-light btn-small">
          Add
        </button>
      </div>
    </>
  );
};

export default BudgetItem;
