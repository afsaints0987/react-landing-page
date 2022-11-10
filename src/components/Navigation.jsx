import * as FaIcons from 'react-icons/fa'
import '../styles/_Navigation.scss'
import logo from '../assets/webapp_logo1.png'
import {NavLink} from 'react-router-dom'

const MenuItem = [
    {id: 1,name: "Home", link: '/'},
    {id: 2,name: "Solutions", link: '/#solutions'},
    {id: 3,name: "About", link: '/about'},
    {id: 4,name: "Contact Us", link: '/contact'},
]

const Navigation = () => {
    return (
        <header className="navbar navbar-expand-lg text-light bg-custom position-sticky pt-3">
            <div className="container">
                <img src={logo} id="logo" alt="logo"/>
                <button className="navbar-toggler text-light btn" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><FaIcons.FaBars id="burger-menu"/></button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        {MenuItem.map(menu => (
                        <li className="nav-item" key={menu.id}><NavLink className="nav-link nav-text mx-3" to={menu.link} >{menu.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
           </div> 
        </header>
    )
}

export default Navigation
