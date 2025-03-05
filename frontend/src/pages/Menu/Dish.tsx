import React, { useState } from "react";

interface DishProps {
  searchTerm: string;
}

const Dish: React.FC<DishProps> = ({ searchTerm }) => {
  const [selectedDish, setSelectedDish] = useState<any | null>(null);

  const dishes = [
    {
      id: 1,
      name: "Crispy Pata",
      price: 70,
      image: "/crispypata.jpg",
      description: "Deep-fried pork leg that crunches louder than your mom's tsinelas landing on your back. Comes with a side of existential guilt.",
      ingredients: "Pork leg, oil (probably too much), salt, pepper, garlic, and the sound of a cholesterol warning in the distance.",
      servingSize: "2-3 people",
      dietaryInfo: "Contains pork; high in fat and cholesterol. Not suitable for individuals with hypertension or heart conditions."
    },
    {
      id: 2,
      name: "Happy Meal (Bisaya Espesyal)",
      price: 30,
      image: "/happymeal.jpg",
      description: "Happiness in a meal—now with extra bisaya love. Comes with a surprise ingredient (spoiler: it's probably love… or a free hug).",
      ingredients: "Rice, sud-an (don't ask, just eat), and a bit of hugot energy to start your day.",
      servingSize: "1 plate",
      dietaryInfo: "Ingredients may vary; could contain allergens such as gluten, dairy, or seafood."
    },
    {
      id: 3,
      name: "Sinigang na Bangus",
      price: 65,
      image: "/bangus.jpg",
      description: "As sour as your ex but way more comforting. A warm, tamarind-based soup that hugs your soul (and taste buds).",
      ingredients: "Milkfish, tamarind, tomatoes, kangkong, radish, and enough sourness to make your face do a little dance.",
      servingSize: "1 bowl",
      dietaryInfo: "Contains fish; may trigger seafood allergies. High in protein and vitamin C."
    },
    {
      id: 4,
      name: "Pain Apple",
      price: 15,
      image: "/painapple.jpeg",
      description: "Pineapple, but with attitude. Sweet, tangy, and possibly the reason your pizza-loving friend will start a debate with you.",
      ingredients: "Pineapple, sugar, betrayal (if you hate pineapple on pizza).",
      servingSize: "1 slice",
      dietaryInfo: "Contains natural fruit sugars; may not be suitable for individuals with fructose intolerance."
    }
  ];

  // Filter dishes 
  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Dish List */}
      <div className="grid grid-cols-3 gap-4">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="p-4 border rounded-lg shadow-lg bg-white transition-all hover:shadow-xl h-80 flex flex-col"
          >
            <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-2 truncate">{dish.name}</h3>
            <p className="text-gray-600">Php {dish.price.toFixed(2)}</p>

            <div className="mt-auto pt-3 flex justify-between">
              <button className="bg-[#32347C] text-white px-3 py-1.5 text-sm rounded-full hover:bg-[#252566] transition">
                Add to cart
              </button>
              <button
                className="border border-[#32347C] text-[#32347C] px-6 py-1.5 text-sm rounded-full hover:bg-[#32347C] hover:text-white transition"
                onClick={() => setSelectedDish(dish)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay and Side Panel */}
      {selectedDish && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSelectedDish(null)}
          ></div>

          {/* Side Panel */}
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 z-50 transition-transform transform translate-x-0 flex flex-col">
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-grow pr-2">
              <h2 className="text-2xl font-bold text-[#32347C] break-words">{selectedDish.name}</h2>
              <p className="text-gray-600 mt-2 break-words">{selectedDish.description}</p>
              <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-40 object-cover rounded-lg mt-2" />
              <p className="mt-2 break-words"><strong>Ingredients:</strong> {selectedDish.ingredients}</p>
              <p><strong>Serving Size:</strong> {selectedDish.servingSize}</p>            
              <p><strong>Dietary Info:</strong> {selectedDish.dietaryInfo}</p>            
            </div>

            {/* Fixed Price & Button */}
            <div className="sticky bottom-0 left-0 w-full bg-white">
              <p className="font-bold text-lg">
                <strong>Price: Php </strong>{selectedDish.price?.toFixed(2)}
              </p>
              <button className="mt-2 w-full bg-[#32347C] text-white py-2 rounded-full hover:bg-[#252566]">
                Add to Cart
              </button>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Dish;