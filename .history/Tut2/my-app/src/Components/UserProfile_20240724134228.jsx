
function UserProfile(props){
    return(
        <div>
            <h2>Name : {props.name}</h2>
            <p>Age : {props.age}</p>
            <p>Location : {props.location}</p>
        </div>
    )
}

export default UserProfile