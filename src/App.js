import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Box from './components/Box'
import { Form } from 'react-bootstrap'

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
    const onChangeAddBox = (value) => {
        console.log('onChangeAddBox.value:', value)
        dispatch({ type: "CHANGE_ADD_BOXES", payload: value })
    }
    const addBox = (e) => {
        if (e) {
            e.preventDefault()
            dispatch({ type: "ADD_BOXES", payload: state.numberBoxAdded })
        }
    }

    return (
        <div className="App">
            <h1>Number of box:  {state.count}</h1>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => reset()}>reset</button>
            <input onChange={(e) => changeColorBoxes(e.target.value)} placeholder="type color here" />
            <Form onSubmit={(e) => addBox(e)}>
                <input onChange={(e) => onChangeAddBox(e.target.value)} placeholder="type number of box" />
            </Form>
            {state.boxes.length > 0 && state.boxes.map(box => {
                return <Box colorBoxes={box.colorBoxes} id={box.id} colorBox={box.colorBox} colorText={box.colorText} />
            })}
        </div>
    );
}

export default App;
