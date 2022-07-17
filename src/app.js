import "./app.css";
import Title from "./Components/Title";
import Form from "./Components/Form";
import History from "./Components/History";
import React, { useState } from "react";

let expenseshistory = [];

const App = () => {
  const [expensedata, updateexpensedata] = useState(expenseshistory);

  const newexpense = (expe) => {
    updateexpensedata([expe, ...expensedata]);
  };
  return (
    <div className="body">
      <div className="container">
        <Title />
        <h3>New Entry</h3>
        <Form newexpenses={newexpense} />
        <br />
        <h3>History</h3>
        <History item={expensedata} />
      </div>
    </div>
  );
};

export default App;
