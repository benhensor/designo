import React from 'react'
import styled from 'styled-components'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Leaf from '../assets/shared/desktop/bg-pattern-leaf.svg'
import Hero from '../components/Hero'
import PagePreview from '../components/PagePreview'
import CallToAction from '../components/CallToAction'
import Illustrations from '../components/Illustrations'

const HomeContainer = styled.main`
    max-width: 1111px;
    margin: 125px auto 0 auto;
    @media (max-width: 1199px) {
        margin: 125px 5% 0 5%;
    }
    @media (max-width: 768px) {
        margin: 125px 0 0 0;
    }
    @media (max-width: 375px) {
        margin: 95px 0 0 0 ;
    }
`

const HomeBackground = styled.div`
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 810px;
    height: 100vh;
    width: 100%;
    margin: 250px 0;
    div {
        display: flex;
        width: 100%;
    }
    div:nth-child(2) {
        justify-content: flex-start;
        transform: rotate(180deg);
    }
    img {
        width: 1000px;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export default function Home() {
    
    return (
        <HelmetProvider>
            <Helmet>
                <title>Designo | Home</title>
                <meta name="author" content="Ben Hensor"/>
                <meta name="description" content="Home page for Designo - Where we bring ideas to life!" />
            </Helmet>
            <HomeContainer>
                <HomeBackground>
                    <div><img src={Leaf} alt="leaf pattern" /></div>
                    <div><img src={Leaf} alt="leaf pattern" /></div>
                </HomeBackground>
                <Hero />
                <PagePreview />
                <Illustrations />
                <CallToAction />
            </HomeContainer>
        </HelmetProvider>
    )
}