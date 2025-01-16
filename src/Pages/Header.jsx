// eslint-disable-next-line react/prop-types
const Header = ({searchQuery, setSearchQuery}) => {
    return (
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          placeholder="Search games..."
          className=" mt-16 p-2 w-full m-5 lg:w-[100%] lg:p-3 bg-gray-800 text-gray-300 lg:mt-9 mr-5 rounded-md border border-gray-600 focus:outline-none"
        />
      </div>
    );
  };
  
  export default Header;
  