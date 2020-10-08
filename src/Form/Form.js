import React, { Component } from 'react';
import FormAnswerType from '../FormAnswerType/FormAnswerType';
import FormHeader from '../FormHeader/FormHeader';
import FormQuestion from '../FormQuestion/FormQuestion';

class Form extends Component{



    render(){
        return (
            <div>
                <FormHeader/>
                <FormQuestion/>
                <FormAnswerType/>
            </div>
            
        )
    }
}

export default Form