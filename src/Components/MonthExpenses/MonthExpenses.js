import React from 'react';
import './MonthExpenses.css';

const MonthExpenses = () => {
  return (
    <div className="month-expenses-container">
      <div className="divider"></div>
      <div className="expense-container">
        <div className="this-month">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="previous-month">
          <strong>+2.4%</strong>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default MonthExpenses;
