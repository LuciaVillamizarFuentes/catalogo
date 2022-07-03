import React from 'react';
import Options from '../components/Options';
import CardShopping from '../components/CardShopping';
import styles from '../styles.module.css';
import useSWR from 'swr';
import Carousel from 'react-grid-carousel';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Categories() {
  const { data } = useSWR(
    'https://v3.tissini.app/api/v3/categories/sections',
    fetcher
  );

  console.log(data);
  return (
    <div>
      {data && (
        <div className={styles.divCategories}>
          <Options />
          {data.map((categories) => (
            <>
              <img
                src={`https://v3.tissini.app${categories.image}`}
                className={styles.imgCategories}
              />
              {
                <Carousel
                  cols={2}
                  rows={2}
                  showDots={true}
                  loop
                  containerStyle={{
                    width: '605px',
                    margin: 'auto',
                    'margin-top': '1rem',
                  }}
                >
                  {categories.products.map((produtc) => (
                    <Carousel.Item>
                      <CardShopping info={produtc} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              }
            </>
          ))}
        </div>
      )}
    </div>
  );
}
