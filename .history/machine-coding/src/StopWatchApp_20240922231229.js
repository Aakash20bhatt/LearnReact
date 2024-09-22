import './App.css'
// import StopWatch from './components/StopWatch'
// import Carousel from './components/Carousel'
import Modal from "./components/Modal";
import useVisible from "./hooks/useVisible";

function StopWatchApp(){
    const {isVisible,toggle,show,hide} = useVisible(true);
    return(
        <> 
            {/* <StopWatch/> */}
            {/* <Carousel/> */}
            <button onClick={show}>Show Modal</button>
            <button onClick={toggle}>Toggle Modal</button>
            <Modal isVisible={isVisible} hide={hide} />
        </>
    )
}

export default StopWatchApp