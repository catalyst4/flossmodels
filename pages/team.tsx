import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Container from '../components/Container'

const team = () => {
    return (
        <>
            <Head>
            </Head>   
            <Bg>
                <Navbar />
                <BlurBg>
                    <Content>
                        <Container style={{width: '90%'}}>
                            <Title>Meet Our Team</Title>
                        </Container>
                    </Content>
                </BlurBg>
            </Bg>
        </>
    )
}

export default team

const Bg = styled.div`
    width: 100%;
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
`

const BlurBg = styled.div`
    width: 100%;
    margin: 30px auto;
    background: rgba(255, 255, 255,0.35);
    backdrop-filter: blur(5px);
    padding: 15px;
    @media (min-width: 1024px) {
        width: 70%;
    }
`

const Content = styled.div`
    padding: 20px 0;
    background: white;
`