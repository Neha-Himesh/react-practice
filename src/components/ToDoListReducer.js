import React, {useReducer, useState} from 'react'

const initialState = {
    tasks: [],
    editIndex: '',
    newTask: '',
    editedTaskValue: ''
}
const reducer = (state, action) => {
    switch(action.type){
        case 'setNewTask':
            return {...state, newTask : action.payload}
        case 'add':
            return {...state, tasks: [...state.tasks, action.payload], newTask: ''}
        case 'setEditTaskValue' :
            return {...state, editedTaskValue: action.payload}
        case 'edit':
            const editIndex = action.editIndex
            const updatedTasks = [...state.tasks]
            updatedTasks[editIndex] = action.payload
            return {...state,
                tasks: updatedTasks,
                editIndex: ''
            }
        case 'setEditIndex':
            const indexOfTask = action.editIndex
            return {...state, editIndex: indexOfTask}
        case 'delete':
            const deleteIndex = action.deleteIndex
            const tasksStateIncludingDeleteTask = {...state}
            const finalTasks = tasksStateIncludingDeleteTask.tasks.filter((_, index) => index !== deleteIndex )
            return {...state, tasks: finalTasks}
        default :
            return state

    }
}
function ToDoListReducer(){
    const [toDoTasks, dispatch] = useReducer(reducer, initialState)
    // const[newTask, setNewTask] = useState('')
    // const [editedTaskValue, setEditedTaskValue] =useState('')
    return (
        <div>
            <input type="text" value={toDoTasks.newTask} onChange={(e)=>dispatch({type: 'setNewTask', payload: e.target.value })}/> <button type="button" onClick = {() => {dispatch({type: 'add', payload: toDoTasks.newTask})}}>Add Task</button>
            <ul>
            {
                toDoTasks && toDoTasks.tasks.map((task, index) =>
                    <li key={index}>
                        {!(toDoTasks.editIndex === index)?
                            <>
                            {task}  
                            <button type="button" onClick={()=>{dispatch({type: 'setEditIndex', editIndex: index}); dispatch({type: 'setEditTaskValue', payload: task})}}>Edit Task</button>
                            <button type="button" onClick={()=>dispatch({type: 'delete', deleteIndex: index})}>Delete Task</button>
                            </>
                        : <><input type="text" value={toDoTasks.editedTaskValue} onChange={(e)=>dispatch({type: 'setEditTaskValue', payload: e.target.value})}/> 
                          <button type="button" onClick={(e)=> dispatch({type: 'edit', editIndex: index, payload: toDoTasks.editedTaskValue})}>Update Task</button> </>
                        } 
                    </li>
                )
            }
            </ul>
           
        </div>
    )
}

export default ToDoListReducer