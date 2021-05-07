import Image from 'next/image';
import classes from './about.module.css';

export default function About() {
  return (
    <section className={classes.about}>
      <div className={classes.image1}>
        <Image
          src='/images/img6.jpg'
          alt='About image'
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
