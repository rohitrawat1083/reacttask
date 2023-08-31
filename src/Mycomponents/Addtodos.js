import React from 'react'
import { useState } from 'react'


export const Addtodos = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const submit = (e) => {                             
        e.preventDefault();    //hlps to prevent the reloading the page
        if (!title || !description) {
            alert("title or description cant be blank");
        }
        else{
            addTodo(title, description);
            setTitle ("");
            setDesc("");
        }
        
    }

    return (
        <>
            <div className="container my-3" >
                <h3>Add  Task Here!</h3>
                <form className="row g-3" onSubmit={submit}>

                    <div className="mb-3">
                        <label htmlFor="title" className="visually-hidden"></label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />Title
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" placeholder='Description' className="visually-hidden"></label>
                        <input type="text" value={description} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="description" />Description
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-sm btn-success">Add Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addtodos
