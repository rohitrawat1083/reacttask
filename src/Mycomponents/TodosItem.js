// TodosItem.js
import React from 'react';
 
export const TodosItem = ({todoslist,onDelete}) => {
  // Use props.todositem to display the specific todo item
  return (
    <div>
      {/* Display todo item */}
      <h4 className='text-center my-3' >
        {todoslist.title}
        <br/>
        {todoslist.description}
        <br/></h4>
        <button  className="btn btn-sm btn-danger" onClick={()=>{onDelete(todoslist)}}>Delete</button>
      
    </div>
  );
}

