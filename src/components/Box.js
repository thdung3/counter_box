import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Box.css'

export default function Box({ colorBoxes, colorBox, id, colorText }) {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const changeColorBox = (value) => {
        dispatch({ type: "CHANGE_COLOR_BOX", payload: { color: value, id: id } })
    }
    return (
        <div className="box-area">
            <div className="box" style={(colorBox !== null && colorBox !== '') ? { "backgroundColor": colorBox } : { "backgroundColor": colorBoxes }}>
                <p style={{ "color": colorText, "fontWeight": "700" }}>Box {id}</p>
                <input onChange={(e) => changeColorBox(e.target.value)} placeholder="type color here" />
            </div>

        </div >
    )
}
