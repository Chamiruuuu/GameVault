import { useContext, useEffect } from "react";
import { gameData } from "../App";
const apiKey = "446f058ac9ac4549a4e6f291f1b05c00";

// eslint-disable-next-line react/prop-types
const Data = ({ nextPage }) => {
  const {
    data,
    setData,
    date,
    endDate,
    genre,
    setLoading,
    setDate,
    setEndDate,
    setDescription,
  } = useContext(gameData);

  let result = null;

  const fetchData = async () => {
    try {
      setLoading(true);
      let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${nextPage}&page_size=12`;

      console.log("Fetching data with:", { date, endDate, genre });

      if (genre) {
        setDate(null);
        setEndDate(null);
        url += `&${genre}`;
      }

      if (date && endDate) {
        setDescription('')
        url += `&dates=${date},${endDate}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      result = await response.json();
      setData(result.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [date, endDate, nextPage, genre]);

  useEffect(() => {
    console.log("Fetched data:", data);
  }, [data]);

  return null;
};

export default Data;
