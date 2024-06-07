import React, { useEffect, useState } from 'react';
import { useAsyncError, useParams } from 'react-router-dom';

function Recipe() {
  const key = import.meta.env.VITE_API_KEY;
  const [recipeDetails, setRecipeDetails] = useState({});
  let params = useParams();
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`
    );
    const recipe = await data.json();
    setRecipeDetails(recipe);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="recipe flex flex-col items-center mt-10 mb-5"> {/* Base styles */}
      <div className="recipe-header mb-10"> {/* Header section */}
        <h2 className="text-2xl font-semibold mb-5">{recipeDetails.title}</h2>
        <img
          className="recipe-image rounded-lg max-w-sm md:max-w-full" // Responsive image
          src={recipeDetails.image}
          alt=""
        />
      </div>
      <div className="recipe-tabs flex justify-center gap-4 mb-5"> {/* Tabs section */}
        <button
          className={`recipe-tab p-1 text-gray-800 font-semibold border border-gray-800 rounded-md px-4 py-2 ${
            activeTab === 'instructions' ? 'bg-gray-200' : ''
          }`}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
        <button
          className={`recipe-tab p-1 text-gray-800 font-semibold border border-gray-800 rounded-md px-4 py-2 ${
            activeTab === 'ingredients' ? 'bg-gray-200' : ''
          }`}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>
      </div>
      {activeTab === 'instructions' && (
        <div className="recipe-content p-5"> {/* Content section */}
          <h6 className="mt-3" dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h6>
          <h6 className="mt-3" dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></h6>
        </div>
      )}
      {activeTab === 'ingredients' && (
        <div className="recipe-ingredients p-5"> {/* Ingredients section */}
          <ul className="ingredients-list ml-10">
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li className="ingredient list-disc" key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Recipe;
