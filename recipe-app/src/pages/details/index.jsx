import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";

export default function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorite } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`http://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img src={recipeDetailsData?.recipe.image_url} className="w-full h-full object-cover block group-hover:scale-105 duration-300" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">{recipeDetailsData?.recipe?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">{recipeDetailsData?.recipe?.title}</h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex((item) => item.id === recipeDetailsData?.recipe?.id) !== -1
              ? "Remove from favorite"
              : "Add to favorite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients:</span>
          <ul className="flex flex-col gap-3 mt-5">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-xl text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-xl  text-black">{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
