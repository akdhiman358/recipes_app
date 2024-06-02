import React from 'react'
import { CiPizza,CiBurger, } from "react-icons/ci";
import { GiNoodles,GiChopsticks } from "react-icons/gi";
import  {NavLink } from 'react-router-dom';
function Category() {
  return (
    <div className='flex gap-5 justify-center mt-5'>
        <div>
        <NavLink className='bg-slate-400 flex items-center justify-center flex-col h-16 w-16 rounded-full' to={`/cuisine/Italian`}>
          <CiPizza className='text-xl text-white font-bold'/>
          <h6 className='text-xs text-white '>Italian</h6>
        </NavLink>
        </div>
        <div>
        <NavLink className='bg-slate-400 flex items-center justify-center flex-col h-16 w-16 rounded-full' to={`/cuisine/American`}>
          <CiBurger className='text-xl text-white font-bold'/>
          <h6 className='text-xs text-white '>American</h6>
        </NavLink>
        </div>
        <div>
        <NavLink className='bg-slate-400  flex items-center justify-center flex-col h-16 w-16 rounded-full' to={`/cuisine/Japanese`}>
          <GiChopsticks className='text-xl text-white font-bold'/>
          <h6 className='text-xs text-white '>Japenese</h6>
        </NavLink>
        </div>
        <div>
        <NavLink className=' bg-slate-400 flex items-center justify-center flex-col h-16 w-16 rounded-full' to={`/cuisine/Thai`}>
          <GiNoodles className='text-xl text-white font-bold'/>
          <h6 className='text-xs text-white '>Thai</h6>
         </NavLink>          
        </div>
    </div>
  )
}

export default Category