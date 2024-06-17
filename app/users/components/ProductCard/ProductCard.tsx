import React from 'react'

import AddToCart from '../AddToCart';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    // * CSS Component
    // <div className={ styles.card }>

    // * Tailwind CSS
    <div className='
      p-5
      my-5
      text-white
      text-xl
    '>
      <AddToCart />
    </div>
  )
}

export default ProductCard
