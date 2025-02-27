import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'

function App() {
  return (
    <div className='body border'>
     <Header />
      <div id='main-con' className='border'>
        <div id='pfp'>
        <img src='Me.jpg' alt='Grad Photo'></img>
        </div>

        <p id='intro' className='border'>Hello and Welcome to my Resume Website. My name is Alexander Lewis and I'm a recent graduate of Texas State University with a Bachelor's Degree in Computer Science
        whilst minoring in Information Technology. Im analytical, driven, a problem solver and a fast learner. I enjoy encountering difficult problems and having to learning new things to 
        be able to solve them. I love learning new things and expanding my knowledge base, I like being a jack of all trades so to speak. My dream occupation at the time of writing is to be
        a Full-Stack Developer, so I feel that speaks to being a jack of all trades. As a hobby I enjoy building PCs and learning about new parts as they come out. I'm also an avid anime watcher
        and am just recently getting into watching more movies. 
        </p>
      </div>
      <div className='spacer border'></div>
      <div>
        
      </div>
    </div>
  )
}

export default App
