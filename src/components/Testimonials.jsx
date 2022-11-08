import * as FaIcons from 'react-icons/fa'

const Testimonials = () => {
    return (
        <section className="bg-white py-5">
            <div className="container">
                <h2 className="text-center my-5">What Our Clients Says</h2>
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active row d-flex justify-content-center mt-5">
                            <div className="col-md-3 card mx-auto mb-3">
                                <div className="card-body">
                                    <FaIcons.FaQuoteLeft size={50} className="my-3" />
                                    <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                                    <div className="card-footer row py-3">
                                        <img src="" className="rounded col" alt="" />
                                        <div className="container col">
                                            <h6>John Doe</h6>
                                            <p><small>Head of Talent Acquisition, North America</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 card mx-auto mb-3">
                                <div className="card-body">
                                    <FaIcons.FaQuoteLeft size={50} className="my-3" />
                                    <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                                    <div className="card-footer row py-3">
                                        <img src="" className="rounded col" alt="" />
                                        <div className="container col">
                                            <h6>John Doe</h6>
                                            <p><small>Head of Talent Acquisition, North America</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 card mx-auto mb-3">
                                <div className="card-body">
                                    <FaIcons.FaQuoteLeft size={50} className="my-3" />
                                    <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                                    <div className="card-footer row py-3">
                                        <img src="" className="rounded col" alt="" />
                                        <div className="container col">
                                            <h6>John Doe</h6>
                                            <p><small>Head of Talent Acquisition, North America</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
