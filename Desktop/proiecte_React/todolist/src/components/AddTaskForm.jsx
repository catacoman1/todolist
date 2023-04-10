import React from 'react'
import PropTypes from 'prop-types'

const AddTaskForm = ({ newTask, setNewTask, addTask     }) => {
  return (
    <>
          {/*Add Task */}

          <div className='row'>
            <div className='col'>
              <input
                placeholder="Type your task here..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className='form-control form-control-lg'>
              </input>
              
            </div>
            <div className='col-auto'>
              <button
                onClick={addTask}
                className='btn btn-lg btn-secondary'>
                Add Task
              </button>
            </div>
          </div>
          <br></br>
        </>
  )
}



export default AddTaskForm