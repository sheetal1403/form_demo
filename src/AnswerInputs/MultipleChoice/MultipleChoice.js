import React, { useState } from 'react'

function MultipleChoice() {

    const [no_of_options, setno_of_options] = useState(1);

    const increment = () => {
        setno_of_options((prevState) => prevState + 1)
    }

    return (
        <div>
            {Array(no_of_options).fill().map((_,index) => {
                return (
                   <React.Fragment key={index}>
                       <input type="radio" id="option1" name="option1"/>
                       <label htmlFor="option1">Option1</label>
                       <br/>
                   </React.Fragment>
                    
                )
            }
                
            )}
            
            <p onClick={increment}>{no_of_options < 5 ? 'Add option' : null}</p>
        </div>
    )
}

export default MultipleChoice
