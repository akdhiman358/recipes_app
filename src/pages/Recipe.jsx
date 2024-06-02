import React, { useEffect, useState } from 'react'
import { useAsyncError, useParams } from 'react-router-dom'

function Recipe() {
  const key = import.meta.env.VITE_API_KEY;
  const [recipeDetails,setRecipeDetails] = useState({})
  let params = useParams()
  const [activeTab,setActiveTab] = useState('instructions')
  const fetchDetails = async ()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`)
    const recipe = await data.json()
    setRecipeDetails(recipe)
  }

  useEffect(()=>{
    fetchDetails()
  }
  ,[params.name])
  return (
    
      <div className='mt-10 mb-5 flex gap-4'>
        <div>
          <h2 className='mb-10 ml-10 text-2xl font-semibold'>{recipeDetails.title}</h2>
          <img className='max-w-sm ' src={recipeDetails.image} alt="" />
        
        </div>
        <div>
          <div>
            <button className= {`${activeTab === 'instructions' ? 'active':''} px-4 py-2 text-gray-800 mr-8 font-semibold border-2 border-gray-800`} 
            
            onClick={()=>setActiveTab('instructions')}
            >Instructions</button>
            <button className={`${activeTab === 'ingredients' ? 'active':''} px-4 py-2 text-gray-800 mr-8 font-semibold border-2 border-gray-800`}
            onClick={()=>setActiveTab('ingredients')}
            >Ingredients</button>
          </div>
          {
            activeTab === 'instructions' && (
              <div>
              <h6 className='mt-3' dangerouslySetInnerHTML={{__html:recipeDetails.summary}}></h6>
              <h6 className='mt-3' dangerouslySetInnerHTML={{__html:recipeDetails.instructions  }}></h6>
            </div> 
            )
          }
          {
            activeTab ==='ingredients' && (
          <div className='mt-5'>
            <ul className='ml-10'>
              {
                recipeDetails.extendedIngredients.map((ingredient)=>(
                  <li className ='list-disc' key={ingredient}>{ingredient.original}</li>
                ))
              }
            </ul>
          </div>
            )
          }
     
      
    
        </div>
        
      </div>
   
  )
}

export default Recipe