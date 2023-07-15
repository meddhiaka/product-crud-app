import { useEffect, useState } from "react"
import axios from "axios"

import Card from './../components/Card'

export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await axios.get('http://localhost:1337/api/products')
                setProducts(res.data.res)
            } catch(error) {
                console.error(error.message)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="max-w-5xl mx-auto flex flex-row flex-wrap justify-center gap-2 mt-3">
            {
                products.map((e, index) => (
                    <Card 
                        key={index}
                        productName={e.productName}
                        productPrice={e.productPrice}
                        quantity={e.quantity}
                    />
                )) 
            }
        </div>
    )
}