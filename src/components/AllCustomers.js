import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import '../styles/customer.css'
import Customer from './Customer';

const AllCustomers = () => {

  const data = collection(database, 'customers');

  const [done, setDone] = useState([])

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data() }
    });

    setDone(done)
  }

  getCustomers()

  return (
    <>
        <h1 className="h1 customer-detail-heading">Customers</h1>
        <div className="container customer-data">
          <div className="row">
              {done.map((item, i) => {
                return (
                  <Customer 
                  key={i} 
                  name={item.name} 
                  account_number={item.account_number} 
                  balance={item.balance} />
                )
              })}
          </div>
        </div>
    </>

  )
}

export default AllCustomers