import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
function Popular() {
    const key = import.meta.env.VITE_API_KEY;
    const [popular,setPopular] = useState([])
    
    useEffect(()=>{
        console.log('rendered')
        getPopualar()
      
    }
    ,[])
      
    const getPopualar = async () =>{
      const check = localStorage.getItem('popular')
      if(check){
        setPopular(JSON.parse(check))
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`)
        const data = await api.json()
        localStorage.setItem('popular',JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(data.recipes)
      }
      
         }

 
  
  return (
  
    <div className='m-4'>
      <h3>Popular Picks</h3>
      <Splide options={{
        perPage:4,
        gap:10,
        arrowPath:false,
        rewind:true,
      }}>
      { 
        popular.map((recipe)=>{
          return(
            <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <div className='m-4 rounded-3xl overflow-hidden relative min-h-[15rem]'>
                <p className='px-2 mb-6 text-sm absolute z-10 text-center bottom-0 w-full text-white'> {recipe.title} </p>
                <img className='rounded-xl h-full w-full object-cover absolute'  
                src={recipe.image} alt={recipe.title} />
                <div className='bg-cover bg-gradient-to-b from-transparent to-black via-transparent w-full h-full absolute z-3'></div>
              </div>
            </Link>
              
            </SplideSlide>
          )
        })
      }
      </Splide>
    </div>
  )
}

export default Popular