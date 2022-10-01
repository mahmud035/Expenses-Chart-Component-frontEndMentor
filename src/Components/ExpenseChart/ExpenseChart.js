import React from 'react';
import './ExpenseChart.css';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const ExpenseChart = () => {
  return (
    <div className="expense-chart-container">
      <h1>Spending - Last 7 days</h1>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart width={430} height={200} data={data}>
            <XAxis dataKey="day" />
            <Tooltip />

            <Bar dataKey="amount" fill="hsl(10, 79%, 65%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;
