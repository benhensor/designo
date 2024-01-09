import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import PageCardWeb from '../components/PageCardWeb'
import PageCardApp from '../components/PageCardApp'
import CallToAction from '../components/CallToAction'
import Change from '../assets/graphic-design/desktop/image-change.jpg'
import Boxed from '../assets/graphic-design/desktop/image-boxed-water.jpg'
import Science from '../assets/graphic-design/desktop/image-science.jpg'

const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 144px 0 160px 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 120px 5% 160px 5%;
    }
`

const PagePreview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 300px;
    gap: 24px;
    margin: 0 0 120px 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        height: auto;
        margin: 0 5% 0 5%;
    }

    @media screen and (max-width: 375px) {
        
    }
`

export default function GraphicDesign() {
    return (
        <section>
            <PageHeader
                title="Graphic Design" 
                byline="We deliver eye-catching branding materials that are tailored to meet your business objectives."
            />

            <Projects>
                <ProjectCard image={Change} title="Tim Brown" description="A book cover designed for Tim Brown’s new release, ‘Change’"/>
                <ProjectCard image={Boxed} title="Boxed Water" description="A simple packaging concept made for Boxed Water"/>
                <ProjectCard image={Science} title="Science!" description="A poster made in collaboration with the Federal Art Project"/>
            </Projects>

            <PagePreview>
                <PageCardWeb />
                <PageCardApp />
            </PagePreview>

            <CallToAction />
        </section>
    )
}