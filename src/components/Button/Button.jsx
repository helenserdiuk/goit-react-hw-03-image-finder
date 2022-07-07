import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, title }) => {
  return (
    <button
      type="button"
      id="load-more"
      onClick={onClick}
      className={styles.Button}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
