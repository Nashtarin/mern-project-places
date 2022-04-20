import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import './NewPlace.css'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';
import { useForm } from '../../shared/components/Hooks/form-hook';
const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];

const UpdatePlace = () => {
    const {placeId}=useParams()
    const [isLoading, setIsLoading] = useState(true);
   
    
    const [formState, inputHandler,setFormData] = useForm(
        {
          title: {
            value: '',
            isValid:false
          },
          description: {
            value: '',
            isValid: false
          }
        },
        true
      );
      const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
      };
      const identifiedPlace=DUMMY_PLACES.find(p=>p.id===placeId)
      useEffect(() => {
        setFormData(
          {
            title: {
              value: identifiedPlace.title,
              isValid: true
            },
            description: {
              value: identifiedPlace.description,
              isValid: true
            }
          },
          true
        );
        setIsLoading(false);
      }, [setFormData, identifiedPlace]);
    
    if(!identifiedPlace){
        return (
            <div className="center">
                <h1>Could not find place!</h1>
            </div>
        )
    }
    if(isLoading){
        return(
            <div className='center'>
                <h2>Loading.....</h2>

            </div>
        )
    }
    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={() => {}}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={() => {}}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
          <Button type="submit"  disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      );
};

export default UpdatePlace;