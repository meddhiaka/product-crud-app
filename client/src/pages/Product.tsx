import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Product() {
  const x = useParams()
  console.log(x)
  const [productName, setProductName] = useState(x.productName)
  const [productPrice, setProductPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [sucess, setSucess] = useState(false)

  async function handleFormSubmit(e) {
    e.preventDefault()
    try {
      const response = await axios.put(`https://server-product-crud.onrender.com/api/products/${x}`, {
        productName,
        productPrice,
        quantity
      })

      setSucess(true)
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='max-w-5xl mx-auto'>
        <div className=' text-3xl my-4 font-semibold'>Update a specific post</div>
        <form onSubmit={handleFormSubmit} className='px-10'>
            <div className='flex flex-col'>
                <label className='mt-3 py-1' htmlFor="name">Product Name</label>
                <input
                    id='name'
                    className="border border-slate-300 rounded-md p-2 mb-2"
                    placeholder="Product Name"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                
                <label className='mt-3 py-1' htmlFor='price'>Product price</label>
                <input
                    id='price'
                    className="border border-slate-300 rounded-md p-2 mb-2"
                    placeholder="Product Price"
                    type="text"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
                <label className='mt-3 py-1' htmlFor='quantity'>Product quantity</label>
                <input
                    id='quantity'
                    className="border border-slate-300 rounded-md p-2 mb-2"
                    placeholder="Quantity"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button
                className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
                type="submit"
            >
                Save Changes
            </button>
        </form>
        {
            sucess && (
                <div className='w-full text-center mt-3 '>Product succesfully updated</div>
            )
        }
    </div>
  )
}
