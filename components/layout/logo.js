import Image from 'next/image';
import classes from './logo.module.css';

export default function Logo() {
  return (
    <div>
      <Image src='/images/Logo1.png' alt='A Logo' width={50} height={50} />
    </div>
  );
}
