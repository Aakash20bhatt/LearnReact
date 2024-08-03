export default function Pagination(){
    const [pageNo,setPageNo] = useState('');

    const handlePrev=(e)=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }

    const handleNext=(e)=>{
        setPageNo(pageNo+1)
    }

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