import Image from 'next/image';
import classes from './about.module.css';

export default function About() {
  return (
    <section className={classes.about}>
      <div>
        <Image />
      </div>
    </section>
  );
}
