import React, { useState } from 'react'
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import '../styles/transfer.css';

const TransferFunds = () => {

  const data = collection(database, 'customers');
  const transactions = collection(database, 'transactions');

  const [done, setDone] = useState([]);
  const [status, setStatus] = useState(true);

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data(), id: item.id }
    });
    setDone(done)
  }
  getCustomers()

  const getAmount = (name, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return arr[i].balance;
      }
    }
  }

  const getId = (name, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return arr[i].id;
      }
    }
  }


  const getValues = async (e) => {
    e.preventDefault();

    var select1 = document.getElementById('customers1');
    var value1 = select1.options[select1.selectedIndex].value;

    var select2 = document.getElementById('customers2');
    var value2 = select2.options[select2.selectedIndex].value;

    let amount = document.getElementById('amt').value;

    if (value1 === value2) {
      alert("Transaction can not be done between same users!");
      setStatus(false);
      return false;
    }
    else {
      // console.log(getAmount(value1, done))

      // Comparing the amount to be transfered and available balance of sender
      if (getAmount(value1, done) < amount) {
        alert("Balance insufficent")
        return false;
      }

      alert("Transactions SUCCESS");
      setStatus(true);

      // Updating Doc
      let user1_id = getId(value1, done);
      let user2_id = getId(value2, done);

      let user1_amount = getAmount(value1, done);
      let user2_amount = getAmount(value2, done);

      let docToUpdate1 = doc(database, 'customers', `${user1_id}`);
      let docToUpdate2 = doc(database, 'customers', `${user2_id}`);

      let balanceOfUser1 = user1_amount - amount;
      let balanceOfUser2 = user2_amount + Number(amount);

      console.log(user1_amount, Number(amount));
      console.log(balanceOfUser1, balanceOfUser2)

      updateDoc(docToUpdate1, {
        balance: balanceOfUser1
      })
        .then(() => {
          alert("Data stored & updated [1] : successfully")
        }).catch((err) => {
          alert("Technical Error! Try Again")
          console.log("ERRR" + err)
        })
        
        updateDoc(docToUpdate2, {
          balance: balanceOfUser2
        })
        .then(() => {
          alert("Data stored & updated [2] : successfully")
        }).catch((err) => {
          alert("Technical Error! Try Again")
          console.log("ERRR" + err)
        })

      // For Records used to display in the transactions section
      addDoc(transactions, {
        from: value1,
        to: value2,
        Amount_transfered: amount,
        Status: status
      })

      // It doesn't refreshes page
      e.preventDefault();
    }
    console.log(value1, value2, amount, status , "hello");
  }

  return (
    <>
      <div className="box">
        <form onSubmit={getValues}>
        <h2>Send Money</h2>
          <select name="customers" id="customers1" placeholder='To'>
            {done.map((item, i) => {
              return (
                <option key={i} id='option1' value={item.name}>{item.name} (Rs.{item.balance})</option>
              )
            })}
          </select>

          <select name="customers" id="customers2" placeholder='From'>
            {done.map((item, i) => {
              return (
                <option key={i} id='option2' value={item.name}>{item.name} (Rs.{item.balance})</option>
              )
            })}
          </select>
          <input type="number" id='amt' className='amount' placeholder='Enter Amount' required />
          <input type="submit" className='submitBtn' value="submit" />
        </form>
      </div>
    </>
  )
}

export default TransferFunds