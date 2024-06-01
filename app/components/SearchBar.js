const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
      onSearch(e.target.value)
    }
  
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-md outline-none bg-[#ffffff50] text-zinc-500 placeholder:text-zinc-500"
          onChange={handleSearch}
        />
      </div>
    )
  }
  
  export default SearchBar