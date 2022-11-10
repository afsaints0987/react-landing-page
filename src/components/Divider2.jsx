import design4 from '../assets/design_4.gif'
import backgroundVideo from '../assets/background-video.mp4'
import '../styles/_Divider.scss'

const Divider2 = ({img}) => {
    return (
        <section className="pt-5 bg-transparent text-light vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="header-text">Are We The Right Partner to Design and Develop Your Website?</h2>
                        <p>The Digital Webspace Solutions team is committed and passionate about building lifelong relationships with our clients, and offering great services.</p> 
                        <p>You're probably here because:</p> 
                        <ul>
                            <li>Your offline business is unprofitable and you want to take it online by building a website for your business.</li>
                            <li>You want to start a new e-commerce business.</li>
                            <li>You already have a website, but keep losing leads.</li>
                        </ul>   
                        <p>Rest assured, you've come to the right company for web design and development, as we are currently designing and developing websites for businesses.</p>
                    </div>
                    <img src={design4} alt="design4" className="col-md-6 design-4 d-none d-lg-block d-xl-none " style={{width: "450px"}}/>
                    <div className="col-md-6 d-none d-xl-block vid-container">
                        <video autoPlay loop muted id="video">
                            <source src={backgroundVideo} type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Divider2