import React, { useState } from 'react'
import './MultipleChoice.css';

function MultipleChoice() {

    const [no_of_options, setno_of_options] = useState(1);

    const increment = () => {
        setno_of_options((prevState) => prevState + 1)
    }

    return (
        <div>
            {Array(no_of_options).fill().map((_,index) => {
                return (
                   <div key={index} className="Option">
                       <input type="radio" id="option1" name="option1"/>
                       <label htmlFor="option1">Option1</label>
                       <br/>
                   </div >
                    
                )
            }
                
            )}
            
            <span onClick={increment} className="AddOption">{no_of_options < 5 ? 'Add option' : null}</span>
        </div>
    )
}

export default MultipleChoice
