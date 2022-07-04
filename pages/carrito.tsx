import React, { useEffect, useState } from 'react';
import Options from '../components/Options';
import CardCar from '../components/CardCar';
import styles from '../styles.module.css';

export default function Carrito() {
  const [products, setProducts] = useState([]);
  let total = 0;

  useEffect(() => {
    if (localStorage.getItem('carrito')) {
      setProducts(JSON.parse(localStorage.getItem('carrito')));
    }
  }, []);

  return (
    <div className={styles.divPageCardCard}>
      <Options />
      {products ? (
        products.map((product) => {
          total = total + parseFloat(product.total);
          return <CardCar info={product} />;
        })
      ) : (
        <div>No tiene productos en el carrito</div>
      )}
      <div className={styles.divPriceTotal}>
        <div className={styles.divInfoCardTotal}>
          <p className={styles.textPriceCardCarP}>Subtotal: </p>
          <p className={styles.textPriceCardCar}>${total.toFixed(2)}</p>
        </div>
        <div className={styles.divInfoCardEnvio}>
          <p className={styles.textPriceCardCarPEnvio}>Envío TISSINI: </p>
          <p className={styles.textPriceCardCarEnvio}>$9.95</p>
        </div>
      </div>
    </div>
  );
}
