import React, { useState, useEffect, useMemo } from 'react';
import styles from '../styles.module.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

export default function ModalAddProduct({ info, setOpen }) {
  const router = useRouter();
  const [quantity, setquantity] = useState(0);
  const [variant, setVariant] = useState({});
  const [cant, setCant] = useState([]);
  const [cantSelect, setCantSelect] = useState('');
  let carrito = [];

  useEffect(() => {
    if (cant.length > 0) {
      cant.splice(0, cant.length);
    }
    let lim = 0;
    if (quantity > 20) {
      lim = 20;
    } else {
      lim = quantity;
    }
    const data = [];
    for (let i = 0; i < lim; i++) {
      data.push(i + 1);
      setCant(data);
      // cant.push(i + 1);
    }
    console.log(cant);
  }, [quantity]);

  const handleChange = (event: SelectChangeEvent) => {
    setCantSelect(event.target.value);
  };

  const handleSetStorage = () => {
    if (
      localStorage.getItem('carrito') !== undefined &&
      localStorage.getItem('carrito')
    ) {
      carrito = JSON.parse(localStorage.getItem('carrito'));
    }
    const data = {
      variant,
      cantSelect,
      name: info.name,
      price: info.price,
      total: info.price * parseFloat(cantSelect),
      img: info.images[0].url,
    };
    carrito.push(data);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    router.push({
      pathname: './carrito',
    });
  };

  console.log(cant.length && quantity && cant);
  return (
    <div className={styles.divModal}>
      <div className={styles.divHeaderModal}>
        <button
          className={styles.buttomCloseModal}
          onClick={() => setOpen(false)}
        >
          <span>&#10005;</span>
        </button>
        <p className={styles.titleModal}>Agregar Producto</p>
      </div>
      <p className={styles.titleSize}>Selecciona el tamaño </p>
      <div className={styles.divOptionModalAddProduct}>
        {info.variants.map((variants) => (
          <button
            className={styles.divSize}
            onClick={() => {
              setquantity(variants.quantity);
              setVariant(variants);
            }}
          >
            {' '}
            {variants.size}{' '}
          </button>
        ))}
      </div>
      {quantity !== 0 && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className={styles.titleSize}>Selecciona la cantidad</p>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={cantSelect.toString()}
            onChange={handleChange}
            label='Age'
            sx={{
              width: '80%',
              margin: 'auto',
            }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {cant &&
              cant.map((cant) => <MenuItem value={cant}>{cant}</MenuItem>)}
          </Select>
          <button
            className={styles.ButtonAddCarModal}
            onClick={() => handleSetStorage()}
            disabled={cantSelect === ''}
          >
            <p>Agregar</p>
          </button>
        </div>
      )}
    </div>
  );
}
