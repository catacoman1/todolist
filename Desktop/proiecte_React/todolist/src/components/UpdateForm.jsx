import React from 'react'


const UpdateForm = ({updateData, changeTask, cancelUpdate, updateTask}) => {
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <input
                        value={updateData && updateData.title}
                        onChange={(e) => changeTask(e)}
                        className='form-control form-control-lg'></input>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-lg btn-secondary mr-20'
                        onClick={updateTask}
                    >Update</button>
                    <button className='btn btn-lg btn-warning'
                        onClick={cancelUpdate}
                    >Cancel</button>
                </div>
            </div>
            <br></br>
        </>
    )
}



export default UpdateForm