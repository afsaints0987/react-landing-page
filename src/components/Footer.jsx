import logo from '../assets/webapp_logo1.png'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ProductList = [
    {id: 1, name: "Overview", link: "/"},
    {id: 2, name: "Pricing", link: "/"},
    {id: 3, name: "Customer Stories", link: "/"}
]

const ResourcesList = [
    {id: 1, name: "Blog", link: "/"},
    {id: 2, name: "Guides & tutorials", link: "/"},
    {id: 3, name: "Help Center", link: "/"}
]

const CompanyList = [
    {id: 1, name: "About Us", link: "/"},
    {id: 2, name: "Careers", link: "/"},
    {id: 3, name: "Media Kit", link: "/"}
]

const FooterList = [
    {id: 1, name: "Terms & privacy", link: "/"},
    {id: 2, name: "Security", link: "/"},
    {id: 3, name: "Status", link: "/"}
]



const Footer = ({img}) => {
    return (
        <footer className="bg-dark position-stick py-5 text-light ">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-3 mt-3">
                        <img src={logo} alt="logo" width="200px" className="footer-logo"/>
                        <p className="px-4"><small>Webspace was created for the new ways we live and work. We make a better webspace around the digital world.</small></p>
                    </div>

                    <div className="col-md d-flex justify-content-center align-items-center mt-5 mx-auto">
                        <div className="row px-4">
                            <div className="col-md mb-3">
                                <h6>Product</h6>
                                <ul className="list-unstyled" >
                                {ProductList.map(product => (
                                    <li key={product.id}><Link to={product.link}>{product.name}</Link></li>
                                ))}
                                </ul>
                            </div>
                            <div className="col-md mb-3">
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
                            </div>
                            
                            <div className="col-md">
                                <h5>Try It Today</h5>
                                <p><small>Get started for free. Add your whole team as your needs grow.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container mt-5">
                <div className="row">
                    <ul className="col-md footer-nav d-flex list-unstyled justify-content-between">
                        {FooterList.map(footer => (
                            <li key={footer.id}><Link to={footer.link}>{footer.name}</Link></li>
                        ))}
                    </ul>
                    <p className="col-md text-center">&copy; {new Date().getFullYear()} Webspace</p>
                    <div className="col-md footer-socials d-flex justify-content-center">
                        <Link to="/"><FaIcons.FaFacebookF className="mx-2 icon"/></Link>
                        <Link to="/"><FaIcons.FaTwitter className="mx-2 icon"/></Link>
                        <Link to="/"><FaIcons.FaLinkedin className="mx-2 icon"/></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer