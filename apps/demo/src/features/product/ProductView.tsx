import { ShoppingBasketIcon } from 'lucide-react'
import { formatPrice } from './ProductApi'
import { ProductImage } from './ProductImage'
import { type Product } from './ProductTypes'
import './ProductView.css'

export function ProductView({
  product,
  titleId,
}: {
  product?: Product
  titleId: string
}) {
  if (!product) {
    return
  }
  return (
    <div className="product-view">
      <h1 id={titleId}>{product.title}</h1>
      <h2>{product.subtitle}</h2>
      <ProductImage product={product} size="large" />
      <div className="product-view__content">
        <div className="product-view__price">
          {formatPrice(product.pricePerUnitOriginal)}
        </div>
        <button className="btn" type="button">
          <ShoppingBasketIcon /> Legg i handlekurv
        </button>

        <div className="product-view__nutrition">
          <h3>Næringsinnhold</h3>
          <table>
            <tbody>
              {product.nutritionalContent.map((content) => (
                <tr key={content.name}>
                  <td>{content.displayName}</td>
                  <td>
                    {content.amount} {content.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
