import './App.css';
import Headers from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import Footer from './Mycomponents/Footer';
import React, { useState, useEffect } from 'react';
import Addtodos from './Mycomponents/Addtodos';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch

function App() {
  let inittodoslist;
  if (localStorage.getItem("todoslist") === null) {
    inittodoslist = [];
  } else {
    inittodoslist = JSON.parse(localStorage.getItem("todoslist"));
  }

  const onDelete = (todoToDelete) => {
    console.log("I'm on Delete of ", todoToDelete);
    console.log(todoToDelete);
    setTodoslist(todoslist.filter((todo) => todo !== todoToDelete));
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  };

  const addTodo = (title, description) => {
    let sno;
    console.log("Adding todo", title, description);
    if (todoslist.length === 0) {
      sno = 0;
    } else {
      sno = todoslist[todoslist.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };

    setTodoslist([...todoslist, myTodo]);
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
    console.log(myTodo);
  };

  const [todoslist, setTodoslist] = useState(inittodoslist);

  useEffect(() => {
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }, [todoslist]);

  return (
   
      <div>
        <Headers title="My todos list" searchBar={false} />
        
            <Addtodos addTodo={addTodo} />
            <Todos todoslist={todoslist} onDelete={onDelete} />
          
        <Footer />
      </div>
    
  );
}

export default App;
