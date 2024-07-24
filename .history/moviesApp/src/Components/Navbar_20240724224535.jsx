export default function Navbar(){
    return(
        <div className="flex items-center pl-3 py-4">
            <img className="h-12 "src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png" alt="" />
            <Link className="m-4 text-blue-600 text-3xl font-bold" to="/">Movies</Link>
            <Link className="text-blue-600 text-3xl font-bold" to="/watchlist" >WatchList</Link>
        </div>
    )
}