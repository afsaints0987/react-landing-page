import banner from '../assets/banner_foreground.png'
import {Link} from 'react-router-dom'

const Hero = ({ img }) => {
    return (
        <div className="banner vh-100 bg-transparent">
            <div className="container d-sm-flex text-light align-items-center text-center text-sm-start pt-5">
                <div className="col">
                    <h1 className="align-self-center my-4 mw-100 heading header-text" >Generate Leads With <span className="text-success">Attractive Websites.</span></h1>
                    <p>A modern, responsive Website is the best marketing strategy that a company can put in place. Good thing that we can Help you with that!</p>
                    <Link to='/contact' className="btn btn-transparent mt-5 px-4">Get Your Free Proposal &#8594;</Link>
                </div>
                <img src={banner} className="img-fluid col mt-5 w-50 d-none d-sm-block" alt="hero_banner" />
            </div>
        </div>
    )
}

export default Hero
