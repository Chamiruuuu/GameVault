import { useContext, useState } from "react";
import { gameData } from "../App";
import Header from "./Header";
import SideNav from "./Sidenav";

// eslint-disable-next-line react/prop-types
const Base = ({ handleClick, handleGenre, description }) => {
  const { data, loading, title, favGames, setFavGames } = useContext(gameData);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = data.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToFav = (id) => {
    const existingGame = favGames.find((game) => game.id === id);

    if (existingGame) {
      return;
    } else {
      const newGame = data.find((game) => game.id === id);
      setFavGames((prevGames) => [...prevGames, newGame]);
    }
  }

  return (
    <div className="min-h-screen flex">
      <SideNav handleClick={handleClick} handleGenre={handleGenre} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex-grow">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {loading ? (
          <h1 className="font-sans font-bold text-white text-2xl text-center lg:text-left lg:text-4xl" id="loading">
            Chill lang loading pa....
          </h1>
        ) : (
          <>
            <h1 className="font-sans font-bold text-white text-2xl text-center lg:text-4xl lg:text-left" id="title">
              {title}
            </h1>
            <p className="text-white font-sans text-sm m-3 text-center">{description}</p>
            <div className="max-w-full mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                {filtered?.map((game) => (
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
                      {/* Platforms overlay */}
                      <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-gray-900/90 to-transparent p-2">
                        <div className="flex flex-col gap-2">
                          {game.platforms?.map((platform) => (
                            <span
                              key={platform.platform.id}
                              className="bg-gray-800/90 text-gray-300 text-xs px-1.5 py-1 rounded border border-gray-700"
                              title={platform.platform.name}
                            >
                              {platform.platform.name.slice(0, 3)}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Bottom gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
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
                        <button
                          onClick={() => addToFav(game.id)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg"
                        >
                          Add To Favorite
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Base;
