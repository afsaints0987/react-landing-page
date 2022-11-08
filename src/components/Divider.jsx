import design2 from '../assets/design_2.png'
import design1 from '../assets/design_1.gif'

const Divider = ({img}) => {
    return (
        <section id="solutions"className="bg-white text-dark mh-100 py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-self-center">
                        <h2>Why is Web Design & Development Important For Your Business?</h2>
                        <p>Web design and development is important for your business as it affects how your target audience perceives your brand. The first impression that you make on them decides whether they stay on your website and browse, or leave and go to a competitor. An attractive design with a good user interface will convince them to stay.</p>
                    </div>
                    <img src={design1} alt="" className="col-md-6 d-none d-lg-block img-fluid"/>
                </div>
                
                <div className="row d-flex flex-row-reverse justify-content-lg-between mb-5">
                    <div className="col-md-6 align-self-center">
                        <h2 className="w-25">Project Management</h2>
                        <p>No matter how big your company is or how experienced the managers are, having a streamlined process is the only way for efficient project management. Efficiency is what we’re good at!</p>
                    </div>
                    <img src={design2} alt="design-circles" className="col-md-6 design d-none d-lg-block img-fluid" style={{width: "500px"}}/>
                </div>
                
            </div>
        </section>
    )
}

export default Divider