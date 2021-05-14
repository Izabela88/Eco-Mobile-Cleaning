import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import About from '../components/about/about';
import Prices from '../components/prices/prices';
import Persons from '../components/testimonials/persons/persons';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Prices />
      <Persons />
    </Fragment>
  );
}
