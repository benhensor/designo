import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HeroPhone from '../assets/home/desktop/image-hero-phone.png'

const Hero = styled.div`
    position: relative;
    background-color: ${props => props.theme.primaryColors.peach};
    padding: 145px 95px 0 95px;
    color: ${props => props.theme.primaryColors.white};
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 160px;

    @media screen and (max-width: 768px) {
        border-radius: 0;
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
        padding: 60px 10% 0 10%;
        height: 880px;
        margin-bottom: 120px;
    }

    @media screen and (max-width: 375px) {
        margin-bottom: 80px;
        padding: 60px 5% 0 5%;
    }
`

const HeroBG = styled(motion.div)`
    position: absolute;
    right: 0;

    @media screen and (max-width: 768px) {
        right: -60px;
        top: 20%;
    }
`

const HeroDetails = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 40px;
    z-index: 10;

    @media screen and (max-width: 768px) {
        align-items: center;
    }

    @media screen and (max-width: 375px) {
        h1 {
            font-size: 3.2rem;
            line-height: 3.4rem;
        
        }
    }
`

const HeroButton = styled(Link)`
    background-color: ${props => props.theme.secondaryColors.lightGrey};
    color: ${props => props.theme.primaryColors.black};
    padding: 18px 24px;
    width: 150px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: all 0.1s ease;
    margin-bottom: 100px;
    &:hover {
        background-color: ${props => props.theme.secondaryColors.lightPeach};
        color: ${props => props.theme.primaryColors.white};
    }
`

const HeroImage = styled(motion.div)`
    position: relative;
    img {
        position: absolute;
        right: -160px;
        top: -120px;
        width: 575px;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        img {
            right: 50%;
            transform: translateX(50%);
            top: -350px;
        }
    }
`


export default function Home() {
    return (
            <Hero>
                <HeroBG
                    initial={{ opacity: 0, y: -200 }}
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

                <HeroDetails
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                >
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <HeroButton to='/about'>learn more</HeroButton>
                </HeroDetails>
                
                <HeroImage 
                    initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeInOut', duration: 1 }}
                >
                    <img src={HeroPhone} alt="hero phone" />
                </HeroImage>

            </Hero>
    )
}