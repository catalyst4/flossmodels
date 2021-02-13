import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Container from '../components/Container'
import Button from '../components/Button'
import steps from '../steps'
import Head from 'next/head'
import Link from 'next/link'
import FlexBetween from '../components/FlexBetween'

const howItWorks = () => {

    const [currentStep, setStep] = useState(steps[0].id)
    const length = steps.length

    const clickHandler = (action) => {
        switch(action) {
            case 'next': {
                return setStep(currentStep + 1)
            }
            case 'back': {
                return setStep(currentStep - 1)
            }
        }
    }

    return (
        <>
        <Head>
            <title>Floss Models | How It Works</title>
        </Head>
        <Bg>
           <Navbar />
           <BlurBg>
            <Content>
             <Container style={{width: '90%'}}>
                <Title>How It Works</Title>
                <Progress>
                    {steps.map((step,i) => (
                        <Bar active={currentStep >= i + 1} key={i} />
                    ))}
                </Progress>
                {steps.filter(step => step.id === currentStep).map((step, i) => (
                    <div key={i}>
                        <Step>{step.id + '. ' + step.name}</Step>
                        {step.paras.map((para, i) => {
                            if(i === 0) {
                                return (
                                    <FlexBetween key={i} style={{marginBottom: '15px'}}>
                                        <Para>{para}</Para> 
                                        <Gif src={`/img/gif/${step.gif}`} />
                                    </FlexBetween>
                                )
                            } else {
                                return (
                                    <Para key={i}>{para}</Para> 
                                )
                            }
                        })}
                    </div>    
                ))}
                 
                <FlexEnd>
                    {currentStep > 1 && (
                        <Button outlined color="black" radius="10px" onClick={() => clickHandler('back')}>Back</Button>    
                    )}
                    {currentStep < length ? (
                        <Button radius="10px" color="white" borderColor="black" onClick={() => clickHandler('next')}>Next Step</Button>    
                    ) : currentStep === length ? (
                        <Link href="/contact">
                            <Button radius="10px" color="white" borderColor="black">Contact Us</Button>  
                        </Link>
                    ) : ''}
                </FlexEnd>
             </Container>
            </Content>
           </BlurBg>
        </Bg>
        </>
    )
}

export default howItWorks

const Bg = styled.div`
    width: 100%;
    min-height: 100%;
    background: url('/img/bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    background-attachment: fixed;
    @media (min-width: 1024px) {
        height: 100%;
    }
`

const Title = styled.h1`
    margin: 15px 0;
    color: black;
    @media (max-width: 768px) {
        margin: 0 0 15px 0;
    }
`

const BlurBg = styled.div`
    width: 100%;
    margin: 0 auto;
    background: rgba(255, 255, 255,0.35);
    backdrop-filter: blur(5px);
    padding: 15px;
    @media (min-width: 1024px) {
        margin: 30px auto;
        width: 70%;
        height: initial;
    }
`

const Content = styled.div`
    height: 100%;
    padding: 20px 0;
    background: white;
    @media (min-width: 1024px) {
        height: initial;
    }    
`

const Step = styled.h3`
    font-size: 24px;
    font-weight: 500;
    margin: 15px 0;
`

const Para = styled.p`
    width: 65%;
    margin: 15px 0;
    &:first-child() {
        margin: 0 0 15px 0;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Gif = styled.img`
    width: 30%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
`

const Progress = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Bar = styled.div`
    width: 100%;
    background: ${props => props.active ? '#ff00f2' : 'grey'};
    height: 10px;
    opacity: 0.5;
    border: 2px solid white;
    border-radius: 999px;
`