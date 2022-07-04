import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import styles from '../styles.module.css';
import Carousel from 'react-grid-carousel';
import Options from '../components/Options';
import ButtonAddCar from '../components/ButtonAddCar';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Catalogo() {
  const router = useRouter();
  const categoria = router.query.categorie ? router.query.categorie : '9';
  const { data } = useSWR(
    `https://v3.tissini.app/api/v3/categories/${categoria}/products/multivendor`,
    fetcher
  );

  return (
    <div>
      {data && data.products && (
        <div className={styles.divCategories}>
          <Options />
          {data.products.map((categories) => (
            <>
              {
                <div className={styles.divCarouselCatalogo}>
                  <Carousel
                    cols={1}
                    rows={1}
                    loop
                    containerStyle={{
                      margin: 'auto',
                      'margin-top': '1rem',
                      'min-width': '320px',
                      'max-width': '480px',
                    }}
                  >
                    {categories.images.map((produtc) => (
                      <Carousel.Item>
                        <img
                          src={`https://v3.tissini.app${produtc.url}`}
                          className={styles.imgCarouselCatalogo}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <ButtonAddCar info={categories} />
                </div>
              }
            </>
          ))}
        </div>
      )}
    </div>
  );
}
