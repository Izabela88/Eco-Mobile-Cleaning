import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.home}>
      <div className={classes.image}>
        <Image
          src='/images/home-img.jpg'
          alt='A Hero image'
          width={1300}
          height={900}
          layout='responsive'
        />
      </div>
      <div className={classes.heading}>
        <div className={classes.heading1}>
          <h1>welcome to</h1> <br />
        </div>
        <div className={classes.heading2}>
          <h2>
            <span>Eco</span> Mobile <br />
            Cleaning
          </h2>
        </div>
      </div>
      <div className={classes.text}>
        <p>
          <span>Mobile</span> Car Wash <br /> <span>Detailing</span> services
          with a personal touch <br />
          <span>Your</span> car is always in great hands with us
        </p>
        <div className={classes.btn}>
          <a href='#'>Prices</a>
        </div>
      </div>
    </section>
  );
}
