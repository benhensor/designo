import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Canada } from '../assets/shared/desktop/illustration-canada.svg'
import { ReactComponent as Australia } from '../assets/shared/desktop/illustration-australia.svg'
import { ReactComponent as UnitedKingdom } from '../assets/shared/desktop/illustration-united-kingdom.svg'
import Circle from '../assets/shared/desktop/bg-pattern-small-circle.svg'

const LocationSelectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    margin-bottom: 160px;
    width: 100%;
    

    @media (max-width: 809px) {
        grid-template-columns: 1fr;
        margin: 0 5% 80px 5%;
    }

    @media (max-width: 559px) {
        gap: 48px;
        margin: 80px 5%;
    }
`

const Location = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 40px;
    h3 {
        text-transform: uppercase;
    }
`

const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${Circle});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotate(${props => props.$rotation});
    z-index: -1;
`

const ImgContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LocationButton = styled(Link)`
    background-color: ${props => props.theme.primaryColors.peach};
    color: ${props => props.theme.primaryColors.white};
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

export default function LocationSelect() {
  return (
        <LocationSelectContainer>
            <Location>
                <ImgContainer>
                    <BackgroundContainer $rotation={"90deg"} />
                    <Canada />
                </ImgContainer>
                <h3>Canada</h3>
                <LocationButton to='/locations'>See Location</LocationButton>               
            </Location>
            <Location>
                <ImgContainer>
                    <BackgroundContainer $rotation={"0deg"} />
                    <Australia />
                </ImgContainer>
                <h3>Australia</h3>
                <LocationButton to='/locations'>See Location</LocationButton>
            </Location>
            <Location>
                <ImgContainer>
                    <BackgroundContainer $rotation={"270deg"} />
                    <UnitedKingdom />
                </ImgContainer>
                <h3>United Kingdom</h3>
                <LocationButton to='/locations'>See Location</LocationButton>
            </Location>
        </LocationSelectContainer>
    )
}


