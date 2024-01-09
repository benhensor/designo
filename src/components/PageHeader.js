import React from 'react'
import styled from 'styled-components'
import PageHeaderPattern from '../assets/web-design/desktop/bg-pattern-intro-web.svg'

const Container = styled.div`
    background: url(${PageHeaderPattern});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${props => props.theme.primaryColors.peach};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: ${props => props.theme.primaryColors.white};
    padding: 64px 0;
    margin-bottom: 120px;
    gap: 24px;

    @media screen and (max-width: 768px) {
        margin: 0 5%;
    }
`

export default function PageHeader({ title, byline }) {
  return (
    <Container>
        <h1>{title}</h1>
        <p>{byline}</p>
    </Container>
  )
}