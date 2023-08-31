import React from 'react';
import {TodosItem} from './TodosItem';

export const Todos = (props) => {
let mystyle={
  minHieght: "100vh",
  margin:"40px auto"
}
  
  return (
    <div className="container my-3" style={mystyle}>
      <h3>TodosList</h3>
      {props.todoslist.length===0?"No Task for today! :)":
      props.todoslist.map((todoslist) =>
      {
        return(
        <>
        <TodosItem todoslist={todoslist} key={todoslist.sno} onDelete={props.onDelete} />

        <hr/>
        </>

        ) })
      }
     {/* <TodosItem todoslist = {props.todoslist[0]}/> */}
          </div>
  )
}


