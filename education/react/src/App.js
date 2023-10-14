import React from 'react'
import About from './About'
import Header from './Header'
import Contact from './Contact'
import Navbar from './Navbar'
import PageContent from './PageContent'
import ProjectSection from './ProjectSection'
import Footer from './Footer'

function App() {
    return (<>
        <div className="w3-content" style={{ maxWidth: 1100 }}>
        <Navbar/>
        <Header/>
        <PageContent/>
        <ProjectSection/>
        <About/>
        <Contact/>
        <div className="w3-container">
            <img
                src="https://www.w3schools.com/w3images/map.jpg"
                className="w3-image"
                style={{ width: "100%" }}
            />
        </div>
        </div>
        <Footer/>
    </>
    )
}

export default App