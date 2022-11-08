import * as FaIcons from 'react-icons/fa'
import '../styles/_Navigation.scss'
import logo from '../assets/webspace_logo2.png'
const MenuItem = [
    {id: 1,name: "Home", link: '#home'},
    {id: 2,name: "Solutions", link: '#solutions'},
    {id: 3,name: "About", link: '#about'},
    {id: 4,name: "Contact Us", link: '#contacts'},
]

const Navigation = () => {
    return (
        <header className="navbar navbar-expand-lg text-light bg-transparent position-sticky pt-3">
            <div className="container">
                <img src={logo} id="logo" alt="logo"/>
                <button className="navbar-toggler text-light btn" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><FaIcons.FaBars/></button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        {MenuItem.map(menu => (
                        <li className="nav-item" key={menu.id}><a className="nav-link text-light mx-3" href={menu.link}>{menu.name}</a></li> 
                        ))}
                    </ul>
                </div>
           </div> 
        </header>
    )
}

export default Navigation
