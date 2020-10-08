import React, { useState } from 'react'
import ShortTextIcon from '@material-ui/icons/ShortText';
import './FormQnA.css';

import FormQuestion from '../FormQuestion/FormQuestion';
import ShortText from '../AnswerInputs/ShortText/ShortText';
import MultipleChoice from '../AnswerInputs/MultipleChoice/MultipleChoice';
import Checkbox from '../AnswerInputs/Checkbox/Checkbox';

function FormQnA(props) {

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

    let icon = <ShortTextIcon/>

    return (
        <div className="QnAContainer">
            <div className="QuestionAndAnswerType">
                <FormQuestion/>
                <select onChange={(e) => changeHandler(e)} className="AnswerType">
                <option value="Short text" data-icon={icon}>Short text</option>
                    <option value="Multiple choice">Multiple choice</option>
                    <option value="Checkboxes">Checkbox</option>
                </select>

            </div>
            
            <div>{ answerInput}</div>
            <span onClick={props.addQuestion} className="AddQuestion">Add new question</span>




        </div>
    )
}

export default FormQnA
