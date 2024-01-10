import React from 'react'
import styled from 'styled-components'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import PageCardWeb from '../components/PageCardWeb'
import PageCardGraphic from '../components/PageCardGraphic'
import CallToAction from '../components/CallToAction'
import AirFilter from '../assets/app-design/desktop/image-airfilter.jpg'
import Eyecam from '../assets/app-design/desktop/image-eyecam.jpg'
import Faceit from '../assets/app-design/desktop/image-faceit.jpg'
import Todo from '../assets/app-design/desktop/image-todo.jpg'
import Loopstudios from '../assets/app-design/desktop/image-loopstudios.jpg'

const AppDesignContainer = styled.main`
    max-width: 1111px;
    margin: 125px auto 0 auto;
    @media (max-width: 1199px) {
        margin: 125px 5% 0 5%;
    }
    @media (max-width: 768px) {
        margin: 125px 0 0 0;
    }
    @media (max-width: 375px) {
        margin: 95px 0 0 0 ;
    }
`

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

    @media screen and (max-width: 375px) {
        margin: 0 5% 0 5%;
    }
`

export default function AppDesign() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Designo | App Design</title>
                <meta name="author" content="Ben Hensor"/>
                <meta name="description" content="App Design page for Designo - Where we bring ideas to life!"
                />
            </Helmet>
            <AppDesignContainer>
                <PageHeader
                    title="App Design" 
                    byline="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
                />

                <Projects>
                    <ProjectCard image={AirFilter} title="Airfilter" description="Solving the problem of poor indoor air quality by filtering the air"/>
                    <ProjectCard image={Eyecam} title="Eyecam" description="Product that lets you edit your favorite photos and videos at any time"/>
                    <ProjectCard image={Faceit} title="Faceit" description="Get to meet your favorite internet superstar with the faceit app"/>
                    <ProjectCard image={Todo} title="Todo" description="A todo app that features cloud sync with light and dark mode"/>
                    <ProjectCard image={Loopstudios} title="Loopstudios" description="A VR experience app made for Loopstudios"/>
                </Projects>

                <PagePreview>
                    <PageCardWeb />
                    <PageCardGraphic />
                </PagePreview>

                <CallToAction />
            </AppDesignContainer>
        </HelmetProvider>
    )
}