import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import styles from '../styles.module.css';

export default function ImgCategories({ info }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <>
      {!isImageLoaded && (
        <div className={styles.imgCategoriesLoading}>
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
        src={`https://v3.tissini.app${info.image}`.replace(
          '/img/categories/',
          '/img/categories/multivendor/'
        )}
        className={styles.imgCategories}
        onLoad={() => setTimeout(() => setIsImageLoaded(true), 2000)}
      />
    </>
  );
}
