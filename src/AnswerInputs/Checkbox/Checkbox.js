import React, { useState } from 'react'
import './Checkbox.css';

function Checkbox() {
    const [no_of_options, setno_of_options] = useState(1);

    const increment = () => {
        setno_of_options((prevState) => prevState + 1)
    }

    return (
        <div>
            {Array(no_of_options).fill().map((_,index) => {
                return (
                   <div key={index} className="Option">
                       <input type="checkbox" id="option1" name="option1"/>
                       <label htmlFor="option1">Option1</label>
                       <br/>
                   </div>
                    
                )
            }
                
            )}
            
            <p onClick={increment} className="AddOption_Checkbox">{no_of_options < 5 ? 'Add option' : null}</p>
        </div>
    )
}

export default Checkbox
