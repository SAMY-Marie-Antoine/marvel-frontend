import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Offer = ({}) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--ybvpc4ksyyjp.code.run/characters/${id}`
        );
        response.data && setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.status);
      }
    };
    // J'apelle immédiatement ma fonction fetchData
    fetchData();
  }, [id]); //tableau de dependances pour le search; il refresh
  // console.log("mon composant se render");
  return isLoading ? (
    <></>
  ) : (
    // <p>Loading ...</p>
    <Link to={`/comics/${data._id}`}>
      <div className="container">
        <div className="article-container">
          <div>
            {data.thumbnail.path && (
              <img
                src={data.thumbnail.path + "." + data.thumbnail.extension}
                alt={name}
              />
            )}
            <div className="article-container">
              <span>{data.name} </span>
              <span>{data.description} </span>
            </div>
          </div>
        </div>

        {/* <Link to="/payment" state={data}>
        Acheter
      </Link> */}
      </div>
    </Link>
  );
};

export default Offer;
