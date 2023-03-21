import React from 'react'
import Service from './Service'
import '../styles/services.css'
import customerImg from '../images/customers.png';
import transactionsImg from '../images/transactions.png';
import transferImg from '../images/transfer.png'

const Services = () => {
    return (
        <section id="services" className="white-section">
            <div className="container-fluid">
                <div className="row my-services">
                    <Service className="flash-card"
                        image={customerImg}
                        title="Customers"
                        desc="List of customers"
                        link="/allCustomers"
                        btn="Customers"
                    />

                    <Service
                        image={transferImg}
                        title="Transfer Money"
                        desc="Send the money"
                        link="/moneyTransfer" 
                        btn="Transfer"
                    />

                    <Service
                        image={transactionsImg}
                        title="Ledger"
                        desc="History of tranactions"
                        link="/transactions"
                        btn="Transactions"
                    />

                </div>

            </div>

        </section>
    )
}

export default Services