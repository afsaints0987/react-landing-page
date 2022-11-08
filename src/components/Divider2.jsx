import design4 from '../assets/design_4.gif'

const Divider2 = ({img}) => {
    return (
        <section id="solutions"className="pt-5 bg-transparent text-light vh-100 d-flex align-items-center">
            <div className="container">
                <div className="d-flex row">
                    <div className="col-md-6">
                        <h2 style={{color: '#4fd1d9'}}>Are We The Right Partner to Design and Develop Your Website?</h2>
                        <p>The Digital Webspace Solutions team is committed and passionate about building lifelong relationships with our clients, and offering great services.</p> 
                        <p>You're probably here because:</p> 
                        <ul>
                            <li>Your offline business is unprofitable and you want to take it online by building a website for your business.</li>
                            <li>You want to start a new e-commerce business.</li>
                            <li>You already have a website, but keep losing leads.</li>
                        </ul>   
                        <p>Rest assured, you've come to the right company for web design and development, as we are currently designing and developing websites for businesses.</p>
                    </div>
                    <img src={design4} className="col-md-6 mx-5 d-none d-lg-block" alt="solutions" style={{width: '450px', borderRadius: '50%'}}/>
                </div>
            </div>
        </section>
    )
}

export default Divider2