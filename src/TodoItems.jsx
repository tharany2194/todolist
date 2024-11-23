import React from "react";

function TodoItems(props){








   //To bring strikeout over the list 
//   const[isDone,setIsDone] = useState(false);

//   function handleClick(){
//     setIsDone((prevValue)=>{
//         return !prevValue;
//     })
//   }


    // return <div onClick={handleClick} style={{ textDecoration:isDone?"line-through":null}}><li>{props.text}</li></div>
    return <div onClick={()=>{
        props.onChecked(props.id)
    }}><li>{props.text}</li></div>
}
export default TodoItems;
