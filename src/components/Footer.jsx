import logo from '../assets/webapp_logo1.png'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../styles/_Footer.scss'

const ProductList = [
    {id: 1, name: "E-Commerce", link: "/"},
    {id: 2, name: "Website Maintenance", link: "/"},
    {id: 3, name: "Website Analysis", link: "/"},
    {id: 4, name: "Web Hosting", link: "/"},
    {id: 5, name: "Video Production", link: "/"},
    {id: 6, name: "Logo Design", link: "/"}
]

// const ResourcesList = [
//     {id: 1, name: "Blog", link: "/"},
//     {id: 2, name: "Guides & tutorials", link: "/"},
//     {id: 3, name: "Help Center", link: "/"}
// ]

// const CompanyList = [
//     {id: 1, name: "About Us", link: "/"},
//     {id: 2, name: "Careers", link: "/"},
//     {id: 3, name: "Media Kit", link: "/"}
// ]

// const FooterList = [
//     {id: 1, name: "Terms & privacy", link: "/"},
//     {id: 2, name: "Security", link: "/"},
//     {id: 3, name: "Status", link: "/"}
// ]




const Footer = ({img}) => {
    return (
        <footer className="bg-dark position-stick py-5 text-light ">
            <div className="container py-4">
                
                <div className="row px-4">
                    <div className="col-md-3 mb-3 d-flex flex-column">
                        <img src={logo} alt="logo" width="200px" className="footer-logo img-fluid"/>
                        <p><small>Webspace was created for the new ways we live and work. We make a better webspace around the digital world.</small></p>
                    </div>
                    
                    <div className="col-md-3 mb-3 d-flex flex-column align-items-lg-center">
                        <ul className="list-unstyled" >
                        <h6>Our Services</h6>
                        {ProductList.map(product => (
                            <li key={product.id}><Link to={product.link}>{product.name}</Link></li>
                        ))}
                        </ul>
                    </div>
                    {/* <div className="col-md mb-3">
                        <h6>Resources</h6>
                        <ul className="list-unstyled" >
                        {ResourcesList.map(resource => (
                            <li key={resource.id}><Link to={resource.link}>{resource.name}</Link></li>
                        ))}
                        </ul>
                    </div>
                    <div className="col-md mb-3">
                        <h6>Company</h6>
                        <ul className="list-unstyled" >
                        {CompanyList.map(company => (
                            <li key={company.id}><Link to={company.link}>{company.name}</Link></li>
                        ))}
                        </ul>
                    </div> */}
                    <div className="col-md-3 mb-3 d-flex flex-column align-items-lg-center">
                        <ul className="list-unstyled">
                        <h6>Contact Details</h6>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'><FaIcons.FaFacebookF/> Facebook</Link></li>
                            <li><Link to='/'><FaIcons.FaLinkedin/> LinkedIn</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3">
                        <h5>Try It Today</h5>
                        <p><small>Tell us about your needs, we'd love to collaborate with you.</small></p>
                        <Link to='/'><FaIcons.FaEnvelope/> webapps@devservices.com</Link>
                    </div>
                </div>
            </div>
            <hr/>
            
                
            <ul className="d-flex justify-content-center footer-nav list-unstyled mt-5 text-center">
                {/* {FooterList.map(footer => (
                    <li key={footer.id}><Link to={footer.link}>{footer.name}</Link></li>
                ))} */}
                <li className="mx-2"><Link to='/'>Terms & privacy</Link></li>
                <li className="mx-2 footer-copyright">&copy; {new Date().getFullYear()} _Webapps Development Services</li>
            </ul>
            {/* <div className="col-md footer-socials d-flex justify-content-center">
                <Link to="/"><FaIcons.FaFacebookF className="mx-2 icon"/></Link>
                <Link to="/"><FaIcons.FaTwitter className="mx-2 icon"/></Link>
                <Link to="/"><FaIcons.FaLinkedin className="mx-2 icon"/></Link>
            </div> */}
                
            
        </footer>
    )
}

export default Footer