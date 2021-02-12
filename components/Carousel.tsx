import React, { useState } from 'react'
import styled from 'styled-components'
import FlexCenter from './FlexCenter'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const slides = [
    {
        id: 1,
        title: 'Boost your income, kickstart your influencing career!'
    },
    {
        id: 2,
        title: 'Grow your socials, take your following to the next level!'
    },
    {
        id: 3,
        title: 'Becoming part of a professional, laidback, and ever improving team.'
    },
]

const SCarousel = () => {

    const [id, setId] = useState(slides[0].id)
    const length = slides.length

    SwiperCore.use([Autoplay]);

    return (
        <Bg>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 6500 }}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                     <Title>{slide.title}</Title>
                    </SwiperSlide>    
                ))}
            </Swiper>    
        </Bg>
    )
}

export default SCarousel

const Bg = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1024px) {
        padding: 50px;
    }
`

const Title = styled.h1`
    font-size: 24px;
    line-height: 25px;
    color: white;
    @media (min-width: 1024px) {
        font-size: 28px;
        line-height: 30px;
    }
`