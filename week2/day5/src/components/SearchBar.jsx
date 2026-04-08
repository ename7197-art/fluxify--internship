const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search by name or role (e.g. Developer)..."
        className="w-full p-4 pl-12 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="absolute left-4 top-4 text-gray-400">
        🔍
      </div>
    </div>
  );
};
export default SearchBar;