import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
// import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const title = 'Harry Michael-Iacovou';
  const description = "Welcome, here you can find my CV, and how to contact me.";

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
