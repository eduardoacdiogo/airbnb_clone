import React from 'react'
import { Card } from './components/card/Card'
import Divider from '@mui/material/Divider';
import { MOCK_FLATS } from './__mock/flat.mock'

export const App: React.FC = () => {

  return (
    <>
      <h1>Airbnb</h1>
      <Divider />
      {MOCK_FLATS.map((flat, index) => (
        <div key={index}>
          <Card
            title={flat.title}
            subTitle={flat.subTitle}
            address={flat.address}
            type={flat.type}
            guests={flat.guests}
            rooms={flat.rooms}
            offers={flat.offers}
            photos={flat.photos}
            price={flat.price}
            data={flat.data}
          />
          <Divider />
        </div>
      ))}
    </>
  )
}
