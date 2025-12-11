import { type Product, type ProductResponse } from './ProductTypes'

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(
    'https://platform-rest-prod.ngdata.no/api/products/1300/7080001150488?page=1&page_size=20&full_response=true&fieldset=maximal&facets=Category%2CAllergen&showNotForSale=true',
  )
  const data = (await response.json()) as ProductResponse
  return data.hits.hits.map((hit) => hit._source)
}

type BasketItem = {
  product: Product
  quantity: number
}
const basket: BasketItem[] = []

export function addToBasket(product: Product, quantity = 1) {
  const existingItem = basket.find((item) => item.product.ean === product.ean)
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    basket.push({ product, quantity })
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('no-NO', {
    style: 'currency',
    currency: 'NOK',
    minimumFractionDigits: 2,
  })
    .format(price)
    .replace('NOK', 'kr')
}
