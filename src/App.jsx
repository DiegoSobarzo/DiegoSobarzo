import { useState } from 'react'
import './css/App.css'

function App() {

  const toggleDarkMode = () =>{
      document.documentElement.classList.toggle('dark')
  };

  const toggleMobileMenu = () =>{
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden")
  }

  return (
    <>
    <div className="bg-white dark:bg-slate-800 flex flex-col h-screen justify-between">
      <header id="Header" className="sticky top-0 z-30 w-screen px-6 bg-white dark:bg-slate-600">
        {/**navbar*/}
        <nav>
          <div className="max-w-6xl mx-auto border">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  {/**logo*/}
                  <img className="w-20" src="src/assets/react.svg" alt="Web Site Logo" />
                  {/**Name*/}
                  <span className="font-extrabold"> DiegoSobarzo.dev</span>
                </div>
              </div>
              <div className="flex space-x-2">
                {/**secondary nav*/}
                <div className="hidden md:flex items-center">
                  <a className="px-4"href="#">Home</a>
                  <a className="px-4"href="#">About Me</a>
                  <a className="px-4"href="#">Resume</a>
                  <a className="px-4"href="#">Portfolio</a>
                  <a className="px-4"href="#">Contact</a>
                  <button className="px-4" onClick={toggleDarkMode}>O</button>
                </div>
                <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
                  <button id="mobile-menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**mobile nav*/}
          <div id="mobile-menu" className="hidden md:hidden sticky">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-slate-500">Home</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-slate-500">About</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-slate-500">Resume</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-slate-500">Portfolio</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-slate-500">Contact</a>
            <a href="#" onClick={toggleDarkMode} className="block py-2 px-4 text-sm hover:bg-slate-500">O</a>
          </div>
        </nav>
      </header>
      {/**content*/}
      <main id="Content">
        <div className="py-32 text-center">
          <h1 className="font-extrabold text-5xl">FullStack Developer</h1>
          <p>Hello there! I'm Diego Sobarzo +5 pasionate fullstack developer with more than 8 years of experience</p>
        </div>

        <div className="py-40 text-center">
          <h1 className="text-4xl">About Me</h1>
          <p></p>
        </div>

        <div className="py-40 text-center">
          <h1 className="text-4xl">Resume</h1>
          <h2>Job Experience</h2>
            <h3>Sistemas Informatico Abiertos</h3>
            <p></p>
            <hr />
            <h3>NFQ Advisory Services</h3>
            <p></p>
            <hr />
            <h3>Oesia Networks</h3>
            <p></p>
          <h2>Education</h2>
            <h3>C.F.G.S. Desarrollo de aplicaciones multiplataforma.</h3>
            <h3>C.F.G.M. Sistemas Informaticos y Redes.</h3>
          <h2>Certifications & languages</h2>
        </div>

        <div className="py-40 text-center">
          <h1 className="text-4xl">Portfolio</h1>
          <p>Proyects that i have developed over the years</p>
          <hr />
          <h2>Alvaro Health</h2>
          <p>this is an app to help personal trainers to follow the progess of al theri students</p>
          <hr/>
          <h2>Poke Api Example</h2>
          <p>This app is an example of fetching data from an external api and show it nicely</p>
          <hr />
          <h2></h2>
        </div>

        <div className="py-40 text-center">
          <h1 className="text-4xl">Contact</h1>
          <p>Ways to contact me</p>
        </div>

      </main>
       {/**content*/}
      <footer id="Footer" className="sticky bottom-0 z-30 w-screen px-6 bg-white dark:bg-slate-600">
        <div className="min-w-full bg-slate-700 h-10">
          2023
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
