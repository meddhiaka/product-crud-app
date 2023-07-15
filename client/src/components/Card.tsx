export default function Card(props) {
    return (
        <div className=" bg-slate-900 rounded-md p-2 w-[45%] h-auto">
            <p className="font-normal text-white text-lg border-b-[1px] border-b-indigo-50"><span className="text-white font-semibold tracking-normal mr-2">Product name:</span> {props.productName}</p>
            <p className="font-normal text-white text-lg border-b-[1px] border-b-indigo-50"><span className="text-white font-semibold tracking-normal mr-2">Product price:</span> {props.productPrice} £</p>
            <p className="font-semibold text-white text-lg border-b-[1px] border-b-indigo-50"><span className="text-white font-normal tracking-normal">There are </span>{props.quantity}<span className="text-white font-normal tracking-normal mr-2"> products left.</span></p>
            <div className="w-full flex flex-row justify-center gap-x-2 mt-3">
                <div className="cursor-pointer rounded-md text-slate-900 font-bold py-1 px-2 w-[40%] text-center bg-slate-500">Edit</div>
                <div className="cursor-pointer rounded-md text-slate-900 font-bold py-1 px-2 w-[40%] text-center bg-slate-500">Remove</div>
            </div>
        </div>
    )
}