import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Navbar from '../components/Navbar'

const benefits = () => {
    return (
        <>
        <Head>
            <title>Floss Models | Benefits</title>
        </Head>
        <Bg>
            <Navbar />
            <BlurBg>
                <Content>
                    <Container style={{width: '90%'}}>
                        <Title>The Benefits</Title>
                        <Para>Floss Models can provide you with a unique opportunity to expand your social media following. This comes in the form of growth on both Instagram and OnlyFans.</Para>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>Instagram Growth</Text>
                        </Benefit>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>OnlyFans Growth</Text>
                        </Benefit>
                        <Para>Your social media presence will be heightened through promotions off our own Instagram network and wide range of contacts who we have obtained over our 20 years of combined social media experience.</Para>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>20+ years combined experience</Text>
                        </Benefit>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>Business and social connections</Text>
                        </Benefit>
                        <Para>Through Floss, we allow you to kick start your influencing career pathway coming hand in hand with the ability to earn cashflow off these platforms.</Para>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>Kickstart your influencer career</Text>
                        </Benefit>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>Earn through OnlyFans & ads</Text>
                        </Benefit>
                        <Para>With the experience that our team has accumulated over the years, the management you will be provided is of top-quality meaning there is next to no risk for you to become part of our agency and best of all, no cost.</Para>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>No risk or cost to you</Text>
                        </Benefit>
                        <Benefit>
                            <Icon className="fas fa-check"></Icon>
                            <Text>Flexible tailored deals to you</Text>
                        </Benefit>
                    </Container>
                </Content>
            </BlurBg>
        </Bg>
        </>
    )
}

export default benefits

const Bg = styled.div`
    width: 100%;
    min-height: 100%;
    background: url('/img/bg.jpg');
    background-repeat: repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
`

const Title = styled.h1`
    margin-bottom: 15px;
    color: black;
`

const BlurBg = styled.div`
    width: 100%;
    margin: auto;
    background: rgba(255, 255, 255,0.35);
    backdrop-filter: blur(5px);
    padding: 15px;
    @media (min-width: 1024px) {
        margin: 30px auto;
        width: 70%;
    }
`

const Content = styled.div`
    padding: 20px 0;
    background: white;
`

const Para = styled.p`
    margin: 15px 0;
    &:first-child() {
        margin: 0 0 15px 0;
    }
`

const Benefit = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Icon = styled.i`
    margin-right: 10px;
    color: #2a9fff;
`

const Text = styled.p`

`