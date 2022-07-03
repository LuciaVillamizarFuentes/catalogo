/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles.module.css';
import { useForm, useWatch } from 'react-hook-form';

export default function login() {
  const { register, control, handleSubmit } = useForm();
  const NumUser = useWatch({ control, name: 'user' });

  const apiClient = axios.create({
    baseURL: 'https://v3.tissini.app',
    withCredentials: true,
  });
  var policies = [
    // Referer will never be set.
    'no-referrer',

    // Referer will not be set when navigating from HTTPS to HTTP.
    'no-referrer-when-downgrade',

    // Full Referer for same-origin requests, and no Referer for cross-origin requests.
    'same-origin',

    // Referer will be set to just the origin, omitting the URL's path and search.
    'origin',

    // Referer will be set to just the origin except when navigating from HTTPS to HTTP,
    // in which case no Referer is sent.
    'strict-origin',

    // Full Referer for same-origin requests, and bare origin for cross-origin requests.
    'origin-when-cross-origin',

    // Full Referer for same-origin requests, and bare origin for cross-origin requests
    // except when navigating from HTTPS to HTTP, in which case no Referer is sent.
    'strict-origin-when-cross-origin',

    // Full Referer for all requests, whether same- or cross-origin.
    'unsafe-url',
  ];
  // const LoginUser = (async () => {
  //   try {
  //     await axios
  //       .post(
  //         'https://v3.tissini.app/api/v3/login/client',
  //         {
  //           mobilephone: NumUser,
  //         },
  //         {
  //           headers: {
  //             'User-Agent':
  //               'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
  //             Accept: 'application/json, text/plain, /',
  //             'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
  //             'Content-Type': 'application/json;charset=utf-8',
  //             'Sec-Fetch-Dest': 'empty',
  //             'Sec-Fetch-Mode': 'cors',
  //             'Sec-Fetch-Site': 'cross-site',
  //           },
  //         }
  //       )
  //       .then((response) => console.log('++++++++++++++++++++', response.data));
  //   } catch (error) {
  //     console.log('error +++++++++++', error);
  //   }
  // })();

  const user = async () => {
    apiClient.get('/csrf-cookie').then((response) => {
      apiClient
        .post('/api/v3/login/client', newPost, {
          xsrfHeaderName: 'X-XSRF-TOKEN', // change the name of the header to "X-XSRF-TOKEN" and it should works
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
        });
    });

    const config = {
      headers: {
        Origin: null,
        Referer: null,
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Referrer-Policy': 'no-referrer',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
        Accept: 'application/json, text/plain, /',
        'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        _token: '{{csrf_token()}}',
      },
    };

    const newPost = {
      mobilephone: 7865470213,
    };

    try {
      delete axios.defaults.headers.common['Origin'];
      delete axios.defaults.headers.common['Referer'];
      axios
        .post('https://v3.tissini.app/api/v3/login/client', newPost, {
          xsrfHeaderName: 'X-XSRF-TOKEN', // change the name of the header to "X-XSRF-TOKEN" and it should works
          withCredentials: true,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.response));
    } catch (error) {
      console.log('error +++++++++++', error);
    }
  };

  useEffect(() => {
    handleSubmit(() => user())();
    if (NumUser && NumUser.length === 10) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NumUser]);

  return (
    <div className={styles.DivLogin}>
      <div className={styles.divInfoLogin}>
        <img
          src='https://mitienda.moda/img/logo.e38c8b41.png'
          className={styles.img}
        />
        ;
        <h3 className={styles.textLogin}>
          Ingresa el número de teléfono de tu asesora independiente.{' '}
        </h3>
      </div>

      <form className={styles.form}>
        <input {...register('user')} type={styles.text} required />
        <label className={styles.lbl_nombre}>
          <span className={styles.text_nomb}>Telefono</span>
        </label>
      </form>
    </div>
  );
}
