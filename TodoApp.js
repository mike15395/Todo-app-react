import React, { useState } from "react";
// import DeleteIcon from '@material-ui/icons-material/Delete';
// import IconButton from '@material-ui/icons-material/IconButton';
import { Button } from "reactstrap";

export default function TodoApp() {
    const [insideText, handleText] = useState("");
    const [todolist, setList] = useState([]);
     
    function handleSubmit(event) {
        event.preventDefault();
        setList((todolist) => [...todolist, insideText]);
        handleText("");
        
    }

    function handleDelete(key) {
        todolist.splice(key, 1);
        setList((arr) => [...arr]);
    }
    return (
     
        <>
            <h1>Todo App</h1>
            <div>What task you want to add</div>
            <input type="text" value={insideText} onChange={(event) => handleText(event.target.value)} />
          
            <Button color="success" onClick={handleSubmit} >submit</Button>
            {todolist.map((item,index)=>(
                <div key={index} className="list-items" style={{ display: "flex", justifyContent: "center" }}>
                <ul>
                        <li>{item}
                            <Button color="secondary" onClick={() => handleDelete(index)}>
                                Delete
                            </Button>
                        </li>
                </ul>   
            </div> 
            
            ))}
            
                  
            
        </>
    );
}