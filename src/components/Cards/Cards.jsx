import { CancelRounded, Favorite, FavoriteBorder } from "@mui/icons-material";
import "./Cards.css";
import { red } from "@mui/material/colors";

export const Cards = (collaborator) => {
  const { name, rol, photo, id, fav } = collaborator.data;
  const { color, deleteCollaborator, like } = collaborator;

  return (
    <div className="collaborator">
      <CancelRounded className="icon" onClick={() => deleteCollaborator(id)} />
      <div className="card__header" style={{ backgroundColor: color }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{rol}</h5>
        {fav ? (
          <Favorite sx={{ color: red[600] }} className="like" onClick={() => like(id)} />
        ) : (
          <FavoriteBorder sx={{ color: red[600] }} className="like" onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};
