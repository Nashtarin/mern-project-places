import React from 'react';
import Card from '../../shared/components/Card';
import UserItem from './UserItem';
import './UserList.css'

const UserList = (props) => {
  if(props.items.length===0){
      return <div className="center">
          <Card>
          <h2>No User Found!</h2>
          </Card>
      </div>
  }
  return <ul className='users-list'>
      {props.items.map(user=><UserItem key={user.id} 
      image={user.image} 
      name={user.name}
      id={user.id}
      placecount={user.places}/>)}
  </ul>
};

export default UserList;