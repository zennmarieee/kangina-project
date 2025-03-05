import React from "react";

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const categories = [
    { id: "all", name: "all.", iconSrc: "/public/all.png", count: 10 },
    { id: "agahan", name: "agahan.", iconSrc: "/public/agahan.png", count: 5 },
    { id: "tanghalian", name: "tanghalian.", iconSrc: "/public/tanghalian.png", count: 8 },
    { id: "hapunan", name: "hapunan.", iconSrc: "/public/hapunan.png", count: 7 },
    { id: "merienda", name: "merienda.", iconSrc: "/public/merienda.png", count: 6 }
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl text-[#ED3F25] font-bold mb-3">Menu Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {categories.map((category) => (
          <button key={category.id} className="p-3 bg-white border rounded-lg shadow flex flex-col items-start hover:bg-gray-100 transition duration-200">
            <img src={category.iconSrc} alt={category.name} className="w-12 h-12 mb-2" />
            <span className="text-left text-m font-medium">{category.name}</span>
            <span className="text-left text-sm text-gray-500">{category.count} items</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;