import { useEffect, useState } from "react";
import { categoryData } from "../data/categoryData";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoryData);
  }, []);
  return (
    <div className="border-b-2 h-28">
      <ul className="flex flex-row items-center gap-8 justify-center">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center flex-col">
            <img
              src={category.categoryImage}
              alt={category.categoryName}
              className="w-20 h-20"
            />
            <span className="font-semibold">{category.categoryName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
