import classes from './person.module.css';
import sanityClient from '../../../../client';
import React, { useEffect, useState } from 'react';

export default function Person({ index }) {
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
  console.log(testimonialsData);

  return (
    <div>
      {testimonialsData &&
        testimonialsData.map((opinion, index) => (
          <div key={index} id={index} className={classes.person}>
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
