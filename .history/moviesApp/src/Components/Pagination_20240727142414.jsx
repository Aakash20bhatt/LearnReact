export default function Pagination(){
    return (        
    <div className="flex justify-center	gap-8 text-3xl h-[3rem] bg-slate-400 items-center">
            <div onClick={handlePrev} className="cursor-pointer">
                <i className="fa-solid fa-arrow-left"></i>
                </div>
            <div>1</div>
            <div onClick={handleNext} className="cursor-pointer">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
    </div>
    )
}