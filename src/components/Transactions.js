import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {database } from '../firebaseConfig';
import History from './History';
import '../styles/history.css'

const Transactions = () => {

  const data = collection(database, 'transactions');

  const [done, setDone] = useState([])

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data() }
    });
    setDone(done)
  }

  getCustomers();

  return (
    <>
    <h1 className="h1 transaction-detail-heading">Transactions</h1>
      <div className="container history-data">
          <div className="row">
              {done.map((item, i) => {
                return (
                  <History 
                    key={i+1} from={item.from}
                    to={item.to} 
                    amount={item.Amount_transfered} 
                    status={item.Status ? "true" : "false"}
                    />
                )
              })}
          </div>

        </div>

    </>
  )
}

export default Transactions