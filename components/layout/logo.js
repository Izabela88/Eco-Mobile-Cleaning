import Image from 'next/image';
import classes from './logo.module.css';

export default function Logo() {
  return (
    <Image src='/images/logol.png' alt='A Logo' width={150} height={150} />
  );
}
