import { useEffect } from 'react';
import axios from 'axios';
import styles from '../styles.module.css';
import { useForm, useWatch } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function Login() {
  const { register, control, handleSubmit } = useForm();
  const NumUser = useWatch({ control, name: 'user' });
  const router = useRouter();

  const user = async () => {
    const newPost = {
      mobilephone: 7865470213,
    };

    try {
      delete axios.defaults.headers.common['Origin'];
      delete axios.defaults.headers.common['Referer'];
      const { data } = await axios.post(
        'https://v3.tissini.app/api/v3/login/client',
        newPost
      );
      router.push({
        pathname: './categories',
      });
      console.log(data);
    } catch (error) {
      router.push({
        pathname: './categories',
      });
    }
  };

  useEffect(() => {
    if (NumUser && NumUser.length === 10) {
      handleSubmit(() => user())();
    }
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
