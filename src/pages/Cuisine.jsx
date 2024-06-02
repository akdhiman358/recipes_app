import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'    
import {Link, useParams } from 'react-router-dom'

function Cuisine() {
    const key = import.meta.env.VITE_API_KEY;
    const [cuisine,setCuisine] = useState([])
    const params = useParams()

    const getCuisine = async(name)=>{
        const check = localStorage.getItem(params.type)
        if(check){
            setCuisine(JSON.parse(check))
        }else{
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${name}&number=20`)
            const recipes = await data.json()
            localStorage.setItem(params.type,JSON.stringify(recipes.results))
            setCuisine(recipes.results)
        }
    }
    useEffect(()=>{
        getCuisine(params.type)
        console.log(params.type)

    }
    ,[params.type])
    
  return (
    <div className='m-10'>
    <motion.div
     animate={{opacity:1}}
     initial={{opacity:0}}
     exit={{opacity:0}}
     transition={{duration:0.5}}
     >
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        { cuisine.map((item)=>{
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
    </motion.div>
    </div>

  )
}

export default Cuisine