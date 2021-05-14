import classes from './persons.module.css';
import Person1 from '../persons/person1/person1';

export default function Persons() {
  return (
    <section className={classes.persons}>
      <Person1 />
    </section>
  );
}
