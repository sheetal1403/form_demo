import React, { Component } from 'react';
import FormHeader from '../FormHeader/FormHeader';
import FormQuestion from '../FormQuestion/FormQuestion';

class Form extends Component{



    render(){
        return (
            <div>
                <FormHeader/>
                <FormQuestion/>
            </div>
            
        )
    }
}

export default Form