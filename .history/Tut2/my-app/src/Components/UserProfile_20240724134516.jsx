
function UserProfile(props){
    const { name, age, location } = props // Destructing
    return(
        <div>
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>Location : {location}</p>
        </div>
    )
}

export default UserProfile