import './App.css'
import Header from './Components/Header';
import UserProfile from './Components/UserProfile';

const users = [
  {name:"John",age:"15",location:"India"},
  {name:"Anderson",age:"42",location:"England"},
  {name:"Sky",age:"30",location:"India"},
  {name:"Bumrah",age:"31",location:"Mumbai"},
  {name:"Rohit",age:"30",location:"India"},
  {name:"DK",age:"30",location:"India"},
]

function App() {

  return (
    <>
      <Header/>
      {users.map((user,index)=>{
        return <UserProfile key={index} name={user.name} age={user.age} location={user.location}/>
      })}
    </>
  )
}

export default App;
export const a = 10;
