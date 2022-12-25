import React from 'react'
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const navigate = useNavigate();

  const addNew = () => {

    navigate('/Dashboard');
  }
  return (
    <>
      <div className="text-end my-5 mx-5">
        <button type="button" class="btn btn-outline-dark" onClick={addNew} >Add New </button>
      </div>
    </>
  )
}

export default Create
