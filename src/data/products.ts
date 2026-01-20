'use client'
import { useEffect, useState } from 'react'
import productImage1 from '@/images/products/p1.jpg'

export const GetProducts = () => {
  const [products, setProducts] = useState<any>(null)
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('https://admin.ashaa.xyz/api/MooniAddProduct')
      const json = await res.json()
      setProducts(json)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
 

  return products?.map((item: any) => ({
    id: item.id,
    title: item.title,
    handle: item.title.toLowerCase().replace(/\s+/g, '-'),
    createdAt: item.createdAt,
    vendor: 'Mooni',
    price: item.priceSale,
    featuredImage: {
      src: item?.defaultImage || productImage1,
      width: productImage1.width,
      height: productImage1.height,
      alt: item.title,
    },
    images: [
      {
        src: item?.defaultImage || productImage1.src,
        width: productImage1.width,
        height: productImage1.height,
        alt: item.title,
      },
    ],
    reviewNumber: 87,
    rating: 4.5,
    status: 'New in',
    options: [
      {
        name: 'Color',
        optionValues: [
          {
            name: 'Black',
            swatch: {
              color: '#000000',
              image: null,
            },
          },
          {
            swatch: {
              color: 'oklch(42.1% 0.095 57.708)',
              image: null,
            },
            name: 'Pink Yarrow',
          },
          {
            swatch: {
              color: '#D1C9C1',
              image: null,
            },
            name: 'indigo',
          },
          {
            swatch: {
              color: '#f7e3d4',
              image: null,
            },
            name: 'Stone',
          },
        ],
      },
      {
        name: 'Size',
        optionValues: [
          {
            swatch: null,
            name: 'XXS',
          },
          {
            swatch: null,
            name: 'XS',
          },
          {
            swatch: null,
            name: 'M',
          },
          {
            swatch: null,
            name: 'L',
          },
          {
            swatch: null,
            name: 'XL',
          },
        ],
      },
    ],
    selectedOptions: [
      {
        name: 'Color',
        value: 'Pink Yarrow',
      },
      {
        name: 'Size',
        value: 'XS',
      },
    ],
  })) || []
}
