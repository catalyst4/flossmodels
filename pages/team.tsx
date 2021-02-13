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
                            <Flex>
                                <Img />
                                <Text>
                                    <Name>Jack G</Name>
                                    <Bio>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione architecto at dignissimos tempora molestias?</Bio>
                                </Text>
                            </Flex>
                            <Flex>
                                <Text right>
                                    <Name>Jack G</Name>
                                    <Bio>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione architecto at dignissimos tempora molestias?</Bio>
                                </Text>
                                <Img />
                            </Flex>
                            <Flex>
                                <Img />
                                <Text>
                                    <Name>Jack G</Name>
                                    <Bio>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione architecto at dignissimos tempora molestias?</Bio>
                                </Text>
                            </Flex>
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
    margin: 15px 0 50px 0;
    color: black;
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
    }
`

const Content = styled.div`
    padding: 20px 0;
    background: white;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
    background: #fa63e6;
    border-radius: 99999999px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const Text = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: ${props => props.right ? 'right' : ''};
`

const Name = styled.h3``

const Bio = styled.p``