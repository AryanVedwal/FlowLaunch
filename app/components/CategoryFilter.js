const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-4">
      <div className="flex flex-wrap">
        <button
          onClick={() => onCategoryChange("")}
          className={`mr-2 mb-2 px-3 py-1 rounded-md ${
            activeCategory === "" ? "bg-[#7851A9] text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`mr-2 mb-2 px-3 py-1 rounded-md capitalize ${
              activeCategory === category
                ? "bg-[#7851A9] text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
