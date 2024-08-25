import { useContext } from "react"
import PaginationContext from "../Contexts/PaginationContext"
import { useDispatch, useSelector } from "react-redux"
import paginationSlice from "../redux/paginationSlice"

const actions = paginationSlice.actions;

export default function Pagination(){
    // const {pageNo,handleNext,handlePrev} = useContext(PaginationContext)
    const {pageNo} = useSelector((store)=>store.paginationState)
    const dispatch = useDispatch();
    return (        
    <div className="flex justify-center	gap-8 text-3xl h-[3rem] bg-slate-400 items-center">
            <div onClick={()=>dispatch(actions.handlePrev())} className="cursor-pointer">
                <i className="fa-solid fa-arrow-left"></i>
                </div>
            <div>{pageNo}</div>
            <div onClick={()=>dispatch(actions.handleNext())} className="cursor-pointer">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
    </div>
    )
}