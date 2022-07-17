import "./IncomeExpense.css";
import React, { useState } from "react";

const IncomeExpense = (props) => {
  return (
    <div>
      <div className="income-expense">
        <div className="bg-dark">
          <h4>Inflow</h4>
          <p className="income" id="income">
            {props.inflow}
          </p>
        </div>
        <div className="bg-dark">
          <h4>Outflow</h4>
          <p className="expense" id="expense">
            {props.outflow}
          </p>
        </div>
        <div className="bg-dark">
          <h4>Balance</h4>
          <p id="balance">{props.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
