import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Container from '../components/Container'
import useWindowSize from '../hooks/useWindowSize'
import teamList from '../team'

const team = () => {

    let size, mobile
    if(process.browser) {
        size = useWindowSize()
        mobile = size.width < 813 ? true : false
    }

    return (
        <>
            <Head>
                <title>Floss Models | Meet Our Team</title>
            </Head>   
            <Bg>
                <Navbar />
                <BlurBg>
                    <Content>
                        <Container style={{width: '90%'}}>
                            <Title>Meet Our Team</Title>
                            {teamList.map((user,i) => (
                                <div key={i}>
                                {mobile ? (
                                    <>
                                        <Flex reversed={i  % 2 ? true : false}>
                                            <Img reversed={i  % 2 ? true : false} src={`/img/${user.img}`} />  
                                            <Name>{user.name}</Name>
                                        </Flex>
                                        <Bio reversed={i  % 2 ? true : false}>{user.bio}</Bio>
                                    </>
                                ) : (
                                    <Flex reversed={i  % 2 ? true : false}>
                                        <Img src={`/img/${user.img}`} />
                                        <Text reversed={i  % 2 ? true : false}>
                                            <Name>{user.name}</Name>
                                            <Bio>{user.bio}</Bio>
                                        </Text>
                                    </Flex>    
                                )}    
                                </div>
                            ))}
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
    color: ${props => props.theme.colors.color};
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
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.color};
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.reversed ? 'row-reverse' : ''};
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin-bottom: 10px;
        justify-content: flex-start;
    }
`

const Img = styled.img`
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 99999999px;
    border: 3px solid white;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    @media (max-width: 768px) {
        margin: ${props => props.reversed ? '0 0 0 15px' : '0 15px 0 0'};
    }
`

const Text = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: ${props => props.reversed ? 'right' : ''};
`

const Name = styled.h3``

const Bio = styled.p`
    text-align: ${props => props.reversed ? 'right' : ''};
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`