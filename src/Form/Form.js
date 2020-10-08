import React, { Component } from 'react';
import FormAnswers from '../FormAnswers/FormAnswers';
import FormHeader from '../FormHeader/FormHeader';
import FormQuestion from '../FormQuestion/FormQuestion';

class Form extends Component{



    render(){
        return (
            <div>
                <FormHeader/>
                <FormQuestion/>
                <FormAnswers/>
            </div>
            
        )
    }
}

export default Form