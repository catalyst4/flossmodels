import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import useWindowSize from '../hooks/useWindowSize'
import Link from 'next/link'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
        <>
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
                            <Link href="/benefits"><NavLink>The Benefits</NavLink></Link>
                            <Link href="/how-it-works"><NavLink>How It Works</NavLink></Link>
                            <Link href="/team"><NavLink>Meet Our Team</NavLink></Link>
                            <Link href="/contact"><NavLink>Get Started</NavLink></Link>
                        </NavLinks>
                    )}
                </Flex>
            </Container>
        </Bg>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{marginTop: '78px'}}
        >
            <SMenuItem onClick={handleClose}>
                <Link href="/benefits"><a>The Benefits</a></Link>
            </SMenuItem>
            <SMenuItem onClick={handleClose}>
                <Link href="/how-it-works"><a>How It Works</a></Link>
            </SMenuItem>
            <SMenuItem onClick={handleClose}>
                <Link href="/team"><a>Meet Our Team</a></Link>
            </SMenuItem>
            <SMenuItem onClick={handleClose}>
                <Link href="/contact"><a>Get Started</a></Link>
            </SMenuItem>
        </Menu>
        </>
    )
}

export default Navbar

const Bg = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.color};
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
    margin-left: 20px;
    border-bottom: 1px solid rgba(0,0,0,0);
    transition: ease-in-out 0.2s;
    &:hover {
        border-bottom: 1px solid black;
    }
    &:first-child {
        margin-left: 0;
    }
`

const SMenuItem = styled(MenuItem)`
    font-family: 'Poppins', sans-serif!important;
`