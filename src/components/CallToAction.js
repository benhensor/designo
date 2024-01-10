import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CallToActionPattern from '../assets/shared/desktop/bg-pattern-call-to-action.svg'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.$divHeight}px;
    margin-top: 90px;

    @media (max-width: 768px) {
        margin-top: 80px;
    }

    @media (max-width: 620px) {
        height: ${props => props.$divHeight / 2}px;
        margin-top: 160px;
    }

    @media (max-width: 375px) {
        margin-top: 100px;
    }

`

const Content = styled.div`
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
    background: url(${CallToActionPattern});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    width: 100%;
    min-height: 290px;
    border-radius: 15px;
    background-color: ${props => props.theme.primaryColors.peach};
    gap: 24px;
    color: ${props => props.theme.primaryColors.white};

    div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 24px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 90%;
        
    }

    @media (max-width: 620px) {
        bottom: -200px;
    }

    @media (max-width: 375px) {
        
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 72px 0;
    z-index: 1000;
    h2, p {
        padding: 0 10%;
    }

    @media (max-width: 768px) {
        h2 {
            padding: 0 20%;
        }
        p {
            padding: 0 10%;
        }
        padding: 57px 0 0 0;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 375px) {
        h2 {
            padding: 0 5%;
        }
        p {
            padding: 0 10%;
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled(Link)`
    background-color: ${props => props.theme.secondaryColors.lightGrey};
    color: ${props => props.theme.primaryColors.black};
    padding: 18px 24px;
    width: 150px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 32px 0 57px 0;
    transition: all 0.1s ease;
    &:hover {
        background-color: ${props => props.theme.secondaryColors.lightPeach};
        color: ${props => props.theme.primaryColors.white};
    }
`

export default function CallToAction() {

    const divRef = useRef(null)
    const [divHeight, setDivHeight] = useState(0)

    const updateHeight = () => {
        if (divRef.current) {
        setDivHeight(divRef.current.clientHeight)
        }
    }

    useEffect(() => {
        updateHeight()
        window.addEventListener('resize', updateHeight)

        return () => window.removeEventListener('resize', updateHeight)
    }, [])


    return (
        <Container $divHeight={divHeight}>
            <Content ref={divRef}>
                <InfoContainer>
                    <h2>Let’s talk about your project</h2>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </InfoContainer>
                <ButtonContainer>
                    <Button to='/contact'>get in touch</Button>
                </ButtonContainer>
            </Content>
        </Container>
    )
}