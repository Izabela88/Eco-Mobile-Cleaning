import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import About from '../components/about/about';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
}
