import Image from 'next/image';
import classes from './about.module.css';

export default function About() {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.image1}>
        <Image
          src='/images/i2.jpg'
          alt='About image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={classes.heading}>
        <h1>
          <span>About</span> Us
        </h1>
      </div>

      <div className={classes.box__container}>
        <div className={classes.box}>
          <h2>Great Value</h2>
          <p>
            We offer multiple services at a great value to meet your needs. We
            offer a premium service while saving your time and money.
          </p>
          <div className={`${classes.icon} ${classes.icon1}`}>
            <Image
              src='/images/icons/best-value.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className={classes.box}>
          <h2>Experienced Team</h2>
          <p>
            Our crew members are all trained and skilled and fully equiped with
            equipment and supplies needed that we can deliver the best results.
          </p>
          <div className={`${classes.icon} ${classes.icon2}`}>
            <Image
              src='/images/icons/team.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className={classes.box}>
          <h2>Eco Friendly Products</h2>
          <p>
            Our products are eco-friendly. We use only 3l of water for one car
            with absolutely zero-waste! We will clean your car inside and
            outside - with steam!
          </p>
          <div className={`${classes.icon} ${classes.icon3}`}>
            <Image
              src='/images/icons/plant-based.svg'
              alt='An Icon'
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className={classes.box}>
          <h2>Convenience</h2>
          <p>
            We are dedicated to providing quality service, customer satisfaction
            at a great value an area up to 35 miles from Derby.
          </p>
          <div className={`${classes.icon} ${classes.icon4}`}>
            <Image
              src='/images/icons/map-pointer.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className={classes.box}>
          <h2>Time Saving</h2>
          <p>
            Don't waste your precious time! We will come to you and clean your
            car!
          </p>
          <div className={`${classes.icon} ${classes.icon5}`}>
            <Image
              src='/images/icons/clock.png'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className={classes.box}>
          <h2>Never Wet Surfaces!</h2>
          <p>
            ​The steam remove even strong dirt from the surface of the fabric
            without getting it wet!
          </p>
          <div className={`${classes.icon} ${classes.icon6}`}>
            <Image
              src='/images/icons/water.svg'
              alt='An Icon'
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
