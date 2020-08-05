import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Box from './components/Box'

function App() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const increment = () => {
        dispatch({ type: "INCREMENT" })
    }

    const decrement = () => {
        dispatch({ type: "DECREMENT" })
    }
    const reset = () => {
        dispatch({ type: "RESET" })
    }
    const changeColorBoxes = (value) => {
        dispatch({ type: "CHANGE_COLOR_BOXES", payload: value })
    }

    return (
        <div className="App">
            <h1>Number of box:  {state.count}</h1>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => reset()}>reset</button>
            <input onChange={(e) => changeColorBoxes(e.target.value)} placeholder="type color here" />
            {state.boxes.length > 0 && state.boxes.map(box => {
                return <Box colorBoxes={box.colorBoxes} id={box.id} colorBox={box.colorBox} colorText={box.colorText} />
            })}
        </div>
    );
}

export default App;
