import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ServicesPage from "./Pages/ServicesPage"
import ProjectPage from "./Pages/ProjectPage"
import PortFolioPage from "./Pages/PortFolioPage"
import FaqPage from "./Pages/FaqPage"
import BlogPage from "./Pages/BlogPage"
import SinglePage from "./Pages/SinglePage"
import ErrorPage from "./Pages/ErrorPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/aboutPage" element={ <AboutPage /> } />
      <Route path="/servicesPage" element={ <ServicesPage /> } />
      <Route path="/projectPage" element={ <ProjectPage />} />
      <Route path="/portfolioPage" element={ <PortFolioPage />} />
      <Route path="/faqPage" element={ <FaqPage />} />
      <Route path="/blogPage" element={ <BlogPage />} />
      <Route path="/singlePage" element={ <SinglePage />} />
      <Route path="/errorPage" element={ <ErrorPage />} />
    </Routes>

  
  )
}

export default App
