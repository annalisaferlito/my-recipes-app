import React, { useEffect, useState } from "react";
import "./RecipesList.css";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
        try {
            const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s="
            );
            if (!response.ok) {
            throw new Error("Errore di rete");
            }
            const data = await response.json();
            setRecipes(data.meals); // Imposta le ricette nello stato
            console.log(data); // Output dei dati ricevuti
        } catch (errore) {
            console.log(errore);
        }
    };

    fetchRecipes(); // Chiama la funzione per recuperare le ricette
  }, []); // Array vuoto, quindi l'effetto viene eseguito solo una volta al montaggio

    return (
        <div className="recipes">
            <h1 className="recipes">Recipes</h1>
        <ul>
            {recipes.map((recipe) => (
            <li key={recipe.idMeal}>
                <p>{recipe.strMeal}</p>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </li>
            ))}
        </ul>
        </div>
    );
};

export default RecipesList;
