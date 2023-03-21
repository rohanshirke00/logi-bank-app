import React from 'react'
import bankLogo from '../images/bank-logo.png'
import '../styles/navbar.css'

function Navbar() {
    return (
        <div>
            <section id="title" className="colored-section">
                <div className="container-fluid">

                    <nav className="navbar navbar-expand-lg navbar-light navbar-bg-dark">
                        <a href="/" className="navbar-brand">
                            <img src={bankLogo} alt="Bank Logo" className='bank-logo' />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="/allCustomers" className="nav-link">Customers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/moneyTransfer" className="nav-link">Transfer</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/transactions" className="nav-link">History</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </section>
        </div>
    )
}

export default Navbar