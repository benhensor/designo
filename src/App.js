import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/Theme'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Home from './pages/Home'
import WebDesign from './pages/WebDesign'
import AppDesign from './pages/AppDesign'
import GraphicDesign from './pages/GraphicDesign'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'




function App() {    
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
            <Header/>
            <ScrollToTop />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/app-design" element={<AppDesign />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
        </ThemeProvider>
    )
}

export default App