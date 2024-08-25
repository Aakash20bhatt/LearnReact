import { useContext } from "react"
import PaginationContext from "../Contexts/PaginationContext"
import { useSelector } from "react-redux"

export default function Pagination(){
    // const {pageNo,handleNext,handlePrev} = useContext(PaginationContext)
    const {pageNo} = useSelector((store)=>store.paginationState)
    return (        
    <div className="flex justify-center	gap-8 text-3xl h-[3rem] bg-slate-400 items-center">
            <div onClick={handlePrev} className="cursor-pointer">
                <i className="fa-solid fa-arrow-left"></i>
                </div>
            <div>{pageNo}</div>
            <div onClick={handleNext} className="cursor-pointer">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
    </div>
    )
}