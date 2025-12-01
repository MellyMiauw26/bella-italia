import React from "react";

function Dish({ meal }) {
  return (
    <article style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100%" }} />
      <h3>{meal.strMeal}</h3>
    </article>
  );
}

export default Dish;
