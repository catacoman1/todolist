import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircle, faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'



import './App.css';

function App() {

const [toDo, setToDo] = useState([
  {"id": 1, "title": "Task 1", "status": false},
  {"id": 2, "title": "Task 2", "status": false}
]);

  const [newTast, setNewTask]=useState('');
  const [updateData, setUpdateData]=useState('');

  const addTask = () => {

  }

  const deleteTask = (id) => {


  }
  const markDone = (id) => {


  }
  const cancelUpdate = () => {


  }
  const changeTask = (e) => {


  }
  const updateTask = () => {


  }


  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App (ReactJS)</h2>
      <br></br>


    {   }
     
    {toDo && toDo.length ? '' : 'No Tasks...'}   

    {toDo && toDo
    .map((task,index)=>{
      return (
        <React.Fragment>
          <div className='col taskBg'>
            <div className={task.status ? 'done' : ''}>
            <span className='taskNumber'>{index+1}</span>
          <span className='taskText'>{task.title}</span>
            </div>
            <div className='iconsWrap'>
              <span>
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
              </span>
              <span>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </span>
              <span>
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
