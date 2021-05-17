import classes from './persons.module.css';
import Person from './person/person';

export default function Persons() {
  return (
    <section className={classes.persons}>
      <div className={classes.persons__heading}>
        <h1>
          <span>Our</span> Cursomers Love Us!
        </h1>
      </div>
      <Person />
    </section>
  );
}
