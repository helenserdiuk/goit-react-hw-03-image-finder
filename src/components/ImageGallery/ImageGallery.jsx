import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ items, onClick }) {
  const elements = items.map(({ id, ...values }) => (
    <ImageGalleryItem key={id} {...values} onClick={onClick} />
  ));

  return <ul className={styles.ImageGallery}>{elements}</ul>;
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
