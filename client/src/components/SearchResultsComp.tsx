import { Link } from "react-router-dom"

export default function SearchResultsComp({ resultsSearch }) {
    return (
        <div className="max-w-5xl px-5 mx-auto w-full bg-white flex flex-col  mt-[1rem] max-h-80 overflow-y-scroll">
            {
                resultsSearch.map(e => <div className="bg-slate-600 text-white shadow-sm cursor-pointer rounded p-2 my-1 border-b-2 border-black"><Link to={`/view-unique-product/${e.productName}`}>{e.productName}</Link></div>)
            }
        </div>        
    )
}