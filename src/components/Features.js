import React from 'react'
import '../styles/features.css'

const Features = () => {
    return (
        <section id="features" className="white-section">
            <div className="container-fluid">
                <div className="row">

                    <div className="feature-box col-lg-4">
                        <i className="icon fas fa-check-circle fa-4x"></i>
                        <h3 className="feature-heading">Easy to use.</h3>
                        <p>So easy to use that anyone can use it without facing any problem</p>
                    </div>

                    <div className="feature-box col-lg-4">
                        <i className="icon fas fa-thin fa-lock fa-4x"></i>
                        <h3 className="feature-heading">Secure</h3>
                        <p>End-to-End ecryption throught the transaction</p>
                    </div>

                    <div className="feature-box col-lg-4">
                        <i className="icon fa fa-sharp fa-solid fa-clock fa-4x"></i>
                        <h3 className="feature-heading">Flexible</h3>
                        <p>send money to anyone with zero fees at anytime</p>
                    </div>

                </div>

            </div>

        </section>
    )
}


export default Features


