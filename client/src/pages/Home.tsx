import { useEffect, useState } from "react"
import axios from "axios"

import Card from "./../components/Card"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("http://localhost:1337/api/products")
        setProducts(res.data.res)
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchProducts()
  }, [])

  async function handleRemoveProduct(productName) {
    try {
      await axios.delete(`http://localhost:1337/api/products/${productName}`)
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.productName !== productName)
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-row flex-wrap justify-center gap-2 mt-3 bg-slate-300 py-5">
      {products.map((product, index) => (
        <Card
          key={index}
          productName={product.productName}
          productPrice={product.productPrice}
          quantity={product.quantity}
          onRemove={handleRemoveProduct}
        />
      ))}
    </div>
  )
}
