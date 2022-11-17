import {Link} from 'react-router-dom'

const FreeTrial = () => {
    return (
        <section className="py-5">
            <div className="container text-center text-light">
                <h2 className="my-4 header-text">Try Our Webspace Solution today</h2>
                <p>Get started for free.</p>
                <Link to='/contact' className="btn btn-transparent btn-sm px-3 py-2 mb-3">Start Today &#8594;</Link>
                
            </div>
        </section>
    )
}

export default FreeTrial
