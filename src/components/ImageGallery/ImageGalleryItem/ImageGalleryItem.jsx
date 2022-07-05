import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL, tags)}
      />
    </li>
  );
};

export default ImageGalleryItem;
