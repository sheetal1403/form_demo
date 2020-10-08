import React from 'react'
import './FormHeader.css'

function FormHeader() {
    return (
        <div className="FormHeader">
            <input type="text" placeholder="Form title"/>
            <input type="text" placeholder="Form description"/>
        </div>
    )
}

export default FormHeader
