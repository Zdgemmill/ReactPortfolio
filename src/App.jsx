import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavMenu from './components/Nav'
import AboutMe from './components/pages/AboutMe';
import ProjectCards from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/pages/Footer';




// function App() {


//   return (
//     <>
//       <nav>
//         <NavMenu />
//       </nav>
//       <div>
//         <AboutMe />
//       </div>
//       <div>
//         <ProjectCards />
//       </div>


//     </>
//   )
// }

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <>
      <NavMenu setActivePage={setActivePage} />
      <div>
        {activePage === 'about' ? (
          <AboutMe />
        ) : activePage === 'projects' ? (
          <ProjectCards />
        ) : activePage === 'contact' ? (
          <Contact />
        ) : activePage === 'resume' ? (
          <Resume />
        ) : null}
      </div>
      <Footer />
    </>
  );
}





export default App
