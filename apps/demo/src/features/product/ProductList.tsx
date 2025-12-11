import { ProductCard } from './ProductCard'
import './ProductList.css'
import  { type Product } from './ProductTypes'

export function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="products">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.ean} product={product} />
        ))}
      </div>
    </div>
  )
}
