import './App.css'
import Header from './Components/Header';
import UserProfile from './Components/UserProfile';

function App() {

  return (
    <>
      <Header/>
      <UserProfile name="Stokes" age="35" location="UK"/>
      <UserProfile name="Sky" age="32" location="India"/>
    </>
  )
}

export default App;
export const a = 10;
