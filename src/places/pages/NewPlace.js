import React, { useCallback, useReducer } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/components/Hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';
import './NewPlace.css'
// // const formReducer=(state,action)=>{
// //     switch(action.type){
// //         case 'INPUT_CHANGE':
// //             let formIsValid=true;
// //             for (const inputId in state.inputs){
// //                 if (inputId===action.inputId){
// //                     formIsValid=formIsValid && action.isVAlid
// //                 }
// //                 else{
// //                     formIsValid=formIsValid && state.inputs[inputId].isVAlid
// //                 }

// //             }
// //             return {
// //                 ...state,
// //                 inputs:{
// //                     ...state.inputs,
// //                 [action.inputId]:{value:action.value,isVAlid:action.isVAlid}},
// //             },
// //             isVAlid:formIsValid;
// //         };
// //         default :
// //         return state;   
// //     }
// // }
// // const NewPlace = () => {
// //     useReducer(formReducer,{
// //         inputs:{
// //             title:{
// //                 value:'',
// //                 isVAlid:false

// //             },
// //             description:{
// //                 value:'',
// //                 isVAlid:false

// //             }
// //         },
// //         isVAlid:formIsValid
// //     })
// //     const titleInputHandler=useCallback((id,value,isVAlid)=>{

// //     },[])
// //     const descriptionInputHandler=useCallback((id,value,isVAlid)=>{

// //     },[])
// //     return (
// //         <form className='place-form'>
// //             <Input
// //             id='title' 
// //             element='input' 
// //             type='text' 
// //             label='Title'
// //             validators={[VALIDATOR_REQUIRE()]}
// //             errorText='Please Enter a Valid Title' 
// //             onInput={titleInputHandler}/>
// //             <Input
// //             id='description'
// //             element='textarea' 
// //             type='text' 
// //             label='Description'
// //             onInput={descriptionInputHandler}
// //             validators={[VALIDATOR_MINLENGTH(5)]}
// //             errorText='Please Enter a Valid Description (at least 5 charaters)'/>
// //         </form>
// //     );
// // };

// // export default NewPlace;
// import React, { useCallback, useReducer } from 'react';

// import Input from '../../shared/components/FormElements/Input';
// import Button from '../../shared/components/FormElements/Button';
// import {
//   VALIDATOR_REQUIRE,
//   VALIDATOR_MINLENGTH
// } from '../../shared/util/validator.js';
// import './NewPlace.css';
// import { useForm } from '../../shared/components/Hooks/form-hook';

// // const formReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'INPUT_CHANGE':
// //       let formIsValid = true;
// //       for (const inputId in state.inputs) {
// //         if (inputId === action.inputId) {
// //           formIsValid = formIsValid && action.isValid;
// //         } else {
// //           formIsValid = formIsValid && state.inputs[inputId].isValid;
// //         }
// //       }
// //       return {
// //         ...state,
// //         inputs: {
// //           ...state.inputs,
// //           [action.inputId]: { value: action.value, isValid: action.isValid }
// //         },
// //         isValid: formIsValid
// //       };
// //     default:
// //       return state;
// //   }
// // };

// const NewPlace = () => {
//   const [formState, inputHandler] = useForm( {
//     inputs: {
//       title: {
//         value: '',
//         isValid: false
//       },
//       description: {
//         value: '',
//         isValid: false
//       },
//       address: {
//         value: '',
//         isValid: false
//       }
//     },
//     isValid: false
//   });

  
//   const placeSubmitHandler=(event)=>{
//       event.preventDefault()
//       console.log(formState.inputs)

//   }

//   return (
//     <form className="place-form" onSubmit={placeSubmitHandler}>
//       <Input
//         id="title"
//         element="input"
//         type="text"
//         label="Title"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid title."
//         onInput={inputHandler}
//       />
//       <Input
//         id="description"
//         element="textarea"
//         label="Description"
//         validators={[VALIDATOR_MINLENGTH(5)]}
//         errorText="Please enter a valid description (at least 5 characters)."
//         onInput={inputHandler}
//       />
//       <Input
//         id="address"
//         element="input"
//         label="Address"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid address."
//         onInput={inputHandler}
//       />
//       <Button type="submit" disabled={!formState.isValid}>
//         ADD PLACE
//       </Button>
//     </form>
//   );
// };

// export default NewPlace;


const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;

