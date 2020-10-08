import React, { useState } from 'react'

function FormAnswers() {

    const [answerType, setanswerType] = useState('Short text')

    const changeHandler = (e) => {
        console.log(e.target.value);
        setanswerType(e.target.value)
    }

    let answerInput = 'Short text';
    if(answerType === 'Multiple choice'){
        answerInput = 'Multiple choice'
    }else if(answerType === 'Checkboxes'){
        answerInput = 'Checkbox'
    }

    return (
        <div>
            <select onChange={(e) => changeHandler(e)}>
                <option value="Short text">Volvo</option>
                <option value="Multiple choice">Saab</option>
                <option value="Checkboxes">Fiat</option>
            </select>

            <p>{ answerInput}</p>

        </div>
    )
}

export default FormAnswers
