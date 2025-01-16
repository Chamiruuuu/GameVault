import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
const FavoriteGames = ({ favGames = [], setFavGames }) => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  const removeItem = (id) =>{
      setFavGames(favGames.filter((game) => game.id !== id));
    };
  


  return (
    <div className="max-w-full mx-auto px-6 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-100 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      {/* Games Grid */}
      {favGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
          {favGames.map((game) => (
            <div
              key={game.id}
              className="rounded-lg shadow-lg overflow-hidden bg-transparent hover:transition-all duration-300 border border-gray-800 hover:scale-105"
            >
              <div className="relative h-52 overflow-hidden group">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-3">
                  <div className="flex flex-wrap gap-2">
                    {game.platforms?.map((platform) => (
                      <span
                        key={platform.platform.id}
                        className="bg-gray-800/90 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-gray-600"
                      >
                        {platform.platform.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <h2 className="text-xl font-bold text-gray-100 line-clamp-1 hover:line-clamp-none">
                  {game.name}
                </h2>
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-900/80 text-blue-100 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-700">
                      ★ {game.rating || "N/A"}
                    </span>
                    <span className="bg-green-900/80 text-green-100 text-xs font-medium px-2.5 py-1 rounded-full border border-green-700">
                      {game.released?.split("-")[0] || "Unknown"}
                    </span>
                  </div>
                </div>
                <button onClick={()=> removeItem(game.id)} className="bg-indigo-600 hover:bg-indigo-700 text-white  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg">
                  Remove 
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Fallback Message for No Games
        <div className="text-center text-gray-300 mt-10">
          <p className="text-lg  lg:text-2xl">No favorite games found.</p>
          <p className="text-sm text-gray-400 lg:text-3xl">
            Add some games to your favorites. {" "}
            <span
              className="cursor-pointer underline text-white"
              onClick={onBack}
            >
              see them here
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default FavoriteGames;
