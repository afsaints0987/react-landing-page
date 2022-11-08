import * as FaIcons from 'react-icons/fa'
import {serviceData} from '../data/data.js'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

const Services = () => {
    const swiper = useSwiper();

    return (
        <section id="pricing" className="bg-white py-5">
            <div className="container text-center my-5">
                <h2>Choose Your Plan</h2>
                <p>Website contract has become easier with our detailed website making bundles that is right for you.</p>
            </div>
            <div className="container row d-lg-flex justify-content-center mx-auto py-4">
                <div className="col-md-3 py-5 px-4 border rounded mb-3 text-center text-lg-start shadow-sm">
                    <h6>Start up Web Package</h6>
                    <h4><strong>Starts at $199.99</strong></h4>
                    <p><small>Capture ideas and find them quickly</small></p>
                    <ul className="list-unstyled my-4">
                        <li><FaIcons.FaRegCheckCircle/> 2 Stock images</li>
                        <li><FaIcons.FaRegCheckCircle/> Upto 5 Page Website</li>
                        <li><FaIcons.FaRegCheckCircle/> Contact / Query Form</li>
                        <li><FaIcons.FaRegCheckCircle/> 100% Satisfaction Guarantee</li>
                        <li><FaIcons.FaRegCheckCircle/> 100% Unique Design Guarantee</li>
                        <li><FaIcons.FaRegCheckCircle/> 100% Money Back Guarantee *</li>
                    </ul>
                    <button className="btn btn-sm btn-outline-primary px-3 py-2">Get Started</button>
                </div>
                <div className="col-md-3 py-5 px-4 mx-4 border rounded mb-3 text-center text-lg-start shadow-sm">
                    <h6>Professional Web Package</h6>
                    <h4><strong>Starts at $1399.99</strong></h4>
                    <p><small>Keep home and family on track</small></p>
                    <ul className="list-unstyled my-4">
                        <li><FaIcons.FaRegCheckCircle/> Upto 20 Unique Pages Website</li>
                        <li><FaIcons.FaRegCheckCircle/> Mobile Responsive</li>
                        <li><FaIcons.FaRegCheckCircle/> Custom Made, Interactive, Dynamic & High End Design</li>
                        <li><FaIcons.FaRegCheckCircle/> Complete Deployment</li>
                        <li><FaIcons.FaRegCheckCircle/> FREE 5 Years Domain Name</li>
                        <li><FaIcons.FaRegCheckCircle/> 100% Ownership Rights</li>
                    </ul>
                    <button className="btn btn-sm btn-outline-primary px-3 py-2">Get Started</button>
                </div>
                <div className="col-md-3 py-5 px-4 border rounded mb-3 text-center text-lg-start shadow-sm">
                    <h6>Elite Web Package</h6>
                    <h4><strong>Starts at $799.99</strong></h4>
                    <p><small>Capture ideas and find them quickly</small></p>
                    <ul className="list-unstyled my-4">
                        <li><FaIcons.FaRegCheckCircle/> Upto 15 Unique Pages Website</li>
                        <li><FaIcons.FaRegCheckCircle/> Conceptual and Dynamic Website</li>
                        <li><FaIcons.FaRegCheckCircle/> 3 Unique Banner Design</li>
                        <li><FaIcons.FaRegCheckCircle/> Complete Deployment</li>
                        <li><FaIcons.FaRegCheckCircle/> Lead Capturing Forms</li>
                        <li><FaIcons.FaRegCheckCircle/> 100% Ownership Rights</li>
                    </ul>
                    <button className="btn btn-sm btn-outline-primary px-3 py-2">Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Services
