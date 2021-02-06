import React from 'react'
import styled from 'styled-components'
import FlexCenter from './FlexCenter'

const Brand = () => {
    return (
        <Bg>
            <FlexLeft>
                <Logo src="/img/white.png" />
                <Desc>UK-based Talent agency specialising in Instagram marketing and OnlyFans management</Desc>
            </FlexLeft>
        </Bg>
    )
}

export default Brand

const Bg = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    color: white;
`

const FlexLeft = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

const Logo = styled.img`
    width: 400px;
    margin-bottom: 15px;
`

const Desc = styled.p`
    font-size: 22px;
    line-height: 25px;
    font-weight: 600;
`