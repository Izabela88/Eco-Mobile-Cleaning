import classes from './prices.module.css';
import Cards from './cards';
import Image from 'next/image';

export default function Prices() {
  return (
    <section className={classes.prices}>
      <div className={classes.bg__image}>
        <Image
          src='/images/bg.jpg'
          alt='About image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={classes.heading}>
        <h1>
          <span>Prices</span> And Services
        </h1>
      </div>
      <Cards />
    </section>
  );
}
