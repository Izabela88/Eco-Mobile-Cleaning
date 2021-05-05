import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.home}>
      <div className={classes.container}>
        <div className={classes.image}>
          <Image
            src='/images/img-home.jpg'
            alt='A Hero image'
            width={1300}
            height={900}
            layout='responsive'
          />
        </div>
        <h1>Welcome To Eco Mobile Cleaning</h1>
        <p>Detailing services with a personal touch</p>
      </div>
    </section>
  );
}
