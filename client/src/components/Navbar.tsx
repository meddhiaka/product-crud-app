import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="max-w-5xl px-5 md:px-20 mx-auto flex flex-row bg-black justify-between">
                <div className="text-white mx-1 md:mx-4 py-4 tracking-wider font-extrabold text-lg md:text-3xl"><Link to="/">All Products</Link></div>
                <form className="flex items-center space-x-2 rounded-md p-1 m-3 bg-white focus:border-2 focus:border-red-950 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                    className="w-[10rem] sm:w-[20rem] md:w-[35rem] outline-none text-xs md:text-base appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                    type="text"
                    placeholder="Search by product name"
                    />
                </form>
        </div>
    )
}