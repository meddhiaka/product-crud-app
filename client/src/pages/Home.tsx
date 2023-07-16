import { useEffect, useState } from "react"
import axios from "axios"

import Card from "./../components/Card"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("https://server-product-crud.onrender.com/api/products", {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
          }
        })
        setProducts(res.data.res)
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchProducts()
  }, [])

  async function handleRemoveProduct(productName) {
    try {
      await axios.delete(`/api/products/${productName}`)
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.productName !== productName)
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="max-w-5xl flex flex-row flex-wrap justify-center items-start mx-auto gap-2 mt-3 bg-slate-300 py-5">
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
