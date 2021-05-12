import classes from './prices.module.css';
import Cards from './cards';

export default function Prices() {
  return (
    <div className={classes.prices}>
      <div className={classes.heading}>
        <h1>
          <span>Our</span> Prices
        </h1>
        <h2>and services</h2>
      </div>
      <Cards />
    </div>
  );
}
