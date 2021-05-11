import React, { useEffect, useState } from 'react';
import classes from './cards.module.css';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';

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
     content
      }`
      )
      .then((data) => setCardsData(data))
      .catch(console.error);
  }, []);
  return (
    <div className={classes.cards}>
      {cardsData &&
        cardsData.map((card, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.image}>
              <img src={card.mainImage.asset.url} alt={card.mainImage.alt} />
            </div>
            <div className={classes.text}>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <BlockContent blocks={card.content} />
            </div>
          </div>
        ))}
    </div>
  );
}
