import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import HomeMenuBook from '@mui/icons-material/MenuBook';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';

export default function Options() {
  const router = useRouter();

  const [value, setValue] = useState(0);

  console.log(value);

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          margin: 'auto',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: '#fff',
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            router.push({
              pathname: `./${newValue}`,
            });
          }}
        >
          <BottomNavigationAction
            label='Categorias'
            icon={<HomeIcon />}
            value='categories'
          />
          <BottomNavigationAction
            label='Catalogo'
            icon={<HomeMenuBook />}
            value='catalogo'
          />
          <BottomNavigationAction
            label='Carrito'
            icon={<ShoppingCart />}
            value='carrito'
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
