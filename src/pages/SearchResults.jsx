import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SearchResults() {
  const key = import.meta.env.VITE_API_KEY;
  console.log(key)
  let params = useParams()
  console.log(params)
  const [searchedRecipies,setSearchedRecipies] = useState([])

  const getSearchResults = async(name)=>{
    const data =
      await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${name}`)
   
    const recipies = await data.json()
   
    setSearchedRecipies(recipies.results)
    

  }
  useEffect(()=>{
    getSearchResults(params.type)
    console.log(searchedRecipies)
  }
  ,[params.type]
    
  )
  return ( 
    <div className='m-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    { searchedRecipies.map((item)=>{
            return(
                <div key={item.id} className=''>
                   <Link to={`/recipe/${item.id}`}>
                    <img className='rounded-3xl'
                    src={item.image} alt="" />
                    <h6 className='text-center mt-4'>{item.title}</h6>
                  </Link>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default SearchResults