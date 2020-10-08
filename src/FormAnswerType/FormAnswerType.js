import React, { useState } from 'react'

import ShortText from '../AnswerInputs/ShortText/ShortText';
import MultipleChoice from '../AnswerInputs/MultipleChoice/MultipleChoice';
import Checkbox from '../AnswerInputs/Checkbox/Checkbox';

function FormAnswerType() {

    const [answerType, setanswerType] = useState('Short text')

    const changeHandler = (e) => {
        console.log(e.target.value);
        setanswerType(e.target.value)
    }

    let answerInput = <ShortText/>
    if(answerType === 'Multiple choice'){
        answerInput = <MultipleChoice/>
    }else if(answerType === 'Checkboxes'){
        answerInput = <Checkbox/>
    }

    return (
        <div>
            <select onChange={(e) => changeHandler(e)}>
                <option value="Short text">Short text</option>
                <option value="Multiple choice">Multiple choice</option>
                <option value="Checkboxes">Checkbox</option>
            </select>

            <div>{ answerInput}</div>



        </div>
    )
}

export default FormAnswerType
