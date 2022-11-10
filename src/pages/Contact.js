import design5 from '../assets/design_5.png'
import {motion} from 'framer-motion'
const Contact = ({img}) => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <section className="py-5 bg-transparent text-light vh-50 d-flex align-items-center">
            <div className="container">
                <div className="d-flex flex-row-reverse">
                    <div className="col-md-6 align-self-center mx-auto">
                        <div className="text-sm-center text-lg-start mx-4">
                            <h2 className="header-text">Send Us a Message</h2>
                            <p>Contact us today and our friendly support team will reach out as soon as possible</p>
                        </div>
                        <form className="mt-2 mx-4">
                            <div className="form-group row mb-2">
                                <div className="form-group col">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input className="form-control" name="firstName"/>
                                </div>
                                <div className="form-group col mb-2">
                                    <label htmlFor="lastName" className="form-label" type="text">Last name</label>
                                    <input className="form-control" name="lastName" type="text"/>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input className="form-control" name="email" type="email"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="contacts" className="form-label">Contact No:</label>
                                <input className="form-control" name="contacts" type="text"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" name="message" type="text" row="3"></textarea>
                            </div>
                            <button className="btn btn-transparent px-4 mt-2" type="submit">Send &#8594;</button>
                        </form>
                    </div>
                    <img src={design5} alt="design5" className="col-md-6 design-5 d-none d-lg-block mx-auto" style={{width: "600px"}}/>
                </div>
            </div>
        </section>
        </motion.div>
    )
}

export default Contact