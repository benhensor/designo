import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 559px) {
        display: flex;
        flex-direction: column;
    }
`

const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${props => props.theme.secondaryColors.lighterPeach};
    padding: 24px;
    gap: 24px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    h3 {
        text-transform: uppercase;
        color: ${props => props.theme.primaryColors.peach};
        transition: all 0.15s ease-in-out;
    }
    p {
        color: ${props => props.theme.primaryColors.black};
        transition: all 0.15s ease-in-out;
    }

    &:hover {
        background-color: ${props => props.theme.primaryColors.peach};
        h3, p {
            color: ${props => props.theme.primaryColors.white};

        }
    }

    @media screen and (max-width: 768px) {
        padding: 40px 5%;
    }
`

export default function ProjectCard({ image, title, description }) {
  return (
    <Container>
        <ImgContainer>
            <img src={image} alt={title} />
        </ImgContainer>
        <InfoContainer>
            <h3>{title}</h3>
            <p>{description}</p>
        </InfoContainer>
    </Container>
  )
}