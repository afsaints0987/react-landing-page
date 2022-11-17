import {motion} from 'framer-motion'
import * as FaIcons from 'react-icons/fa'
import '../styles/_About.scss'
import profile1 from '../assets/mark-pic.png'
import profile2 from '../assets/aaron-pic.png'
import profile3 from '../assets/sea-pic.png'

const ProfileList = [
    {   
        id: 1, 
        name: "Mark Ferolino", 
        title: "Full Stack Developer",
        quotes: "No matter how good the team or how efficient the methodology, if we’re not solving the right problem, the project fails. – Woody Williams",
        img: `${profile1}`
    },
    {   
        id: 2, 
        name: "Hosea Corpuz", 
        title: "UI/UX Developer",
        quotes: "Alone we can do so little; together we can do so much. – Helen Keller", 
        img: `${profile3}`
    },
    {
        id: 3, 
        name: "Aaron Santos", 
        title: "Full Stack Developer" ,
        quotes: "When you need to innovate, you need collaboration. – Marissa Mayer",
        img: `${profile2}`
    }
]

const About = ({img}) => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <section className="bg-white text-dark py-5 text-center">
            <div className="container">
                <div className="container w-75 py-5">
                    <div className="d-flex flex-column text-custom">
                        <h2>About Webapps</h2>
                        <h4>We are promising developers that reclassifies digitalisation and creates wonderful web experiences.</h4>
                        <p className="lead"><small>Webapps Development Services envisions enabling local businesses by making significant experiences for them to pro in their areas of skill. We take pride in having effective affiliations over Philippines while embracing innovative practices and cultivating inventiveness to do what it takes to provide the finest.</small></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-transparent mh-100 py-5 text-center">
            <div className="container">
                <div className="container w-75 py-5">
                    <div className="d-flex flex-column text-light">
                        <h2>What We Do</h2>
                        <p className="lead"><small>Webapps Development Services offers end-to-end vital web arrangements with a center on customer fulfillment. Our mission is basic- to create you a creative website that aligns together with your objectives, take a vital route, and showcase you online. We have been evaluated exceedingly credible for the work we do. We imbue imagination in your online space and make it a captivating involvement for the clients on the world wide web. Are you searching for a cutting-edge website?<br/> We are here to assist!</small></p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                        <img className="col-lg-3 img-fluid" src="" alt="works" width="200px"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-white text-dark py-5 text-center">
            <div className="container">
                <div className="container py-5">
                    <div className="text-custom">
                        <h2>The Team</h2>
                        <div className="row mb-3">
                            {ProfileList.map(profile => (
                                <div key={profile.id} className="col-md card mx-lg-4 py-3 mb-3">
                                    <div className="card-body text-start">
                                        <FaIcons.FaQuoteLeft className="fa-quote"/>
                                        <p className="small mt-2">{profile.quotes}</p>
                                    </div>
                                    <div className="card-footer row bg-transparent mt-5 ">
                                        <img className="col img profile w-50" src={profile.img} alt="profile-img"/>
                                        <div className="col text-start py-2 d-flex flex-column align-self-center">
                                            <h6 className="text-custom">{profile.name}</h6>
                                            <p>{profile.title}</p>
                                            <FaIcons.FaLinkedin/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    )
}

export default About