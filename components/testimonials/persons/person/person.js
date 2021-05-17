import classes from './person.module.css';
import sanityClient from '../../../../client';
import React, { useEffect, useState } from 'react';

export default function Person() {
  const [testimonialsData, setTestimonialsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonials"]{
        title,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        description,
    
      }`
      )
      .then((data) => setTestimonialsData(data))
      .catch(console.error);
  }, []);

  return (
    <div className={classes.container}>
      {testimonialsData &&
        testimonialsData.map((opinion, index) => (
          <div key={index} className={classes.box}>
            <div className={classes.container__image}>
              <img
                src={opinion.mainImage.asset.url}
                alt={opinion.mainImage.alt}
              />
            </div>

            <div className={classes.text}>
              <h1>{opinion.title}</h1>
              <p>{opinion.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
