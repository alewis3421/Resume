import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDom from 'react-dom/client'
import NavBar from './NavBar.jsx'
import './Index.css'
import Home from './Home.jsx'
import Edu from './Education_skills.jsx'
import About from './AboutPage.jsx'
import Projects from './Projects.jsx'

export default function App() {
  {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Routes>
            <NavBar />
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/education_skills'>
              <Edu />
            </Route>
            <Route path='/about_Me'>
              <About />
            </Route>
            <Route path='/Projects'>
              <Projects />
            </Route>
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);

/*function Index() {
  return (
    <div>
      <NavBar />
      <p>Hello and Welcome to my website. My name is Alexander Lewis and I'm a recent graduate from Texas 
        State University with a Bachelor's in Computer Science, while also minoring in Technology. I'm
        currently looking for oppurtunities in Front or Backend Development with hopes of one day being a
        Full Stack Developer. 
      </p>
    </div>
  )
}*/
