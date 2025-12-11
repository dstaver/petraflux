import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useId } from 'react'
import { Dialog } from '../features/dialog/Dialog'
import { fetchProducts } from '../features/product/ProductApi'
import { ProductList } from '../features/product/ProductList'
import { ProductView } from '../features/product/ProductView'

export const Route = createFileRoute('/varer/$')({
  component: RouteComponent,
  loader: () => fetchProducts(),
})

function RouteComponent() {
  const navigate = useNavigate()
  const products = Route.useLoaderData()

  // Get the splat param, which should be the slugifiedUrl of the product minus
  // the leading slash
  const splat = Route.useParams()._splat
  const product = splat
    ? products.find((p) => p.slugifiedUrl === '/' + splat)
    : undefined

  const titleId = useId()
  const title = product ? product.title + ' ' + product.subtitle : 'Varer'
  return (
    <>
      <title>{title}</title>
      {product && (
        <Dialog
          open={!!product}
          aria-labelledby={titleId}
          onClose={() => {
            navigate({ to: '/varer/$', params: { _splat: undefined } })
          }}
        >
          <ProductView product={product} titleId={titleId} />
        </Dialog>
      )}
      <ProductList products={products} />
    </>
  )
}
