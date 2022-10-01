import React from 'react';
import './MyBalance.css';
import logo from '../../images/logo.svg';

const MyBalance = () => {
  return (
    <div>
      <div className="my-balance-container">
        <div>
          <p>My balance</p>
          <h1>$921.48</h1>
        </div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default MyBalance;
