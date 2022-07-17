import "./Form.css";
import React, { useState } from "react";
import IncomeExpense from "./IncomeExpense";

let incoming = 0;
let outgoing = 0;
let balncing = 0;

const Form = (props) => {
  const [balance, updatebalance] = useState("");
  const [description, updatedescription] = useState("");

  const changeamount = (event) => {
    updatebalance(event.target.value);
  };
  const changedescription = (event) => {
    updatedescription(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    const newdata = {
      text: description,
      Amount: balance,
      sign: "+",
    };
    balncing += parseInt(balance);
    if (Math.abs(parseInt(balance)) == parseInt(balance)) {
      incoming += parseInt(balance);
    } else {
      outgoing += parseInt(balance);
    }
    // console.log(balncing);
    // console.log(outgoing);
    // console.log(incoming);
    props.newexpenses(newdata);
    updatedescription("");
    updatebalance("");
  };

  return (
    <div>
      <IncomeExpense inflow={incoming} outflow={outgoing} balance={balncing} />
      <form id="form" onSubmit={submithandler}>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            id="text"
            value={description}
            onChange={changedescription}
          />
        </div>
        <div className="form-control">
          <label>
            Amount(+/-) <br />
          </label>
          <input
            type="number"
            id="amount"
            value={balance}
            onChange={changeamount}
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
