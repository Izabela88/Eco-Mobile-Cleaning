import React, { useEffect, useState } from 'react';
import classes from './cards.module.css';
import sanityClient from '../../client';

export default function Cards() {
  const [cardsData, setCardsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "cards"]{
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
      .then((data) => setCardsData(data))
      .catch(console.error);
  }, []);
  return (
    <div className={classes.cards}>
      <div className={classes.box}>
        {cardsData &&
          cardsData.map((card, index) => (
            <div key={index} className={classes.items}>
              <div className={classes.image}>
                <img src={card.mainImage.asset.url} alt={card.mainImage.alt} />
              </div>
              <div>{card.title}</div>
              <div>{card.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
