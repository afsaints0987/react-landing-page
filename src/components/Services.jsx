import { serviceData } from '../data/data'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Services = () => {
    return (
        <div className="container my-4 service">
            <h2 className="text-center my-5 text-light header-text">Our Web Design and Development Services</h2>
            <Swiper modules={[Pagination, Navigation]}
            spaceBetween={15}
                slidesPerView={1}
                breakpoints={{ 768: { width: 768, slidesPerView: 2 } }}
                centeredSlides={true}
                centeredSlidesBounds={true}
                grabCursor={true}
                pagination={{clickable: true}}
                navigation
                className="swiper-container"
            >
                {serviceData.map(service => (
                    <SwiperSlide className="bg-white py-5 px-4 mx-2 border rounded mb-3 text-center text-lg-start" id="card" key={service.id}>
                        <h4>{service.title}</h4>
                        <p>{service.body}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Services


