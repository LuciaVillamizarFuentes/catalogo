import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import styles from '../styles.module.css';

export default function Imagenes({ info }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <>
      {!isImageLoaded && (
        <div className={styles.divLoadingImg}>
          <ReactLoading
            type={'spinningBubbles'}
            color='#f06292'
            width='10%'
            height='10%'
          />
        </div>
      )}
      <img
        style={isImageLoaded ? { display: 'block' } : { display: 'none' }}
        src={`https://v3.tissini.app${info.url}`}
        className={styles.imgCarouselCatalogo}
        onLoad={() => setTimeout(() => setIsImageLoaded(true), 2000)}
      />
    </>
  );
}
