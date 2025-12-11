import { Link } from '@tanstack/react-router'
import { formatPrice } from './ProductApi'
import './ProductCard.css'
import { ProductImage } from './ProductImage'
import  { type Product } from './ProductTypes'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      className="product-card"
      to="/varer/$"
      params={{ _splat: product.slugifiedUrl }}
    >
      <ProductImage product={product} />
      <h2>{product.title}</h2>
      <h3>{product.subtitle}</h3>
      <p>{formatPrice(product.pricePerUnitOriginal)}</p>
    </Link>
  )
}
