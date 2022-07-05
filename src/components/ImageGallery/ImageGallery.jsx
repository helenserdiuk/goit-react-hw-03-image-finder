import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ items, onClick }) {
  const elements = items.map(({ id, ...values }) => (
    <ImageGalleryItem key={id} {...values} onClick={onClick} />
  ));

  return <ul className={styles.ImageGallery}>{elements}</ul>;
}
