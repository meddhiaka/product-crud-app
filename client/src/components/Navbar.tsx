import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({ setResultsSearch }) {
  const [searchBar, setSearchBar] = useState(false)
  const [input, setInput] = useState('')

    async function fetchData(v) {
      const response = await axios.get('https://server-product-crud.onrender.com/api/products/')
      const results = response.data.res.filter(e => {
        return v && e && e.productName && e.productName.toLowerCase().includes(v)
      })
      setResultsSearch(results)
    }

  function handleChange(v) {
    setInput(v)
    fetchData(v)
  }

  function handleInputBlur() {
    setSearchBar(false)
    setInput('')
  }

  return (
    <div className={`max-w-5xl px-5 md:px-20 mx-auto ${searchBar ? 'py-1' : 'flex flex-row justify-between'} bg-black `}>
      <div className={`text-white mx-1 md:mx-4 py-4 ${searchBar ? 'hidden' : ''}  tracking-wider font-extrabold text-lg md:text-3xl`}><Link to="/">All Products</Link></div>
      <form className={`flex items-center space-x-2 ${searchBar ? 'w-full p-2' : ''} rounded-md p-1 m-3 bg-white focus:border-2 focus:border-red-950`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          onClick={() => setSearchBar(true)}
          onBlur={handleInputBlur}
          onChange={(e) => handleChange(e.target.value)}
          className={` ${searchBar ? 'w-full' : 'w-[6rem] sm:w-[10rem] md:w-[26rem]'} outline-none text-xs md:text-base appearance-none placeholder-gray-500 text-gray-500`}
          type="text"
          placeholder="Search by product name"
        />
      </form>
      <div className={`my-auto text-white ${searchBar ? 'hidden' : ''}  whitespace-nowrap text-sm cursor-pointer`}><Link to="/create">Create a product</Link></div>
    </div>
  )
}
