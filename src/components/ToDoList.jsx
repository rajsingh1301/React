import React,{useState} from 'react'

const ToDoList = () => {
    const [tasks, setTasks]= useState(["gaand mara lo", "maa chuda lo","randi bula lo"])
    const [newTasks, setNewTasks] = useState("")
    const handleInputChange = (event) =>{
        setNewTasks(event.target.value)
    }
    const addTasks = () =>{

    }
    const deleteTasks = (index) =>{

    }
    const moveTaskUp = (index) =>{

    }
    const moveTaskDown = (index) =>{

    }
     
  return (
    <div className='to-do-list'>
      <h1>To-do-list</h1>
      <input type="text"  placeholder='Enter the task...' onChange={handleInputChange}/>
        <button className='add-button' onClick={addTasks}>Add</button>
        
    </div>
  )
}

export default ToDoList
