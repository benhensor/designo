import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import PageCardApp from '../components/PageCardApp'
import PageCardGraphic from '../components/PageCardGraphic'
import CallToAction from '../components/CallToAction'
import Express from '../assets/web-design/desktop/image-express.jpg'
import Transfer from '../assets/web-design/desktop/image-transfer.jpg'
import Photon from '../assets/web-design/desktop/image-photon.jpg'
import Builder from '../assets/web-design/desktop/image-builder.jpg'
import Blogr from '../assets/web-design/desktop/image-blogr.jpg'
import Camp from '../assets/web-design/desktop/image-camp.jpg'

const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 0 0 160px 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0 5% 120px 5%;
    }

    @media screen and (max-width: 375px) {
        margin: 0 5% 80px 5%;
    }
`

const PagePreview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 300px;
    gap: 24px;
    margin: 0 0 0 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        height: auto;
        margin: 0 5% 0 5%;
    }
`

export default function WebDesign() {
    return (
        <section>
            <PageHeader 
                title="Web Design"
                byline="We build websites that serve as powerful marketing tools and bring memorable brand experiences." 
            />
            <Projects>
                <ProjectCard image={Express} title="Express" description="A multi-carrier shipping website for ecommerce businesses"/>
                <ProjectCard image={Transfer} title="Transfer" description="Site for low-cost money transfers and sending money within seconds"/>
                <ProjectCard image={Photon} title="Photon" description="A state-of-the-art music player with high-resolution audio and DSP effects"/>
                <ProjectCard image={Builder} title="Builder" description="Connects users with local contractors based on their location"/>
                <ProjectCard image={Blogr} title="Blogr" description="Blogr is a platform for creating an online blog or publication"/>
                <ProjectCard image={Camp} title="Camp" description="Get expert training in coding, data, design, and digital marketing"/>
            </Projects>

            <PagePreview>
                <PageCardApp />
                <PageCardGraphic />
            </PagePreview>

            <CallToAction />
        </section>
    )
}