import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import styled from 'styled-components'
import CallToAction from '../components/CallToAction'
import Map from '../components/Map'
import TwoCircles from '../assets/shared/desktop/bg-pattern-two-circles.svg'

const LocationsContainer = styled.main`
    max-width: 1111px;
    margin: 125px auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 1199px) {
        margin: 125px 5% 0 5%;
    }

    @media (max-width: 768px) {
        margin: 125px 5% 0 5%;
        gap: 120px;
    }

    @media (max-width: 546px) {
        margin: 125px 0 0 0 ;
        gap: 40px;
    }

    @media (max-width: 375px) {
        margin: 95px 0 0 0 ;
    }
`

const LocationCard = styled.div`
    display: flex;
    flex-direction: ${props => {
        if (props.$id === 'loc1' || props.$id === 'loc3') return 'row';
        if (props.$id === 'loc2') return 'row-reverse';
        return 'row';
    }};
    gap: 32px;
    

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }

    @media (max-width: 546px) {
        gap: 0;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 66%;
    gap: 32px;
    background: url(${TwoCircles});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    background-color: ${props => props.theme.secondaryColors.lighterPeach};
    border-radius: 15px;
    width: 100%;
    padding: 48px 10%;
    h2 {
        color: ${props => props.theme.primaryColors.peach};
    }

    @media (max-width: 899px) {
        padding: 48px 5%;
    }

    @media (max-width: 546px) {
        text-align: center;
        border-radius: 0;
        h2 {
            font-size: 3.2rem;
        }
    }
`

const InfoBlock = styled.div`
    display: flex;
    gap: 15%;


    @media (max-width: 546px) {
        flex-direction: column;
        gap: 32px;
    }
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
`



export default function Locations() {

    const defaultZoom = [17];
    const defaultScroll = false;

    const canada = [43.64407062594163, -79.3945447653617]
    const canadaCenter = [43.64407062594163, -79.3945447653617]
    const australia = [-30.329213272592494, 149.78815406848258];
	const australiaCenter = [-30.329213272592494, 149.78815406848258];
	const australiaZoom = [13];

	const england = [51.72794620179462, -3.8604607297099958];
	const englandCenter = [51.72794620179462, -3.8604607297099958];



    return (
        <HelmetProvider>
            <Helmet>
                <title>Designo | Locations</title>
                <meta name="author" content="Ben Hensor"/>
                <meta name="description" content="Locations page for Designo - Where we bring ideas to life!" />
            </Helmet>
            <LocationsContainer>
                <LocationCard $id="loc1">
                    <Info>
                        <h2>Canada</h2>
                        <InfoBlock>
                            <Block>
                                <p><strong>Designo Central Office</strong></p>
                                <p>3886 Wellington Street</p>
                                <p>Toronto, Ontario M9C 3J5</p>
                            </Block>
                            <Block>
                                <p><strong>Contact</strong></p>
                                <p>P : +1 253-863-8967</p>
                                <p>M : contact@designo.co</p>
                            </Block>
                        </InfoBlock>
                    </Info>
                    <Map 
                        center={canadaCenter} 
                        country={canada} 
                        defaultZoom={defaultZoom} 
                        defaultScroll={defaultScroll}
                    />
                </LocationCard>
                <LocationCard $id="loc2">
                    <Info>
                        <h2>Australia</h2>
                        <InfoBlock>
                            <Block>
                                <p><strong>Designo AU Office</strong></p>
                                <p>19 Balonne Street</p>
                                <p>New South Wales 2443</p>
                            </Block>
                            <Block>
                                <p><strong>Contact</strong></p>
                                <p>P : (02) 6720 9092</p>
                                <p>M : contact@designo.au</p>
                            </Block>
                        </InfoBlock>
                    </Info>
                    <Map
                        center={australiaCenter}
                        country={australia}
                        defaultZoom={australiaZoom}
                        defaultScroll={defaultScroll}
                    />
                </LocationCard>
                <LocationCard $id="loc3">
                    <Info>
                        <h2>United Kingdom</h2>
                        <InfoBlock>
                            <Block>
                                <p><strong>Designo UK Office</strong></p>
                                <p>13 Colorado Way</p>
                                <p>Rhyd-y-fro SA8 9GA</p>
                            </Block>
                            <Block>
                                <p><strong>Contact</strong></p>
                                <p>P : 078 3115 1400</p>
                                <p>M : contact@designo.uk</p>
                            </Block>
                        </InfoBlock>
                    </Info>
                    <Map
                        center={englandCenter}
                        country={england}
                        defaultZoom={defaultZoom}
                        defaultScroll={defaultScroll}
                    />
                </LocationCard>

                <CallToAction />
                
            </LocationsContainer>
        </HelmetProvider>
    )
}