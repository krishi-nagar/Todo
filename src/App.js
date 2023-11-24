import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import TodoInput from './Components/TodoInput';
import Todolist from './Components/TodoList';
function App() {

const[listTodo,setListTodo]=useState([]);

let addList = (InputText)=>{
  if(InputText !== '')
    setListTodo([...listTodo,InputText])    
}
const deleteListItem = (key)=>{
  let newListTodo = [...listTodo];
  newListTodo.splice(key,1)
  setListTodo([...newListTodo])
}
  return (
    <div className='main-container'>
     <div className = 'center-container'>
     <TodoInput addList={addList}/>
     <h1 className="app-heading">TODO</h1>
     <hr/>
     {listTodo.map((listItem,i)=>{
       return (
         <Todolist key={i} index={i} item={listItem}  deleteItem={deleteListItem}/>
       )
     })}
     </div>
    </div>
  );
}

export default App;
