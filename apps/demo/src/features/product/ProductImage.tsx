import './ProductImage.css'
import  { type Product } from './ProductTypes'

export function ProductImage({
  product,
  size = 'medium',
  className = 'product-image',
}: {
  product: Product
  size?: 'small' | 'medium' | 'large'
  className?: string
}) {
  return (
    <img
      className={className}
      width="160"
      height="160"
      loading="lazy"
      src={`https://bilder.ngdata.no/${product.imagePath}/${size}.jpg`}
      alt={product.title + ' ' + product.subtitle}
    />
  )
}
