import HeroSvg from '../images/hero-img.svg'
import '../styles/homePage.css'

function HomePage() {

    return (
        <div className='hero'>
            <div className="row hero-section">
                <div className="col-lg-6">
                    <h1 className="big-heading">
                        send money to anyone overseas
                    </h1>
                    <a href='#features'>
                        <button type="button" className="btn btn-outline-primary btn-lg download-button">
                            Get Started
                        </button>
                    </a>
                </div>
                <div className="col-lg-6">
                    <img className="title-image hero-img" src={HeroSvg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage