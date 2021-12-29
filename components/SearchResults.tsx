import { ProductItem } from "./ProductItem"
import { useMemo } from 'react'

interface SearchResultsProps {
  results: Array<{
    id: number,
    price: number,
    title: string,
  }>;
  onAddToWishList: (id: number) => void
}

export function SearchResults({results, onAddToWishList}: SearchResultsProps){
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
    return total + product.price
  }, 0)
}, [results])
  return(
    <>
    <h2>{totalPrice}</h2>
    <div>
      {results.map((product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList}/>
        )
      }))}
    </div>
    </>
  )
}