import { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Details";

const Characters = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--ybvpc4ksyyjp.code.run/characters?name=${search}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]); //tableau de dependances pour le search; il refresh

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container">
      <div className="article-container">
        {data.results.map((character) => {
          return (
            <div key={character._id}>
              <Details key={character._id} character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
