import React, { useEffect } from 'react';
import Options from '../components/Options';
import CardShopping from '../components/CardShopping';
import useSWR from 'swr';
import Carousel from 'react-grid-carousel';
import styles from '../styles.module.css';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';
import ImgCategories from '../components/ImgCategories';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Categories() {
  const router = useRouter();

  const { data: secttions } = useSWR(
    'https://v3.tissini.app/api/v3/categories/sections',
    fetcher
  );

  const { data: categories } = useSWR(
    'https://v3.tissini.app/api/v3/categories',
    fetcher
  );

  return (
    <>
      {secttions && categories ? (
        <div>
          <Options />
          {secttions && (
            <div className={styles.divCategories}>
              {secttions.map((categories) => (
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
          {categories && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
              }}
            >
              {categories.map((categorie) => (
                <button
                  className={styles.buttonImgCategory}
                  onClick={() => {
                    router.push({
                      pathname: './catalogo',
                      query: `categorie=${categorie.id}`,
                    });
                  }}
                >
                  <ImgCategories info={categorie} />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.divLoading}>
          <ReactLoading
            type={'spinningBubbles'}
            color='#f06292'
            width='10%'
            height='10%'
          />
        </div>
      )}
    </>
  );
}
