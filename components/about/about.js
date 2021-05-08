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

      <div className={`${classes.box} ${classes.box1}`}>
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
      <div className={`${classes.box} ${classes.box2}`}>
        <div className={classes.icon}>
          <Image
            src='/images/icons/plant-based.svg'
            alt='An Icon'
            width={70}
            height={70}
          />
        </div>
        <h2>ECO FRIENDLY</h2>
        <p>
          Our products are eco-friendly. We use only 3l of water for one car
          with absolutely zero-waste.
        </p>
      </div>
      <div className={`${classes.box} ${classes.box3}`}>
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
          at a great value an area up to 35 miles from Derby We will come and
          clean your car - seats, upholstery and cockpit, and outside - with
          steam.
        </p>
      </div>

      <div className={`${classes.box} ${classes.box4}`}>
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
          offer a premium service while saving your time and money. ​The steam
          remove even strong dirt from the surface of the fabric without getting
          it wet.
        </p>
      </div>
    </section>
  );
}
