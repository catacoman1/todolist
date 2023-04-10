import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle, faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'



import './App.css';

function App() {

  const [toDo, setToDo] = useState([]);


  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask);

  }
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }
  const cancelUpdate = () => {
    setUpdateData('');

  }
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);

  }
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }


  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App (ReactJS)</h2>
      <br></br>

      {/*Update Task */}
      {updateData && updateData ? (
        <>
          <div className='row'>
            <div className='col'>
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className='form-control form-control-lg'></input>
            </div>
            <div className='col-auto'>
              <button className='btn btn-lg btn-success mr-20'
                onClick={updateTask}
              >Update</button>
              <button className='btn btn-lg btn-warning'
              onClick={cancelUpdate}
              >Cancel</button>
            </div>
          </div>
          <br></br>
        </>
      ) : (
        <>
          {/*Add Task */}

          <div className='row'>
            <div className='col'>
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className='form-control form-control-lg'>
              </input>
            </div>
            <div className='col-auto'>
              <button
                onClick={addTask}
                className='btn btn-lg btn-success'>
                Add Task
              </button>
            </div>
          </div>
          <br></br>
        </>

      )}





      { }

      {toDo && toDo.length ? '' : 'No Tasks...'}

      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1) //sortare taskuri
        .map((task, index) => {
          return (
            <React.Fragment>
              <div className='col taskBg'>
                <div className={task.status ? 'done' : ''}>
                  <span className='taskNumber'>{index + 1}</span>
                  <span className='taskText'>{task.title}</span>
                </div>
                <div className='iconsWrap'>
                  <span title="Completed / Not Completed"
                    onClick={(e) => markDone(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                  </span>
                  {task.status ? null : (<span title="Edit"
                    onClick={() => setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false })}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                  </span>)}

                  <span title="Remove"
                    onClick={() => deleteTask(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                  </span>
                </div>
              </div>

            </React.Fragment>
          )
        }
        )
      }


    </div>
  );
}

export default App;
