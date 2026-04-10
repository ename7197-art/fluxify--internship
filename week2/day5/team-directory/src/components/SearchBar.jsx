const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8">
      <div className="max-w-md mx-auto">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search Team Members
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or role..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
