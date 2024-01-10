import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import pin from '../assets/locations/desktop/icon-pin.svg'
import 'leaflet/dist/leaflet.css'

const StyledMap = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 15px;
    flex: 33%;
    z-index: 0;
    
    @media (max-width: 768px) {
        flex: 1;
        aspect-ratio: 16/9;
    }

    @media (max-width: 546px) {
        border-radius: 0;
        aspect-ratio: 1/1;
    }
`;

export default function Map({ center, country, defaultZoom, defaultScroll }) {

    const mapPin = new L.Icon({
		iconUrl: `${pin}`,
		iconSize: [30, 30],
	});

    return (
        <StyledMap as={MapContainer}
            center={center} 
            zoom={defaultZoom} 
            scrollWheelZoom={defaultScroll}>
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}@2x.png?api_key=aedb726c-c2ba-4d30-bc53-dfeac925f76b"
            />
            <Marker 
                position={country}
                icon={mapPin}
            />
            
        </StyledMap>
    )
}