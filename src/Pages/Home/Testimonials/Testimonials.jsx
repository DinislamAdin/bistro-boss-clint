import SectionTitle from '../../../componets/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                subHading={"What Our clint say"}
                heading={"testimonials"}
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center my-16 mx-24  space-y-4 gap-p'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                readOnly
                            />
                            <p>{review?.details}</p>
                            <h3 className='text-2xl text-yellow-500'>{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;