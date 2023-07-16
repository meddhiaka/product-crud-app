import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Product(props) {
    const [product, setProduct] = useState([])
    const x = useParams().productName

    useEffect(() => {
        async function fetchProduct() {
            const response = await axios.get(`/api/products/${x}`)
            setProduct(response.data.res)
        }

        fetchProduct()
    }, [])

    console.log(product)
    return (
        <div className="max-w-5xl mx-auto   ">
            {
                <div className="mx-auto w-[80%] mt-7 text-center">
                    <p className="text-slate-800 font-semibold text-lg tracking-normal mr-2">Product name: {product.productName}</p>
                    <p className="text-slate-800 font-semibold text-lg tracking-normal mr-2">Product price: {product.productPrice}£</p>
                    <p className="text-slate-800 font-semibold text-lg tracking-normal mr-2">There are {product.quantity} products left...</p>
                </div>                
            }
        </div>
    )
}