import styles from './Button.module.css';

function Button({ children, onClick, type }) {
  console.log(styles);
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
