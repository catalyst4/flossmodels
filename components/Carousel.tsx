import React, { useState } from 'react'
import styled from 'styled-components'
import FlexCenter from './FlexCenter'

const slides = [
    {
        id: 1,
        title: 'Take your following to the next level'
    },
    // {
    //     id: 2,
    //     title: '2'
    // },
    // {
    //     id: 3,
    //     title: '3'
    // },
]

const Carousel = () => {

    const [id, setId] = useState(slides[0].id)
    const length = slides.length

    return (
        <Bg>
            <Swiper>
                {slides.map((slide,i) => (
                    <Slide key={slide.id}>
                        <Title>{slide.title}</Title>
                    </Slide>    
                ))}
            </Swiper>
            <FlexCenter style={{height: 'initial'}}>
                <SwiperControls>
                    <SwiperBtn active/>
                    <SwiperBtn />
                    <SwiperBtn />    
                </SwiperControls>
            </FlexCenter>
        </Bg>
    )
}

export default Carousel

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

const Swiper = styled.div`
    margin-top: 18px;
`

const SwiperControls = styled.div`
    display: flex;
    align-items: center;
`

const SwiperBtn = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: ${props => props.active ? 'white' : ''};
    border: 2px solid white;
    margin-right: 5px;
    cursor: pointer;
`

const Slide = styled.div`
`

const Title = styled.h1`
    line-height: 30px;
    margin-bottom: 10px;
    color: white;
    @media (min-width: 1024px) {
        font-size: 48px;
        line-height: 45px;
    }
`