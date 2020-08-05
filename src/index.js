import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    count: 0,
    // box: {id: ... , colorBoxes: ..., colorBo: ..., colorText: ...}
    boxes: [],
    colorBoxes: 'orange',
    colorBox: 'orange',
    numberBoxAdded: 0,
};

function countReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            state.count++
            state.boxes.push({ id: state.count, colorBoxes: state.colorBoxes, colorBox: null, colorText: "black" })
            if (state.count >= 3) {
                for (let i = 0; i < state.boxes.length; i++) {
                    state.boxes[i].colorText = "blue"
                }
            }
            break;
        case "DECREMENT":
            state.count--
            state.boxes.pop()
            if (state.count <= 0) state.count = 0
            if (state.count < 3) {
                for (let i = 0; i < state.boxes.length; i++) {
                    state.boxes[i].colorText = "black"
                }
            }
            break;
        case "RESET":
            state.count = 0
            state.boxes = []
            state.colorBoxes = 'orange'
            state.colorBox = 'orange'
            break;
        case "CHANGE_ADD_BOXES":
            state.numberBoxAdded = parseInt(action.payload)
            break;
        case "ADD_BOXES":
            if (!isNaN(action.payload) || action.payload > 0) {
                for (let i = 0; i < action.payload; i++) {
                    state.boxes.push({ id: state.count + i + 1, colorBoxes: state.colorBoxes, colorBox: null, colorText: "black" })
                }
                state.count += action.payload
                if (state.count >= 3) {
                    for (let i = 0; i < state.boxes.length; i++) {
                        state.boxes[i].colorText = "blue"
                    }
                }
            }
            break;
        case "CHANGE_COLOR_BOXES":
            state.colorBoxes = action.payload
            for (let i = 0; i < state.boxes.length; i++) {
                state.boxes[i].colorBoxes = state.colorBoxes
            }
            break;
        case "CHANGE_COLOR_BOX":
            state.colorBox = action.payload.color
            state.boxes[action.payload.id - 1].colorBox = state.colorBox
            break;
        default:
            return state;
    }
    return { ...state }
}

const store = createStore(
    countReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
