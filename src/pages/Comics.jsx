import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Comics = ({}) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--ybvpc4ksyyjp.code.run/comics/${id}`
        );
        response.data && setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.status);
      }
    };
    fetchData();
  }, [id]); //tableau de dependances pour le search; il refresh
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container">
      <div className="article-container"></div>
      {data.comics.map((detail, index) => {
        return (
          <div key={detail._id}>
            {/* J'affiche le nom dela clef  */}
            <div className="article-container">
              <img
                src={detail.thumbnail.path + "." + detail.thumbnail.extension}
                alt={name}
              />
              <span>{detail.title} </span>
              <span>{detail.description} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
