import React from 'react';
import styles from '../styles.module.css';

export default function CardCar({ info }) {
  return (
    <div className={styles.divCardCar}>
      <img
        src={`https://v3.tissini.app${info.img}`}
        className={styles.imgCardCar}
      />
      <div className={styles.divInfoCardCar}>
        <h3 style={{ margin: '10px' }}>{info.name}</h3>
        <hr style={{ color: 'rgba(0, 0, 0, 0.12)' }} />
        <div className={styles.divInfoCard}>
          SKU:
          <p className={styles.textDescriptionCardCar}>{info.variant.sku}</p>
        </div>
        <div className={styles.divInfoCard}>
          Talla:
          <p className={styles.textDescriptionCardCar}>{info.variant.size}</p>
        </div>
        <div className={styles.divInfoCard}>
          Cantidad:
          <p className={styles.textDescriptionCardCar}>{info.cantSelect}</p>
        </div>
        <div className={styles.divInfoCard}>
          Unidad:
          <p className={styles.textDescriptionCardCar}>{info.price}</p>
        </div>
        <p className={styles.textPriceCardCar}>${info.total.toFixed(2)}</p>
      </div>
    </div>
  );
}
