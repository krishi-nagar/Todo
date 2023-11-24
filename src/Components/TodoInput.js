import React,{useState} from 'react'

function TodoInput(props) {
    const[InputText,setInputText] = useState();
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(InputText)
            setInputText("")
        }
    }
  return (
    <div className='Input-Container'>
     <input type='text' className='input-box-todo' placeholder='Enter Your Todo '
     value={InputText}
      onChange={e=>{setInputText(e.target.value)}}
      onKeyDown={handleEnterPress}
      />
     <button className='add-btn' 
     onClick={()=>{props.addList(InputText)
        setInputText("")}}>+</button> 
     
     
     <div>{InputText}</div>
    </div>
  )
}

export default TodoInput
