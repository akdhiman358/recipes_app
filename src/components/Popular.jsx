import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from 'react-router-dom';
function Popular() {
    const key = import.meta.env.VITE_API_KEY;
    const [popular,setPopular] = useState([])

    
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
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
      <Slider {...settings}>
      { 
        popular.map((recipe)=>{
          return(
            <div key={recipe.id}>
              
            <Link to={`/recipe/${recipe.id}`}>
              <div className='m-4 rounded-3xl overflow-hidden relative min-h-[15rem]'>
                <p className='px-2 mb-6 text-sm absolute z-10 text-center bottom-0 w-full text-white'> {recipe.title} </p>
                <img className='rounded-xl h-full w-full object-cover absolute'  
                src={recipe.image} alt={recipe.title} />
                <div className='bg-cover bg-gradient-to-b from-transparent to-black via-transparent w-full h-full absolute z-3'></div>
              </div>
            </Link>
              
            </div>
          )
        })
      }
      </Slider>
    </div>
  )
}

export default Popular