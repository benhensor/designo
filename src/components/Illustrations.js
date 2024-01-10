import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Passionate } from '../assets/home/desktop/illustration-passionate.svg'
import { ReactComponent as Resourceful } from '../assets/home/desktop/illustration-resourceful.svg'
import { ReactComponent as Friendly } from '../assets/home/desktop/illustration-friendly.svg'
import Circle from '../assets/shared/desktop/bg-pattern-small-circle.svg'

const IllustrationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    
    

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0 5%;
    }

    @media (max-width: 559px) {
        gap: 48px;
    }
`

const Illustration = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 48px;

    @media (max-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 559px) {
        flex-direction: column;
        
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

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
    h3 {
        
        text-transform: uppercase;
    }
    p {
        
    
    }

    @media (max-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
    }
    @media (max-width: 559px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export default function Illustrations() {
  return (
        <IllustrationContainer>
            <Illustration>
                <ImgContainer>
                    <BackgroundContainer $rotation={"0deg"} />
                    <Passionate />
                </ImgContainer>
                <InfoContainer>
                    <h3>Passionate</h3>
                    <p>
                        Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                    </p>
                </InfoContainer>
            </Illustration>
            <Illustration>
                <ImgContainer>
                    <BackgroundContainer $rotation={"270deg"} />
                    <Resourceful />
                </ImgContainer>
                <InfoContainer>
                    <h3>Resourceful</h3>
                    <p>
                        Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                    </p>
                </InfoContainer>
            </Illustration>
            <Illustration>
                <ImgContainer>
                    <BackgroundContainer $rotation={"90deg"} />
                    <Friendly />
                </ImgContainer>
                <InfoContainer>
                    <h3>Friendly</h3>
                    <p>
                        We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                    </p>
                </InfoContainer>
            </Illustration>
        </IllustrationContainer>
    )
}


