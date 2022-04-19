import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';
import './NewPlace.css'
const formReducer=(state,action)=>{
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid=true;
            for (const inputId in state.inputs){
                if (inputId===action.inputId){
                    formIsValid=formIsValid && action.isVAlid
                }
                else{
                    formIsValid=formReducer && state.inputs[inputId].isVAlid
                }

            }
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                [action.inputId]:{value:action.value,isVAlid:action.isVAlid}},
            };
        default :
        return state;   
    }
}
const NewPlace = () => {
    useReducer(formReducer,{
        inputs:{
            title:{
                value:'',
                isVAlid:false

            },
            description:{
                value:'',
                isVAlid:false

            }
        },
        isVAlid:false
    })
    const titleInputHandler=useCallback((id,value,isVAlid)=>{

    },[])
    const descriptionInputHandler=useCallback((id,value,isVAlid)=>{

    },[])
    return (
        <form className='place-form'>
            <Input
            id='title' 
            element='input' 
            type='text' 
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please Enter a Valid Title' 
            onInput={titleInputHandler}/>
            <Input
            id='description'
            element='textarea' 
            type='text' 
            label='Description'
            onInput={descriptionInputHandler}
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Please Enter a Valid Description (at least 5 charaters)'/>
        </form>
    );
};

export default NewPlace;