import React from 'react'

const ProductCard2 = ({title, price, inStock}) => {
  return (
    <div className="bg-gray-200 shadow-md rounded pb-8 mb-4 px-3 py-3">
        <h1 className="text-2xl font-bold">ProductCard2</h1>
        <p className="text-gray-600">Title: {title}</p>
        <p className="text-gray-600">Price: {price}</p>
        <p className="text-gray-600">inStock: {inStock ? "Available" : " Out of stock"}</p>
    </div>
  )
}

export default ProductCard2