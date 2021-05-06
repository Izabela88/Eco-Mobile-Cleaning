import Image from 'next/image';
import classes from './logo.module.css';

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Image src='/images/Logo1.png' alt='A Logo' width={100} height={100} />
    </div>
  );
}
