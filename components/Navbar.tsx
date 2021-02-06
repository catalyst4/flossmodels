import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import useWindowSize from '../hooks/useWindowSize'
import Link from 'next/link'

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(anchorEl !== null) {
            setAnchorEl(null)
        } else {
            setAnchorEl(event.currentTarget);
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    let size, mobile
    if(process.browser) {
        size = useWindowSize()
        mobile = size.width < 813 ? true : false
    }

    return (
        <Bg>
            <Container>
                <Flex>
                    <Link href="/">
                        <Logo src="/img/pink.png" />
                    </Link>
                    {mobile ? (
                        <IconButton style={{color: 'black'}} onClick={handleClick} >
                            {Boolean(anchorEl) ? 
                                (<CloseIcon style={{color: 'black'}} /> ) : 
                                (<MenuIcon style={{color: 'black'}} /> )
                            }
                        </IconButton>     
                    ) : (
                        <NavLinks>
                            <Link href="/model"><NavLink>Become a Model</NavLink></Link>
                            <Link href="/model"><NavLink>Meet Our Team</NavLink></Link>
                            <Link href="/model"><NavLink>Get Started</NavLink></Link>
                        </NavLinks>
                    )}
                </Flex>
            </Container>
        </Bg>
    )
}

export default Navbar

const Bg = styled.div`
    width: 100%;
    background: rgba(255, 255, 255);
    padding: 15px;
    @media (min-width: 1024px) {
        padding: 25px;
    }
`

const Container = styled.div`
    width: 90%;
    margin: auto;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
        justify-content: flex-start;
    }
`

const Logo = styled.img`
    width: 100px;
    margin-right: 30px;
    cursor: pointer;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: flex-start;
`

const NavLink = styled.div`
    cursor: pointer;
    margin-left: 15px;
    border-bottom: 1px solid rgba(0,0,0,0);
    transition: ease-in-out 0.2s;
    &:hover {
        border-bottom: 1px solid black;
    }
    &:first-child {
        margin-left: 0;
    }
`