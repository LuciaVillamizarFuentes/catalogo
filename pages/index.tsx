import { useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../styles.module.css'
import { useForm, useWatch } from "react-hook-form";

export default function login() {
  const { register, control, handleSubmit } = useForm()
  const NumUser = useWatch({ control, name: 'user' })
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);




  
  const LoginUser = (async () => {
    console.log('jhiiiiiiiiiiiiiii')
    const rawResponse = await fetch("https://v3.tissini.app/api/v3/login/client", {
      "headers": {
        "accept": "application/json, text/plain, /",
        "accept-language": "es-CO,es-US;q=0.9,es-419;q=0.8,es;q=0.7,en;q=0.6",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
      },
      "referrerPolicy": "no-referrer",
      "body": "{\"mobilephone\":\"7865470213\"}",
      "method": "POST"
    });
    // const content = await rawResponse.json();
    console.log(rawResponse);
    
  
    // console.log(content, 'se hizo fetch');
  })();

  useEffect(() =>  {
    if(NumUser && NumUser.length === 10) {
      handleSubmit(() => LoginUser)()
    }
  }, [])

  return (
    <div className={styles.DivLogin}
    
    >
      <div className={styles.divInfoLogin}>
      <img src="https://mitienda.moda/img/logo.e38c8b41.png" className={styles.img}/>;
      <h3 className={styles.textLogin}>Ingresa el número de teléfono de tu asesora independiente. </h3>
      </div>


      <form className={styles.form}>
		<input {...register('user')} type={styles.text} required />
		<label className={styles.lbl_nombre}>
			<span className={styles.text_nomb}>Telefono</span>
		</label>
	</form>
    </div>
  )
}
