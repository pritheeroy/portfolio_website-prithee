import AboutMe from '../components/About/AboutMe';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <AboutMe />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default Home;
