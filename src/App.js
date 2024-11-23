import React, { useState } from "react";
import TodoItems from "./TodoItems";
import InputArea from "./InputArea";
import './App.css';



function App() {

 
  const [items,setItems] = useState([]);


  
function addItem(inputText){
  setItems(prevItems=>{
    return[...prevItems,inputText]
  })

  

}

function deleteItems(id){
 setItems(prevItems =>{
  return prevItems.filter((item,index)=>{
    return index!== id;

  })
 })
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      onAdd ={addItem}
      />
      <div>
        <ul>
      {items.map((todoItems,index) => {
        return <TodoItems 
        key={index}
        id ={index}
        text ={todoItems}
        onChecked = {deleteItems}
        />
      })};
        </ul>
      </div>
    </div>
  );
}

export default App;
