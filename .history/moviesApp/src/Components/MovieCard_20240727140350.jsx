export default function MovieCard(props){
    const {title,poster} = props
    return(
        <div className="hover:scale-105 duration-300 cursor-pointer relative m-4 rounded-[1rem] overflow-hidden">
            <img src={poster} alt="" className="h-[20rem] w-[12rem] object-cover" />
            <p className="absolute left-[50%] bottom-2 translate-x-[-50%] text-white"> {title}</p>
        </div>
    )
}