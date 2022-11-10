import Hero from '../components/Hero'
import Divider from '../components/Divider'
import Divider2 from '../components/Divider2'
import Divider3 from '../components/Divider3'
import Services from '../components/Services'
import FreeTrial from '../components/FreeTrial'
import {motion} from 'framer-motion'

const Home = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <Hero/>
            <Divider/>
            <Divider2/>
            <Divider3/>
            <Services/>
            <FreeTrial/>
        </motion.div>
    )
}

export default Home