import Image from 'next/image';
import classes from './about.module.css';

export default function About() {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.image1}>
        <Image
          src='/images/img6.jpg'
          alt='About image'
          width={500}
          height={500}
        />
      </div>

      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.icon}>
            <Image
              src='/images/icons/map-pointer.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
          <h2>CONVENIENCE</h2>
          <p>
            We are dedicated to providing quality service, customer satisfaction
            at a great value in multiple locations offering convenient hours.
          </p>
        </div>

        <div className={classes.box}>
          <div className={classes.icon}>
            <Image
              src='/images/icons/best-value.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
          <h2>GREAT VALUE</h2>
          <p>
            We offer multiple services at a great value to meet your needs. We
            offer a premium service while saving your time and money.
          </p>
        </div>

        <div className={classes.box}>
          <div className={classes.icon}>
            <Image
              src='/images/icons/team.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
          <h2>EXPERIENCED TEAM</h2>
          <p>
            Our crew members are all trained and skilled and fully equiped with
            equipment and supplies needed that we can deliver the best results.
          </p>
        </div>

        <div className={classes.box}>
          <div className={classes.icon}>
            <Image
              src='/images/icons/plant-based.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
          <h2>ECO PRODUCTS</h2>
          <p>
            Our products are eco-friendly. We use less than a gallon of water
            with absolutely zero-waste.
          </p>
        </div>
      </div>
    </section>
  );
}
