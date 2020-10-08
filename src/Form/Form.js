import React, { Component } from 'react';
import FormQnA from '../FormQnA/FormQnA';
import FormHeader from '../FormHeader/FormHeader';
import './Form.css';

class Form extends Component{

    state = {
        questions: 1
    }

    addQuestionHandler = () => {
        console.log('cl')
        this.setState(prevState => (
            {questions: prevState.questions + 1}
        ))
    }

    render(){

        let questions = Array(this.state.questions)
            .fill()
            .map((_, index) => <FormQnA addQuestion = {this.addQuestionHandler} key={index}/>)

        return (
            <div className="FormContainer">
                <FormHeader/>
                {questions}
            </div>
            
        )
    }
}

export default Form