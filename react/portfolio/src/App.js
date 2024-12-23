import './css/style.css'
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Logo from './components/header/Logo.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
import About from './components/content/About.jsx';
import SectionWrap from './components/content/SectionWrap.jsx';
import Majors from './components/content/Majors.jsx';
import Jobs from './components/content/Jobs.jsx';
import Skills from './components/content/Skills.jsx';
import Coding from './components/content/Coding.jsx';
import Article from './components/content/Article.jsx';
import Categories from './components/content/Categories.jsx';
import Projexts from './components/content/Projexts.jsx';
import Testimonials from './components/content/Testimonials.jsx';
import ArrowUp from './components/content/ArrowUp.jsx';
import Top from './components/footer/Top.jsx';
import ContentLinks from './components/footer/ContentLink.jsx';
import Bottom from './components/footer/Bottom.jsx';
import ContentLink from './components/footer/ContentLink.jsx';



function App() {
  return (
    <>
    <Header>
      <Logo 
        img="images/bbang.png"
        name="ssussu"
      />
      <ToggleButton />
      <MenuList />
      <ToggleButton />
    </Header>
    <Content>
      <h1>Content</h1>
      <Home 
        img="images/bbang.png"
        name="ssussu"
      />
      <SectionWrap 
      id="about"
      title="About Me"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iure natus, temporibus perspiciatis repudiandae nostrum modi
        doloremque expedita non eius ipsum! Beatae porro adipisci 
        omnis architecto dignissimos. Iusto ipsa inventore adipisci.">
          <Majors />
          <Jobs />
      </SectionWrap>
      <SectionWrap 
      id="skill"
      title="My Skills"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iure natus, temporibus perspiciatis repudiandae nostrum modi
        doloremque expedita non eius ipsum! Beatae porro adipisci 
        omnis architecto dignissimos. Iusto ipsa inventore adipisci.">
          <Skills>
            <Coding />
            <Article type="Tools"/>
            <Article type="Etc"/>
          </Skills>
      </SectionWrap>
      <SectionWrap
        id="work"
        title="My Woek"
        description="Project"
        >
          <Categories />
          <Projexts />
        </SectionWrap>
        <SectionWrap
          id="testimonial"
          title="Testimonial"
          description="See what they say about me">
            <Testimonials />
          </SectionWrap>
          <ArrowUp />
    </Content>
    <Footer>
      <Top 
      title="Let's talk"
      description="jeon.developer.judy@gmail.com"/>
      <ContentLink />
      <Bottom />
    </Footer>
    </>
  );
}

export default App;
