import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HeroPhone from '../assets/home/desktop/image-hero-phone.png'

const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.primaryColors.peach};
    width: 100%;
    min-height: 640px;
    padding: 145px 8%;
    border-radius: 15px;
    color: ${props => props.theme.primaryColors.white};
    overflow: hidden;
    position: relative;
`

const HeroDetails = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 540px;
    z-index: 10;
`

const HeroButton = styled.button`
    background-color: ${props => props.theme.primaryColors.white};
    color: ${props => props.theme.primaryColors.black};
    border: none;
    border-radius: 8px;
    padding: 18px 24px;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${props => props.theme.secondaryColors.lightPeach};
        color: ${props => props.theme.primaryColors.white};
    }
`

const HeroBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

const HeroImage = styled(motion.div)`
    position: absolute;
    top: 0;
    right: -7%;
    z-index: 9;
    img {
        width: 100%;
    }
`

export default function Home() {
    return (
        <section>
            <Hero>
                <HeroDetails
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                >
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <HeroButton>learn more</HeroButton>
                </HeroDetails>
                <HeroBG
                    initial={{ opacity: 0, y: 100, x: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                >
                    <svg 
                        width="640" 
                        height="639" 
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient 
                                x1="0%" 
                                y1="50%" 
                                x2="100%" 
                                y2="50%" 
                                id="a">
                                <stop 
                                    stopColor="#5D0202" 
                                    stopOpacity="0" 
                                    offset="0%"                               
                                />
                                <stop 
                                    stopColor="#5D0202" 
                                    stopOpacity=".498" 
                                    offset="100%"
                                />
                            </linearGradient>
                        </defs>
                        <circle 
                            fill="url(#a)" 
                            transform="matrix(0 -1 -1 0 640 640)" 
                            cx="320" 
                            cy="320" 
                            r="320" 
                            fillRule="evenodd" 
                            opacity=".309"/>
                    </svg>
                </HeroBG>
                <HeroImage 
                    initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeInOut', duration: 1 }}
                >
                    <img src={HeroPhone} alt="hero phone" />
                </HeroImage>
            </Hero>
        </section>
    )
}