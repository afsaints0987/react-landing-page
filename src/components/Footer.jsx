import logo from '../assets/webspace_logo.png'
import * as FaIcons from 'react-icons/fa'


const Footer = ({img}) => {
    return (
        <footer className="bg-dark position-stick py-5 text-light">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-3 mt-3">
                        <img src={logo} alt="logo" width="200px" className=""/>
                        <p className="px-4"><small>Webspace was created for the new ways we live and work. We make a better webspace around the digital world.</small></p>
                    </div>

                    <div className="col-md d-flex justify-content-center align-items-center mt-5 mx-auto">
                        <div className="row px-4">
                            <div className="col-md mb-3">
                            <h6>Product</h6>
                            <ul className="list-unstyled">
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Customer Stories</li>
                            </ul>
                            </div>
                            <div className="col-md mb-3">
                            <h6>Resources</h6>
                                <ul className="list-unstyled">
                                    <li>Blog</li>
                                    <li>Guides & tutorials</li>
                                    <li>Help Center</li>
                                </ul>
                            </div>
                            <div className="col-md mb-3">
                            <h6>Company</h6>
                                <ul className="list-unstyled">
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Media Kit</li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <h5>Try It Today</h5>
                                <p>Get started for free. Add your whole team as your needs grow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container mt-5">
                <div className="row">
                    <ul className="col-md footer-nav d-flex list-unstyled justify-content-between">
                        <li>English</li>
                        <li>Terms & privacy</li>
                        <li>Security</li>
                        <li>Status</li>
                    </ul>
                    <p className="col-md text-center">&copy; {new Date().getFullYear()} Webspace</p>
                    <div className="col-md footer-socials d-flex justify-content-center">
                        <FaIcons.FaFacebookF className="mx-2"/>
                        <FaIcons.FaTwitter className="mx-2"/>
                        <FaIcons.FaLinkedin className="mx-2"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer