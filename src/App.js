import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import NavBar from './component/header/NavBar';
import Main from './component/main/Main';
import Projects from './component/projects/Projects';
import Skills from './component/skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
