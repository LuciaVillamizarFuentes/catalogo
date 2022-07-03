import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import HomeMenuBook from '@mui/icons-material/MenuBook';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

export default function Options() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Box
        sx={{
          width: '50%',
          margin: 'auto',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label='Categorias' icon={<HomeIcon />} />
          <BottomNavigationAction label='Catalogo' icon={<HomeMenuBook />} />
          <BottomNavigationAction label='Carrito' icon={<ShoppingCart />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
