import * as FaIcons from 'react-icons/fa'
import {planData} from '../data/data'

const Plan = () => {
    return (
        <section id="pricing" className="bg-white py-5">
            <div className="container text-center my-5">
                <h2>Choose Your Plan</h2>
                <p>Website contract has become easier with our detailed website making bundles that is right for you.</p>
            </div>
            <div className="container row d-lg-flex justify-content-center mx-auto py-4">
                {planData.map(plan => (
                <div className="col-md-3 py-5 px-4 border rounded mb-3 text-center text-lg-start shadow-sm mx-2" key={plan.id}>
                    <h6>{plan.title}</h6>
                    <h4><strong>Starts at ${plan.price}</strong></h4>
                    <p><small>{plan.tag}</small></p>
                    <ul className="list-unstyled my-4">
                        {plan.details.map(detail => (
                            <li key={detail}><FaIcons.FaRegCheckCircle/> {detail}</li>
                        ))}
                    </ul>
                    <button className="btn btn-sm btn-outline-primary px-3 py-2">Get Started</button>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Plan
