export default function Navbar(){
    return(
        <div className="flex item-center">
            <img className="h-12 "src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png" alt="" />
            <a href="" className="m-4 text-blue-600 text-3xl font-bold">Movies</a>
            <a href="/watchlist" className="m-4 text-blue-600 text-3xl font-bold" >WatchList</a>
        </div>
    )
}