import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoDark from '../assets/shared/desktop/logo-dark.png'
import IconClose from '../assets/shared/mobile/icon-close.svg'
import IconBurger from '../assets/shared/mobile/icon-hamburger.svg'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    height: ${props => props.$scrolled ? '95px' : '125px'};
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background: ${props => props.theme.primaryColors.white};
    z-index: 100;
    transition: height 0.25s ease-in-out;

    @media screen and (max-width: 1199px) {
        padding: 35px 5%;
    }
`

const HeaderContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1111px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    width: 196px;
    height: 24px;
    img {
        width: 100%;
    }
`

const Nav = styled.nav`
    ul {
        display: flex;
        gap: 42px;
        list-style: none;
        font-size: 1.4rem;
        font-weight: 400;
        color: ${props => props.theme.secondaryColors.darkGrey};
        text-transform: uppercase;
        li {
            cursor: pointer;
            transition: color 0.1s ease;
            &:hover {
                text-decoration: underline 0.5px solid ${props => props.theme.secondaryColors.darkGrey};
            }
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`

const StyledLink = styled(Link)`
    color: ${props => props.theme.secondaryColors.darkGrey};
    text-decoration: none;
    transition: color 0.1s ease;
    &:hover {
        text-decoration: underline 0.5px solid ${props => props.theme.secondaryColors.darkGrey};
    }

    @media screen and (max-width: 768px) {
        color: ${props => props.theme.primaryColors.white};
        &:hover {
            text-decoration: underline 0.5px solid ${props => props.theme.secondaryColors.white};
        }
    }
`

const MenuControls = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: block;
        width: 24px;
        height: 24px;
    }
`

const MobileMenu = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 235px;
    background-color: ${props => props.theme.primaryColors.black};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
    transform: translateY(${props => props.$isOpen ? '95px' : '-100%'});
    opacity: ${props => props.$isOpen ? '1' : '0'};
    z-index: 1;
    transition: all 0.15s ease-in-out;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

const MobileNav = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        gap: 32px;
        list-style: none;
        font-size: 2.4rem;
        font-weight: 400;
        color: ${props => props.theme.secondaryColors.white};
        text-transform: uppercase;
        li {
            cursor: pointer;
            transition: color 0.1s ease;
            &:hover {
                text-decoration: underline 0.5px solid ${props => props.theme.secondaryColors.white};
            }
        }
    }
`

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 150
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }
        document.addEventListener('scroll', onScroll)
        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [scroll])



    const handleClicked = () => {
        setIsMenuOpen(!isMenuOpen)
    }
   
  return (
        <StyledHeader $scrolled={scroll}>
            <HeaderContent>
                <Logo>
                    <Link to='/'><img src={LogoDark} alt='Designo logo' /></Link> 
                </Logo>
                <Nav>
                    <ul>
                        <li><StyledLink to='/about'>Our Company</StyledLink></li>
                        <li><StyledLink to='/locations'>Locations</StyledLink></li>
                        <li><StyledLink to='/contact'>Contact</StyledLink></li>
                    </ul>
                </Nav>
                <MenuControls onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <img src={IconClose} alt='Close menu' /> : <img src={IconBurger} alt='Open menu' />}
                </MenuControls>
                <MobileMenu $isOpen={isMenuOpen}>
                    <MobileNav>
                        <ul>
                            <li onClick={handleClicked}><StyledLink to='/about'>Our Company</StyledLink></li>
                            <li onClick={handleClicked}><StyledLink to='/locations'>Locations</StyledLink></li>
                            <li onClick={handleClicked}><StyledLink to='/contact'>Contact</StyledLink></li>
                        </ul>
                    </MobileNav>
                </MobileMenu> 
            </HeaderContent>
        </StyledHeader>      
    )
}