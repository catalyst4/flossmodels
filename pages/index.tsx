import Head from 'next/head'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import FlexCenter from '../components/FlexCenter'
import Button from '../components/Button'
import Link from 'next/link'
import Brand from '../components/Brand'
import useWindowSize from '../hooks/useWindowSize'

export default function Home() {

  let size, mobile
  if(process.browser) {
      size = useWindowSize()
      mobile = size.width < 813 ? true : false
  }

  return (
    <>
      <Head>
          <title>Floss Models</title>
          <meta name="theme-color" content="#f38cf7" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Floss Models" />
          <meta name="twitter:description" content="UK-based Talent Agency" />
          <meta name="og:image" content="https://flossmodels.vercel.app/img/logo.png" />
          <meta name="twitter:image" content="https://flossmodels.vercel.app/img/logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Flex>
        <Bg>
          <Top>
            <Navbar />
            <TopFlex>
              {!mobile && (
                <Brand />
              )}
              <Carousel />    
            </TopFlex>
          </Top>
          <FlexCards>
            <Card model>
              <FlexCenter>
                <div>
                  <Icon className="fas fa-camera"></Icon>
                  <Title>Become a Model</Title>
                  <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</Desc>
                  <FlexCenter>
                    <div>
                      <Link href="/benefits">
                        <Button fontSize="12px" outlined color="black" borderColor="black" hoverBg="black" hoverColor="white">The Benefits</Button>  
                      </Link>
                      <Link href="/how-it-works">
                        <Button fontSize="12px" outlined color="black" borderColor="black" hoverBg="black" hoverColor="white">How It Works</Button>  
                      </Link>
                    </div>
                  </FlexCenter>  
                </div>
              </FlexCenter>  
            </Card>
            <Card>
              <FlexCenter>
                <div>
                  <Icon className="fas fa-users"></Icon>
                  <Title>Meet Our Team</Title>
                  <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</Desc>
                  <FlexCenter>
                    <div>
                      <Button fontSize="12px" outlined color="black" borderColor="black" hoverBg="black" hoverColor="white">Discover Us</Button>
                    </div>
                  </FlexCenter> 
                </div>
              </FlexCenter>
            </Card>
          </FlexCards>
        </Bg>
      </Flex>
    </>
  )
}

const Flex = styled.div`
  height: 100%;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: url('/img/bg.jpg');
  background-position: center;
  background-size: cover;
`

const Top = styled.div`
  @media (min-width: 1024px) {
    height: 50%;
  }
`

const TopFlex = styled.div`
  height: calc(100% - 78.13px);
  display: flex;
  justify-content: space-between;
`

const FlexCards = styled.div`
  display: grid;
  width: 100%;
  height: calc(100% - 78px - 105px);
  padding: 10px;
  gap: 10px;
  background: rgba(255, 255, 255,0.35);
  backdrop-filter: blur(3px);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2,1fr);
    height: 50%;
    padding: 15px;
    gap: 15px;
  }
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.model ? 'white' : 'white'};
  color: black;
  padding: 10px;
`

const Icon = styled.i`
  width: 100%;
  font-size: 24px;
  text-align: center;
`

const Title = styled.h1`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const Desc = styled.p`
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`