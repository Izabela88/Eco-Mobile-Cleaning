import Image from 'next/image';
import classes from './person1.module.css';

export default function Person1() {
  return (
    <div className={classes.container__woman}>
      <div className={classes.woman}>
        <Image
          src='/images/wmn.png'
          alt='About image'
          width={1000}
          height={500}
        />
      </div>
      <div className={classes.text}>
        <h4>Martyna</h4>
        <p>
          I recommend this guy, he made a miracle because my car is like new!
        </p>
      </div>
    </div>
  );
}
