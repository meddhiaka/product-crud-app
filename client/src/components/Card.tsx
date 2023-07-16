import { Link } from "react-router-dom"

export default function Card(props) {
  function handleRemoveClick() {
    props.onRemove(props.productName)
  }

  return (
    <div className="bg-slate-900 rounded-md p-2 w-[45%] h-auto">
      <p className="font-normal text-white text-lg border-b-[1px] border-b-indigo-50">
        <span className="text-white font-semibold tracking-normal mr-2">
          Product name:
        </span>
        {props.productName}
      </p>
      <p className="font-normal text-white text-lg border-b-[1px] border-b-indigo-50">
        <span className="text-white font-semibold tracking-normal mr-2">
          Product price:
        </span>
        {props.productPrice} £
      </p>
      <p className="font-semibold text-white text-lg border-b-[1px] border-b-indigo-50">
        There are {props.quantity} products left.         
      </p>
      <div className="w-full flex flex-row justify-center gap-x-2 mt-3">
        <div className="cursor-pointer rounded-md text-slate-900 font-bold py-1 px-2 w-[40%] text-center bg-slate-500">
          <Link to={`/product/${props.productName}`}>
            Edit
          </Link>
        </div>
        <div
          className="cursor-pointer rounded-md text-slate-900 font-bold py-1 px-2 w-[40%] text-center bg-slate-500"
          onClick={handleRemoveClick}
        >
          Remove
        </div>
      </div>
    </div>
  )
}
