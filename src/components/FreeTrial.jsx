import {Link} from 'react-router-dom'

const FreeTrial = () => {
    return (
        <section className="py-5">
            <div className="container text-center text-light">
                <h2 className="my-5 header-text">Try Our Webspace Solution today</h2>
                <p>Get started for free. Add you whole team as your needs grow.</p>
                <Link to='/contact' className="btn btn-transparent btn-sm px-3 py-2 mb-3" style={{backgroundColor: "#e3c493"}}>Try Taskey free &#8594;</Link>
                <p>On a big team? Contact sales</p>
            </div>
        </section>
    )
}

export default FreeTrial
