import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import styles from './card.module.scss'

interface IAddressProps {
  country: string
  province: string
  city: string
  street: string
  number: string
}

interface ICardProps {
  title: string
  subTitle: string
  address: IAddressProps
  type: string
  guests: number
  rooms: object
  offers: Array<string>
  photos: Array<string>
  price: Number
  data: Array<object>
}

export const Card: React.FC<ICardProps> = ({
  title,
  subTitle,
  address,
  type,
  guests,
  rooms,
  offers,
  photos,
  price,
  data,
}) => {
  
  return (
    <Box className={styles.cardWrapper}>
      <Box className={styles.cardPhotos}>
        <img src={photos[0]} alt="photo" />
      </Box>
      <Box>
        <Typography variant="subtitle1">{subTitle}</Typography>
        <Typography variant="h3">{title}</Typography>
        <Divider style={{ maxWidth: '100px' }} />
        <Box>
          <ul className={styles.cardList} style={{ maxWidth: '300px', flexWrap: 'wrap' }}>
            <li>
              <Typography variant="subtitle1">{guests}</Typography>
            </li>
            {Object.keys(rooms).map((property, index) => (
              <li key={index}>
                <Box display="flex">
                  <Typography variant="subtitle1">
                    {rooms[property]} {property}
                  </Typography> 
                </Box>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          {data.map((item, index) => (
            <Box key={index} display="flex">
              <Typography variant="subtitle1">{item.start}</Typography>
              <Typography variant="subtitle1">{item.end}</Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="subtitle1">{address.country}</Typography>
        <Typography variant="subtitle1">{address.province}</Typography>
        <Typography variant="subtitle1">{subTitle}</Typography>
      </Box>
    </Box>
  )
}