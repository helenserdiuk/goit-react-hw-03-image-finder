import styles from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <button
      type="button"
      id="load-more"
      onClick={onClick}
      className={styles.Button}
    >
      Load more
    </button>
  );
};

export default Button;
