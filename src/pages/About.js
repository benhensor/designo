import React from 'react'
import styled from 'styled-components'
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

const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 160px;
`

const AboutHeroContainer = styled.div`
    display: grid;
    grid-template-columns: 5.5fr 4.5fr;
    border-radius: 15px;
    overflow: hidden;
    color: ${props => props.theme.primaryColors.white};
`

const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        object-repeat: no-repeat;
    }
`


const HeroInfoContainer = styled.div`
    background-image: url(${props => props.$patternBG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${props => props.theme.primaryColors.peach};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 95px 0 95px;
    gap: 40px;
    z-index: 10;
`

const InfoCard = styled.div`
    display: grid;
    grid-template-columns: 4.5fr 5.5fr;
    border-radius: 15px;
    overflow: hidden;
    max-height: 584px;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${props => props.theme.secondaryColors.lighterPeach};
    gap: 40px;
    padding: 0 95px;
    h2 {
        color: ${props => props.theme.primaryColors.peach};
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
        <AboutContainer>
            <AboutHeroContainer >
                <HeroInfoContainer $patternImg={patternBG}>
                    <h1>About Us</h1>
                    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
                </HeroInfoContainer>
                <ImgContainer>
                    <img src={heroImg} alt="Team working on computers" />
                </ImgContainer>
            </AboutHeroContainer>
            <InfoCard>
                <ImgContainer>
                    <img src={worldClassImg} alt="Woman appraising images" />
                </ImgContainer>
                <InfoContainer>
                    <h2>World-class talent</h2>
                    <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   </p>
                    <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </InfoContainer>
            </InfoCard>

            <LocationSelect />

            <InfoCard>
                <InfoContainer>
                    <h2>The real deal</h2>
                    <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </InfoContainer>
                <ImgContainer>
                    <img src={realDealImg} alt="Woman's hands touching photograph" />
                </ImgContainer>
            </InfoCard>

            <CallToAction />
        </AboutContainer>
    )
}