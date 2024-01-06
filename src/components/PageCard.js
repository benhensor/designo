import React from 'react'
import styled from 'styled-components'
import WebDesignLarge from '../assets/home/desktop/image-web-design-large.jpg'
import WebDesignSmall from '../assets/home/desktop/image-web-design-small.jpg'
import AppDesign from '../assets/home/desktop/image-app-design.jpg'
import GraphicDesign from '../assets/home/desktop/image-graphic-design.jpg'
import WebDesignTablet from '../assets/home/tablet/image-web-design.jpg'
import AppDesignTablet from '../assets/home/tablet/image-app-design.jpg'
import GraphicDesignTablet from '../assets/home/tablet/image-graphic-design.jpg'
import WebDesignMobile from '../assets/home/mobile/image-web-design.jpg'
import AppDesignMobile from '../assets/home/mobile/image-app-design.jpg'
import GraphicDesignMobile from '../assets/home/mobile/image-graphic-design.jpg'
import RightArrow from '../assets/shared/desktop/icon-right-arrow.svg'
import WebDesign from '../pages/WebDesign';

const StyledPageCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 144px 0 0 0;
    text-transform: uppercase;
    color: ${props => props.theme.primaryColors.white};
    // First div - Web Design
    div:first-child {
        background: url(${WebDesignLarge}) no-repeat center;
        background-size: cover;
        height: 640px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    // Second div - App Design
    div:nth-child(2) div:first-child {
        background: url('../assets/home/desktop/image-app-design.jpg') no-repeat center;
        background-size: cover;
    }

    // Third div - Graphic Design
    div:nth-child(2) div:nth-child(2) {
        background: url('../assets/home/desktop/image-graphic-design.jpg') no-repeat center;
        background-size: cover;
    }
    p {
        display: flex;
        align-items: center;
    }
    img {
        margin-left: 16px;
        height: 12px;
        width: auto;
    }

`

export default function PageCard() {
  return (
    <StyledPageCard>
        <div>
            <h1>web design</h1>
            <p>view projects<img src={RightArrow} alt='' /></p>
        </div>
        <div>
            <div>
                <h1>app design</h1>
                <p>view projects<img src={RightArrow} alt='' /></p>
            </div>
            <div>
                <h1>graphic design</h1>
                <p>view projects<img src={RightArrow} alt='' /></p>
            </div>
        </div>
    </StyledPageCard>
  )
}