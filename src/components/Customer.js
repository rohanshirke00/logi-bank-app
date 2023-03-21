import React from 'react'
import "../styles/customer.css";

function Customer({i,name, account_number, balance}) {
  return (
    <div key={i+1}  className="cust">
      <h3>A/c No : {account_number}</h3>
      <h3>Name :  {name}</h3>
      <h3>Balance : Rs.{balance}</h3>
    </div>
  )
}

export default Customer