import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Base from "./Pages/Base";
import Data from "./Data/GameData";
import Next from "./Pages/pogination";
import FavoriteGames from "./Pages/Favorite";
import ranges from "./Data/Ranges";
import genres from "./Data/Genre";

export const gameData = createContext({
  data: [],
  setData: () => {},
});

const App = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [genre, setGenre] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("All games");
  const [favGames, setFavGames] = useState([]);

  const handleClick = (range) => {
    const currentRange = ranges[range] || {
      startDate: new Date(),
      endDate: new Date().toISOString().split("T")[0],
      title: "Damn way nakuha guro",
      top: null,
    };

    document.getElementById("title").innerHTML = currentRange.title;
    setNextPage(1);
    setDate(currentRange.startDate.toISOString().split("T")[0]);
    setEndDate(currentRange.endDate);
    setTitle(currentRange.title);
    setGenre(currentRange.genre);
  };

  const handleGenre = (genre) => {
    const currentGenre = genres[genre] || {
      title: "Damn way nakuha guro",
      GameGenre: null,
      top: null,
    };
    setDescription(currentGenre.description);
    setGenre(currentGenre.GameGenre);
    setTitle(currentGenre.title);
  };

  return (
    <gameData.Provider
      value={{
        data,
        setData,
        date,
        setDate,
        endDate,
        genre,
        loading,
        setLoading,
        title,
        setEndDate,
        setDescription,
        favGames,
        setFavGames,
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Base handleClick={handleClick} handleGenre={handleGenre} description={description} />
                <Next nextPage={nextPage} setNextPage={setNextPage} />
                <Data nextPage={nextPage} genre={genre} setGenre={setGenre} />
              </>
            }
          />
          <Route
            path="/favorites"
            element={<FavoriteGames favGames={favGames} handleClick={handleClick} handleGenre={handleGenre} setFavGames={setFavGames} />}
          />
        </Routes>
      </Router>
    </gameData.Provider>
  );
};

export default App;
