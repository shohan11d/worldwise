import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from './Message';

function CityList({ cities, isLoading }) {
  // if (isLoading) return <Spinner />;
  console.log(cities);
  // if (!cities.length) return <Message message={'add your fist city'} />;
  return (
    <ul className={styles.citylist}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
