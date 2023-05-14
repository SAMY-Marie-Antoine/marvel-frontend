import { Link } from "react-router-dom";

const Details = ({ character }) => {
  const { comics, name, thumbnail, _id } = character;
  return (
    <Link to={`/characters/${_id}`}>
      <button className="button">Cliquez sur l'offre !</button>
      <div className="container">
        <div className="article-container">
          <div>
            <h1>{name}</h1>
            <img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
          </div>
        </div>
        {comics.map((details, index) => {
          <div key={index}>
            <p>{details}</p>
          </div>;
        })}
      </div>
    </Link>
  );
};

export default Details;
