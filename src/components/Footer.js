import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div>
            <footer id="footer" className="white-section">
                <div className="container-fluid">
                    <i className="social-icon fab fa-facebook-f"></i>
                    <i className="social-icon fab fa-twitter"></i>
                    <i className="social-icon fab fa-instagram"></i>
                    <i className="social-icon fas fa-envelope"></i>
                    <p className='copyright'>© Copyright Logi Bank</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer