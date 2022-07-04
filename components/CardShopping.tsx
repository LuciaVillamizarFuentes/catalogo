import React from 'react';
import styles from '../styles.module.css';
import { useRouter } from 'next/router';

export default function CardShopping({ info }) {
  const router = useRouter();

  return (
    <div
      className={styles.divCardShopping}
      onClick={() => {
        router.push({
          pathname: './catalogo',
          query: `categorie=${info.category_id}`,
        });
      }}
    >
      <img
        src={`https://v3.tissini.app${info.image.url}`}
        className={styles.imgCardShopping}
      />
      <div className={styles.divDescripcionCardShopping}>
        <p className={styles.textCardNameProduct}>{info.name}</p>
        {/* <p className={styles.textCardCategories}>{info.categories.category}</p> */}
        <p className={styles.textCardPrice}>{info.price}</p>
      </div>
    </div>
  );
}
