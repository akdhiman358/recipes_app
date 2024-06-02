import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Search() {
  const [input,setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e)=>{
    e.preventDefault();
    navigate(`/searchResults/${input}`)
  }

  return (
    <div className=''>
        <form onSubmit = {submitHandler}
         className='bg-slate-400 rounded-2xl flex gap-2 px-2 py-1 items-center justify-center' action="">
          <FaSearch className='text-red-400 '/>
          <input className='outline-none flex-1 bg-transparent '
           type="text" 
           onChange={(e)=>{
            setInput(e.target.value)
           }}
           value={input}   />
        </form>
      
    </div>
  )
}

export default Search