import axios from "axios";
import { useState, useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log("Failed to fetch data", err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section
      key={idMeal}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-56 object-cover"
      />

      <section className="p-4">
        <p className="text-lg font-semibold text-gray-800">{strMeal}</p>
        <p className="text-sm text-gray-500">#{idMeal}</p>
      </section>
    </section>
  ));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Seafood Meals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itemsList}
      </div>
    </div>
  );
};

export default Meals;