import design3 from '../assets/design_3.gif'

const Divider3 = ({img}) => {
    return (
        <section id="solutions"className="py-5 bg-white text-dark vh-50 d-flex align-items-center">
            <div className="container">
                <div className="d-flex flex-row-reverse">
                    <div className="col-md-6 align-self-center mx-auto text-center text-lg-start">
                        <h2>Customise it to your needs</h2>
                        <p>Let us know what you’ve imagined and our team will bring this into Reality.</p>
                    </div>
                    <img src={design3} alt="design3" className="col-md-6 design-3 d-none d-lg-block" style={{width: "450px"}}/>
                </div>
            </div>
        </section>
    )
}

export default Divider3