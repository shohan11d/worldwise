import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const navigae = useNavigate();

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigae('form');
      }}
    >
      <h1>map</h1>
      <h1></h1>
    </div>
  );
}

export default Map;
