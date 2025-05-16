import { useSimpleGallery } from "../../app/hooks/useSimpleGallery";
import styles from "./SimpleGallery.module.scss";

type GalleryItem = {
  src: string;
  alt?: string;
  name?: string;
  role?: string;
};

type SimpleGalleryProps = {
  images: GalleryItem[] | string[];
  initialIndex?: number;
  showControls?: boolean;
  showDots?: boolean;
  showInfo?: boolean;
  className?: string;
};

export const SimpleGallery = ({
  images,
  initialIndex = 0,
  showDots = true,
  showInfo = true,
  className = "",
}: SimpleGalleryProps) => {
  const normalizedImages = images.map(img => 
    typeof img === 'string' ? { src: img } : img
  );
  
  const { currentImage, currentIndex, goTo } = useSimpleGallery(
    normalizedImages.map(img => img.src),
    initialIndex
  );

  if (!images || images.length === 0) return null;

  const currentItem = normalizedImages[currentIndex];

  return (
    <div className={`${styles.simpleGallery} ${className}`}>
      <div className={styles.galleryMain}>
        <img
          src={currentItem.src}
          alt={currentItem.alt || `Image ${currentIndex + 1}`}
          className={styles.galleryImage}
        />
      </div>

      {showInfo && currentItem.name && (
        <div className={styles.imageInfo}>
          <h3>{currentItem.name}</h3>
          {currentItem.role && <p>{currentItem.role}</p>}
        </div>
      )}

      {showDots && (
        <div className={styles.galleryDots}>
          {normalizedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};