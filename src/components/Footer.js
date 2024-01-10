import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoLight from '../assets/shared/desktop/logo-light.png'
import IconFacebook from '../assets/shared/desktop/icon-facebook.svg'
import IconYoutube from '../assets/shared/desktop/icon-youtube.svg'
import IconTwitter from '../assets/shared/desktop/icon-twitter.svg'
import IconPinterest from '../assets/shared/desktop/icon-pinterest.svg'
import IconInstagram from '../assets/shared/desktop/icon-instagram.svg'

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.primaryColors.black};
    display: flex;
    justify-content: center;
    
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 1111px;

    @media screen and (max-width: 375px) {
        padding: 0;
    }
`

const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 144px 0 40px 0;

    @media screen and (max-width: 1199px) {
        padding: 140px 5% 70px 5%;
    }

    @media screen and (max-width: 768px) {
        padding: 140px 5% 40px 5%;
    }

    @media screen and (max-width: 620px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 300px 0 0 0;
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    width: 196px;
    height: 24px;
    img {
        width: 196px;
    }

    @media screen and (max-width: 620px) {
        width: 100%;
        height: 100%;
        padding-bottom: 40px;
        border-bottom: 1px solid ${props => props.theme.secondaryColors.darkGrey};
    }
`

const Nav = styled.nav`
    ul {
        display: flex;
        gap: 42px;
        list-style: none;
        font-size: 1.4rem;
        font-weight: 400;
        color: ${props => props.theme.secondaryColors.lightGrey};
        text-transform: uppercase;
        li {
            cursor: pointer;
            transition: color 0.1s ease;
            &:hover {
                text-decoration: underline 0.5px solid ${props => props.theme.secondaryColors.lightGrey};
            }
        }

        @media screen and (max-width: 620px) {
            margin-bottom: 40px;
        }

        @media screen and (max-width: 375px) {
            flex-direction: column;
            align-items: center;
            gap: 32px;
        }
    }
`

const StyledLink = styled(Link)`
    color: ${props => props.theme.primaryColors.white};
    text-decoration: none;
    transition: color 0.1s ease;
    &:hover {
        text-decoration: underline 0.5px solid ${props => props.theme.secondaryColors.darkGrey};
    }
`

const FooterBottom = styled.div`
    padding: 30px 0 70px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 1px solid ${props => props.theme.secondaryColors.darkGrey};

    @media screen and (max-width: 1199px) {
        padding: 30px 5% 70px 5%;
    }

    @media screen and (max-width: 768px) {
        padding: 30px 5% 70px 5%;
    }

    @media screen and (max-width: 620px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
        border-top: transparent;
        padding: 0 0 70px 0;
    }
`

const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.secondaryColors.lightGrey};
    opacity: 0.4;
    span: {
        font-weight: 500; 
    }
    p {
        font-size: 1.4rem;
        line-height: 2.6rem;
    }

    @media screen and (max-width: 620px) {
        align-items: center;
    }
`

const FooterIcons = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    gap: 16px;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    filter: brightness(100%) saturate(100%);
    transition: filter 0.1s ease;

    &:hover {
        filter: brightness(130%) saturate(120%);
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContent>
                <FooterTop>
                    <Logo>
                        <Link to='/'><img src={LogoLight} alt="Designo logo" /></Link>
                    </Logo>
                    <Nav>
                        <ul>
                            <li><StyledLink to='/about'>Our Company</StyledLink></li>
                            <li><StyledLink to='/locations'>Locations</StyledLink></li>
                            <li><StyledLink to='/contact'>Contact</StyledLink></li>
                        </ul>
                    </Nav>
                </FooterTop>
                <FooterBottom>
                    <FooterInfo>
                        <span>Designo Central Office</span>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </FooterInfo>
                    <FooterInfo>
                        <span>Contact Us &#40;Central Office&#41;</span>
                        <span>P: +1 253-863-8967</span>
                        <span>M: contact@designo.co</span>
                    </FooterInfo>
                    <FooterIcons>
                        <Icon src={IconFacebook} alt="Facebook icon" />
                        <Icon src={IconYoutube} alt="Youtube icon" />
                        <Icon src={IconTwitter} alt="Twitter icon" />
                        <Icon src={IconPinterest} alt="Pinterest icon" />
                        <Icon src={IconInstagram} alt="Instagram icon" />
                    </FooterIcons>
                </FooterBottom> 
            </FooterContent>          
        </StyledFooter>
    )
}