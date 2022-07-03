import React from 'react';
import styles from '../styles.module.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardShopping({ info }) {
  return (
    <div className={styles.divCardShopping}>
      <img
        src={`https://v3.tissini.app${info.image.url}`}
        className={styles.imgCardShopping}
      />
      <div className={styles.divDescripcionCardShopping}>
          <p className={styles.textCardNameProduct}>{info.name}</p>
          {/* <p className={styles.textCardCategories}>{info.categories.category}</p> */}
          <p className={styles.textCardPrice}>{info.price}</p>
      </div>
    </div>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component='img'
    //       height='140'
    //       image={`https://v3.tissini.app${info.image.url}`}
    //       alt='green iguana'
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant='h5' component='div'>
    //         {info.name}
    //       </Typography>
    //       {/* <Typography gutterBottom variant='h5' component='div'>
    //         {info.categories.category}
    //       </Typography> */}
    //       <Typography gutterBottom variant='h5' component='div'>
    //         {info.price}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
}
