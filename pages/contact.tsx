import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import TextField from '../components/TextField'
import Head from 'next/head'
import Button from '../components/Button'

const contact = () => {

    const [name, setName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [option, setOption] = useState(undefined)
    const [message, setMessage] = useState(undefined)
    const [error, setError] = useState(true)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState()
    const [validEmail, setValidEmail] = useState(false)

    let options = ['Model', 'Advertiser', 'Other']

    useEffect(() => {
        validateForm()
    }, [name, email, option, message])

    const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")

    const validateForm = () => {
        if(name && email && option && message) {
            validEmail ? setError(false) : setError(true)
        } else {
            setError(true)
        }
        if(emailRegex.test(email)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
    }

    return (
        <>
        <Head>
            <title>Floss Models | Contact Us</title>
        </Head>
        <Bg>
            <Navbar />
            <BlurBg>
                <Content>
                    <Container style={{width: '90%'}}>
                        <Title>Contact Us</Title>
                        <Para>Whether you are a model, advertiser or alien get in touch with us today! We will happily answer any questions or queries that you may be thinking about.</Para>
                        <TextField 
                            value={name}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            error={name === '' ? true : false}
                            valid={name && name.length > 0 ? true : false}
                        />
                        <TextField 
                            value={email}
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                            error={email === '' || email !== undefined && validEmail === false ? true : false}
                            helperText={email === '' ? 'Enter a email' : ''}
                            valid={validEmail}
                        />
                        <Select>
                            {options.map((opt, i) => (
                                <Option active={option === opt ? true : false} key={i} onClick={() => setOption(opt)}>{opt}</Option>   
                            ))}
                        </Select>
                        <Message 
                            rows="4" 
                            value={message} 
                            placeholder="Your message" 
                            onChange={e => setMessage(e.target.value)}
                            error={message === '' ? true : false}
                            valid={message && message.length > 0 ? true : false}
                        />
                        <FlexEnd>
                            <Button outlined color="black" disabled={error === true ? true : false}>Submit</Button>
                        </FlexEnd>
                    </Container>
                </Content>
            </BlurBg>
        </Bg>
        </>
    )
}

export default contact

const Bg = styled.div`
    width: 100%;
    height: 100%;
    background: url('/img/bg.jpg');
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

const Para = styled.p`
    margin: 15px 0;
    &:first-child() {
        margin: 0 0 15px 0;
    }
`

const Select = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

const Option = styled.div`
    width: 32%;
    padding: 10px;
    border: 1px solid #dfdfdf;
    box-shadow: ${props => props.active ? '0 0 5px 3px rgba(255, 0, 242,0.1)' : ''};
    color: ${props => props.active ? 'black' : 'grey'};
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
`

const Message = styled.textarea`
    width: 100%;
    padding: 15px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    outline: none;
    box-shadow: ${props => props.error ? '0 0 3px 3px rgba(255, 0, 0,0.2)' : props.valid ? '0 0 3px 3px rgba(255, 0, 242,0.1)' : ''};
`

const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`