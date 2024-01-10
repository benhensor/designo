import React from 'react'
import styled from 'styled-components'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import UseMediaQuery from '../hooks/UseMediaQuery'
import CallToAction from '../components/CallToAction'
import LocationSelect from '../components/LocationSelect'
import AboutHero from '../assets/about/desktop/image-about-hero.jpg'
import AboutHeroTablet from '../assets/about/tablet/image-about-hero.jpg'
import AboutHeroMobile from '../assets/about/mobile/image-about-hero.jpg'
import AboutWorldClass from '../assets/about/desktop/image-world-class-talent.jpg'
import AboutWorldClassTablet from '../assets/about/tablet/image-world-class-talent.jpg'
import AboutWorldClassMobile from '../assets/about/mobile/image-world-class-talent.jpg'
import AboutRealDeal from '../assets/about/desktop/image-real-deal.jpg'
import AboutRealDealTablet from '../assets/about/tablet/image-real-deal.jpg'
import AboutRealDealMobile from '../assets/about/mobile/image-real-deal.jpg'
import PatternDesktop from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import PatternMobile from '../assets/about/mobile/bg-pattern-hero-about-mobile.svg'

const AboutContainer = styled.main`
    max-width: 1111px;
    margin: 125px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1199px) {
        margin: 125px 5% 0 5%;
    }
    @media (max-width: 768px) {
        margin: 125px 0 0 0;         
    }
    @media (max-width: 375px) {
        margin: 95px 0 0 0 ;
        gap: 0;       
    }
`

const AboutCard = styled.div`
    display: flex;
    flex-direction: ${props => {
        if (props.$id === 'first' || props.$id === 'third') return 'row';
        if (props.$id === 'second') return 'row-reverse';
        return 'row';
    
    }};
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: ${props => {
        if (props.$id === 'first' || props.$id === 'second') return '160px';
        if (props.$id === 'third') return '0';
    }};
    @media (max-width: 768px) {
        border-radius: 0;
        flex-direction: column-reverse;
        margin-bottom: ${props => {
        if (props.$id === 'first' || props.$id === 'second') return '120px';
        if (props.$id === 'third') return '0';
    }}

    }

    @media (max-width: 375px) {
        margin-bottom: 0;
    }
`

const Img = styled.div`
    flex: 40%;
    object-fit: cover;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        scale: 1.09
    }

    @media (max-width: 768px) {
        flex: 1;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 60%;
    background: ${props => {
        if (props.$id === 'first') return `url(${props.$patternBG})`;
        if (props.$id === 'second' || props.$id === 'third') return null;
    }};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${props => {
        if (props.$id === 'first') return props.theme.primaryColors.peach;
        if (props.$id === 'second' || props.$id === 'third') return props.theme.secondaryColors.lighterPeach;
        return 'white';
    }};
    color: ${props => {
        if (props.$id === 'first') return props.theme.primaryColors.white;
        if (props.$id === 'second' || props.$id === 'third') return props.theme.primaryColors.black;
        return 'white';
    }};
    padding: 57px 10%;
    gap: 24px;
    h1 {
        color: ${props => props.theme.primaryColors.white};
    }
    h2 {
        color: ${props => props.theme.primaryColors.peach};
    }

    @media (max-width: 768px) {
        flex: 1;
        align-items: center;
        text-align: center;
        padding: 57px 0;
        h1, h2, p {
            padding: 0 10%;
        }
    
    }

    @media (max-width: 375px) {
        h1, h2 {
            font-size: 3.2rem;
            line-height: 3.4rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
`


export default function About() {

    const isDesktop = UseMediaQuery('(min-width: 769px)')
    const isTablet = UseMediaQuery('(min-width: 376px) and (max-width: 768px)')
    const isMobile = UseMediaQuery('(max-width: 375px)')

    let patternBG = isDesktop ? PatternDesktop : (isTablet || isMobile) ? PatternMobile : null

    let heroImg
    if (isDesktop) {
        heroImg = AboutHero
    } else if (isTablet) {
        heroImg = AboutHeroTablet
    } else if (isMobile) {
        heroImg = AboutHeroMobile
    } else {
        heroImg = null
    }

    let worldClassImg
    if (isDesktop) {
        worldClassImg = AboutWorldClass
    } else if (isTablet) {
        worldClassImg = AboutWorldClassTablet
    } else if (isMobile) {
        worldClassImg = AboutWorldClassMobile
    } else {
        worldClassImg = null
    }

    let realDealImg
    if (isDesktop) {
        realDealImg = AboutRealDeal
    } else if (isTablet) {
        realDealImg = AboutRealDealTablet
    } else if (isMobile) {
        realDealImg = AboutRealDealMobile
    } else {
        realDealImg = null
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Designo | About Us</title>
                <meta name="author" content="Ben Hensor"/>
                <meta name="description" 
                content="About page for Designo - Where we bring ideas to life!"
                />
            </Helmet>

            <AboutContainer>
                <AboutCard $id="first">
                    <Info $id="first" $patternBG={patternBG}>
                        <h1>About Us</h1>
                        <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
                    </Info>
                    <Img>
                        <img src={heroImg} alt="Team meeting" />
                    </Img>
                </AboutCard>
                <AboutCard $id="second">
                    <Info $id="second" $patternBG={patternBG}>
                        <h2>World-class talent</h2>
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   </p>
                        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                    </Info>
                    <Img>
                        <img src={worldClassImg} alt="Woman appraising images" />
                    </Img>
                </AboutCard>

                <LocationSelect />

                <AboutCard $id="third">
                    <Info $id="third" $patternBG={patternBG}>
                        <h2>The real deal</h2>
                        <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                        <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                    </Info>
                    <Img>
                        <img src={realDealImg} alt="Woman's hands touching photograph" />
                    </Img>
                </AboutCard>

                <CallToAction />
            </AboutContainer>

        </HelmetProvider>
    )
}