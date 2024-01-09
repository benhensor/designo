import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as RightArrow } from '../assets/shared/desktop/icon-right-arrow.svg'
import GraphicDesignDesktop from "../assets/home/desktop/image-graphic-design.jpg";
import GraphicDesignTablet from "../assets/home/tablet/image-graphic-design.jpg";
import GraphicDesignMobile from "../assets/home/mobile/image-graphic-design.jpg";
import UseMediaQuery from '../hooks/UseMediaQuery'

const StyledRightArrow = styled(RightArrow)`
    position: absolute;
    right: -16px;
    margin-left: 8px;
    transition: margin-left 0.5s ease-in-out;
`

const StyledPageCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 200px;
    text-transform: uppercase;
    color: ${props => props.theme.primaryColors.white};
    background-image: url(${props => props.$backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.primaryColors.peach};
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    &:hover::after {
        opacity: 0.8;
    }
    h1, p {
        text-align: center;
        z-index: 1;
    }
    p {
        position: relative;
        display: flex;
        align-items: center;

    }

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 375px) {
        min-height: 250px;
        h1 {
            font-size: 2.8rem;
        }    
    }
`

export default function PageCardGraphic() {

    const isDesktopLg = UseMediaQuery('(min-width: 1024px)')
    const isDesktop = UseMediaQuery('(min-width: 769px)')
    const isTablet = UseMediaQuery('(min-width: 376px) and (max-width: 768px)')
    const isMobile = UseMediaQuery('(max-width: 375px)')

    let backgroundImage
    if (isDesktopLg || isDesktop) {
        backgroundImage = GraphicDesignDesktop
    } else if (isTablet) {
        backgroundImage = GraphicDesignTablet
    } else if (isMobile) {
        backgroundImage = GraphicDesignMobile
    } else {
        backgroundImage = null
    }

    return (
        <Link to="/graphic-design">
            <StyledPageCard $backgroundImage={backgroundImage}>
                <h1>Graphic Design</h1>
                <p>view projects<StyledRightArrow/></p>
            </StyledPageCard>
        </Link>
    )
}