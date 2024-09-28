import './App.css';
import ClassCounter from './components/ClassCounter';
// import ClassTodo from './components/ClassTodo'
import FuncTodo from './components/FuncTodo'
function App() {
  return (
    <>
        <ClassCounter name="Class Based Component"/>
        {/* <ClassTodo/> */}
        <FuncTodo/>
    </>
  );
}

export default App;
