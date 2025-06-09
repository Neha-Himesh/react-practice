import React, {useState} from 'react'

function ToDoList(){
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [editButton, setEditButton] = useState(false)
    const [deleteButton, setDeleteButton] = useState(false)
    const [editedTaskValue, setEditedTaskValue] = useState('')
    const [editIndex, setEditIndex] = useState('')

    const addTask = () =>{
        setTasks([...tasks, newTask])
        setNewTask('')

    }
    const updateTask = (index) =>{
        const updatedTasks = [...tasks]
        updatedTasks[index] = editedTaskValue
        setTasks(updatedTasks)
        setEditButton(false)
        setEditIndex('')
    }
    const setEditPreRequisites =(index) =>{
        setEditButton(true)
        setEditIndex(index)
        const tasksCopy = [...tasks]
        setEditedTaskValue(tasksCopy[index])
    }
    const deleteTask = (indexToDelete) =>{
        setDeleteButton(true)
        const tasksCopy = [...tasks]
        const updatedTasks = tasksCopy.filter((task,index) =>
            index !== indexToDelete
        )
        setTasks(updatedTasks)
        setDeleteButton(false)
    }
    return (
        <div>
            <div>
                <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} /> 
                <button type="button" onClick = {()=>addTask()}>Add Task</button>
            </div>
            <div>
                <ul>
                    {tasks && tasks.map((task, index) =>(
                        <li key={index}>
                            {!editButton && !(editIndex === index)? 
                            <>
                                {task}
                                <button type="button" onClick={() => setEditPreRequisites(index)}>Edit Task</button> 
                                <button type="button" onClick={()=>deleteTask(index)} >Delete Task</button>
                            </>
                            
                        : <>    
                            <div>
                                <input type="text" value={editedTaskValue} onChange={(e) => setEditedTaskValue(e.target.value)}/> <button onClick={() => updateTask(index)}>Update Task</button>
                            </div> 
                            </>
                            }
                        
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ToDoList;