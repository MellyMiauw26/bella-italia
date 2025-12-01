import React, { useState, useEffect } from "react";
import Dish from "./Dish";

function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Italian")
      .then(res => res.json())
      .then(data => {
        // Prüfen, ob meals existiert
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMeals([]);  // Fallback, falls Fehler
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Lade Speisekarte...</p>;

  if (!meals.length) return <p>Keine Gerichte gefunden.</p>;

  return (
    <section>
      <h2>Unsere Speisekarte</h2>
      <div className="dish-grid">
        {meals.map(meal => (
          <Dish key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </section>
  );
}

export default Menu;

